<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Karyawan extends Authenticatable

{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'karyawan';

    protected $fillable = [
        'nama',
        'username',
        'password',
        'unit_id',
        'tanggal_bergabung',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'password' => 'hashed',
    ];
    public function getAuthIdentifierName()
    {
        return 'username';
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function jabatans()
    {
        return $this->belongsToMany(Jabatan::class, 'karyawan_jabatan');
    }
}
