<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Karyawan;
use App\Models\Login;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');
    }

    public function store(Request $request)
    {
        $messages = [
            'required' => ':attribute tidak boleh kosong!',
        ];

        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ], $messages);

        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            $karyawan = Karyawan::where('username', $request->username)->first();

            if ($karyawan) {
                Login::create([
                    'karyawan_id' => $karyawan->id,
                    'tanggal_login' => now()->toDateString(),
                ]);
            }

            return redirect('/dashboard');
        }

        return back()->withErrors([
            'username' => 'Login gagal, username atau password salah!',
        ]);
    }

    public function destroy()
    {
        Auth::logout();
        return redirect('/login');
    }
}
