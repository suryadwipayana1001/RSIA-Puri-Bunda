<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\Karyawan;

class LoginSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();
        $karyawanIds = Karyawan::pluck('id')->toArray();

        if (empty($karyawanIds)) {
            $this->command->warn('Jalankan KaryawanSeeder dulu.');
            return;
        }

        $logins = [];

        for ($i = 0; $i < 200; $i++) {
            $logins[] = [
                'karyawan_id'   => $faker->randomElement($karyawanIds),
                'tanggal_login' => $faker->dateTimeBetween('2025-02-01', '2025-02-28')->format('Y-m-d'),
            ];
        }

        $topUsers = $faker->randomElements($karyawanIds, 1);

        foreach ($topUsers as $userId) {
            for ($j = 0; $j < 30; $j++) {
                $logins[] = [
                    'karyawan_id'   => $userId,
                    'tanggal_login' => $faker->randomElement(['2025-02-21']),
                ];
            }
        }

        DB::table('login')->insert($logins);
    }
}
