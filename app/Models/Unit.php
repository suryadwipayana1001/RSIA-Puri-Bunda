<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    use HasFactory;
    protected $table = 'unit';
    protected $fillable = ['nama'];

    /**
     * Relasi: Unit memiliki banyak karyawan
     */
    public function karyawans()
    {
        return $this->hasMany(Karyawan::class);
    }
}
