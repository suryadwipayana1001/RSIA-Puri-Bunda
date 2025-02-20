<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Login extends Model
{
    use HasFactory;

    protected $table = 'login';

    protected $fillable = [
        'karyawan_id',
        'tanggal_login',
    ];

    public function karyawan()
    {
        return $this->belongsTo(Karyawan::class);
    }
}
