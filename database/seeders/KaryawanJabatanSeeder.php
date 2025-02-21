<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use App\Models\Karyawan;
use App\Models\Jabatan;

class KaryawanJabatanSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        $karyawanIds = Karyawan::pluck('id')->toArray();
        $jabatanIds = Jabatan::pluck('id')->toArray();

        if (empty($karyawanIds) || empty($jabatanIds)) {
            $this->command->warn('Jalankan seeder KaryawanSeeder dan JabatanSeeder dulu.');
            return;
        }

        foreach ($karyawanIds as $karyawanId) {
            $jumlahJabatan = rand(1, 3);
            $jabatanTerpilih = $faker->randomElements($jabatanIds, $jumlahJabatan);

            foreach ($jabatanTerpilih as $jabatanId) {
                DB::table('karyawan_jabatan')->insert([
                    'karyawan_id' => $karyawanId,
                    'jabatan_id' => $jabatanId
                ]);
            }
        }
    }
}
