<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Karyawan;

class ApiKaryawanController extends Controller
{
    public function index()
    {
        $karyawan = Karyawan::with(['jabatans', 'unit'])->latest()->get();

        return response()->json([
            'success' => true,
            'message' => 'Success',
            'data'    => $karyawan
        ]);
    }
}
