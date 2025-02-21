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

        $tanggalBergabung = $request->input('tanggal_bergabung');
        $tanggalLogin = $request->input('tanggal_login');

        $jumlahKaryawan = Karyawan::when($tanggalBergabung, function ($query) use ($tanggalBergabung) {
            return $query->whereDate('tanggal_bergabung', $tanggalBergabung);
        })->count();


        $jumlahLogin = Login::when($tanggalLogin, function ($query) use ($tanggalLogin) {
            return $query->whereDate('tanggal_login', $tanggalLogin);
        })->count();


        $jumlahUnit = Unit::count();
        $jumlahJabatan = Jabatan::count();

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
