<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Unit;

class UnitSeeder extends Seeder
{
    public function run()
    {
        $units = [
            'IT',
            'HRD',
            'Keuangan',
            'Marketing',
            'Operasional'
        ];

        foreach ($units as $unit) {
            Unit::create([
                'nama' => $unit,
            ]);
        }
    }
}
