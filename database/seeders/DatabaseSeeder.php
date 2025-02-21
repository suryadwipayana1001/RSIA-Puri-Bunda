<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            UnitSeeder::class,
            JabatanSeeder::class,
            KaryawanSeeder::class,
            KaryawanJabatanSeeder::class,
            LoginSeeder::class,
        ]);
    }
}
