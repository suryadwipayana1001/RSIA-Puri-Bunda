<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Jabatan;

class JabatanSeeder extends Seeder
{
    public function run()
    {
        $jabatans = [
            'Manager',
            'Supervisor',
            'Staff',
            'Admin',
            'Operator'
        ];

        foreach ($jabatans as $jabatan) {
            Jabatan::create([
                'nama' => $jabatan,
            ]);
        }
    }
}
