<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// initial route
Route::redirect('/', '/login');

//route index login
Route::get('/login', [\App\Http\Controllers\LoginController::class, 'index']);
Route::post('/login', [\App\Http\Controllers\LoginController::class, 'store']);

//middleware auth and user role


//middlware auth
Route::middleware('auth')->group(function () {
    Route::match(['get', 'post'], '/dashboard', \App\Http\Controllers\DashboardController::class);
    Route::resource('/unit', \App\Http\Controllers\UnitController::class);
    Route::resource('/jabatan', \App\Http\Controllers\JabatanController::class);
    Route::resource('/karyawan', \App\Http\Controllers\KaryawanController::class);
    Route::post('/karyawan/store-unit', [\App\Http\Controllers\KaryawanController::class, 'storeNewUnit']);
    Route::post('/karyawan/store-jabatan', [\App\Http\Controllers\KaryawanController::class, 'storeNewJabatan']);
    Route::post('/logout', [\App\Http\Controllers\LoginController::class, 'destroy']);
});
