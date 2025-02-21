# My Project

**Deskripsi**  
Ini adalah proyek web sederhana yang menggunakan Inertia React dan Laravel.

**Spesifikasi**
1. Laravel versi 10.48.10
2. React versi 18.3.1

**Fitur**
1. Login dengan username dan password
2. CRUD Unit
3. CRUD Jabatan
4. CRUD Karyawan : 1 karyawan dapat memiliki 2 jabatan, inputan unit dan jabatan menggunakan dropdown dan dapat disearch, jika dropdown unit dan jabatan tidak ditemukan maka dapat menambahkan tanpa membuka menu Unit dan Jabatan
5. Data dummy dengan seeder sebanyak 10 karyawan, dan 200 data login secara random
6. Dashboard : menampilkan jumlah karyawan, jumlah login, jumlah unit, jumlah jabatan, top 10 user yang sering melakukan login dengan loginnya lebih dari 25 kali, serta dapat melakukan filter berdasarkan tanggal pada data jumlah karyawan, jumlah login dan top 10 user


## Cara Instalasi
1. Clone repository ini
2. Buat database dengan nama db_puribunda
3. Ganti file .env.example menjadi .env
4. Sesuaikan env terutama DB_USERNAME dan DB_PASSWORD
5. Install dependency laravel : composer install
6. Installasi dependency react dengan perintah : npm install
7. Lakukan migrasi dengan menjalankan perintah : php artisan migrate
8. Lakukan seed data dengan menjalankan perintah : php artisan db:seed
9. Jalankan perintah : php artisan key: generate
10. Jalankan vite/react app dengan perintah : npm run dev
11. Jalankan perintah : php artisan serve
12. Login dengan username yang terdapat pada table karyawan di database dan password : password123
