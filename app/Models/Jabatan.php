<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jabatan extends Model
{
    use HasFactory;
    protected $table = 'jabatan';
    protected $fillable = ['nama'];

    public function karyawans()
    {
        return $this->belongsToMany(Karyawan::class, 'karyawan_jabatan');
    }
}
