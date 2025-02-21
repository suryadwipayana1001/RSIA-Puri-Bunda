<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;
use App\Models\Karyawan;
use App\Models\Unit;

class KaryawanSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $unitIds = Unit::pluck('id')->toArray();

        for ($i = 0; $i < 10; $i++) {
            Karyawan::create([
                'nama' => $faker->name,
                'username' => $faker->unique()->userName,
                'password' => Hash::make('password123'),
                'unit_id' => $faker->randomElement($unitIds),
                'tanggal_bergabung' => $faker->date,
            ]);
        }
    }
}
