<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Jabatan;
use App\Models\Karyawan;
use App\Models\Login;
use App\Models\Unit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiDashboardController extends Controller
{
    public function index(Request $request)
    {
        // Ambil filter tanggal jika ada
        $tanggalBergabung = $request->input('tanggal_bergabung');
        $tanggalLogin = $request->input('tanggal_login');

        // Query untuk menghitung jumlah karyawan berdasarkan tanggal_bergabung (jika ada)
        $jumlahKaryawan = Karyawan::when($tanggalBergabung, function ($query) use ($tanggalBergabung) {
            return $query->whereDate('tanggal_bergabung', $tanggalBergabung);
        })->count();

        // Query untuk menghitung jumlah login berdasarkan tanggal_login (jika ada)
        $jumlahLogin = Login::when($tanggalLogin, function ($query) use ($tanggalLogin) {
            return $query->whereDate('tanggal_login', $tanggalLogin);
        })->count();

        // Hitung jumlah unit dan jabatan (tidak perlu filter karena tidak berdasarkan tanggal)
        $jumlahUnit = Unit::count();
        $jumlahJabatan = Jabatan::count();

        // Top 10 user dengan login terbanyak (>25 kali) berdasarkan filter tanggal login
        $topUsers = Login::select('karyawan_id', DB::raw('COUNT(*) as total_login'))
            ->when($tanggalLogin, function ($query) use ($tanggalLogin) {
                return $query->whereDate('tanggal_login', $tanggalLogin);
            })
            ->groupBy('karyawan_id')
            ->having('total_login', '>', 25)
            ->orderBy('total_login', 'desc')
            ->with('karyawan:id,nama,username')
            ->limit(10)
            ->get();

        return response()->json([
            'success' => true,
            'message' => 'Success',
            'data' => [
                'jumlah_total_karyawan' => $jumlahKaryawan,
                'jumlah_total_login' => $jumlahLogin,
                'jumlah_total_unit' => $jumlahUnit,
                'jumlah_total_jabatan' => $jumlahJabatan,
                'top_10_total_login' => $topUsers
            ]
        ]);
    }
}
