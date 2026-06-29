# NodeJS CRUD PostgreSQL

Proyek ini adalah contoh aplikasi RESTful API sederhana menggunakan Node.js, Express, dan PostgreSQL dengan Sequelize sebagai ORM. 

Aplikasi ini menyediakan operasi CRUD (Create, Read, Update, Delete) dasar untuk entitas "Buku" (Books). Cocok sebagai bahan referensi atau pondasi awal (boilerplate) untuk membangun layanan API.

## 🚀 Fitur

- **Node.js & Express**: Kerangka kerja peladen (server) yang cepat dan ringan.
- **PostgreSQL**: Sistem manajemen basis data relasional.
- **Sequelize ORM**: Pendekatan deklaratif untuk berinteraksi dengan database tanpa menulis kueri SQL mentah.
- **Variabel Lingkungan (dotenv)**: Konfigurasi sensitif (seperti kredensial database dan rahasia sesi) diamankan dan dipisahkan dari kode utama.

## 🛠️ Prasyarat

Pastikan perangkat Anda telah terinstal:

- [Node.js](https://nodejs.org/) (Versi 14 atau lebih baru)
- [PostgreSQL](https://www.postgresql.org/) (Pastikan layanannya berjalan)

## 📦 Instalasi

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/YoryZiar/nodejs_crud_postgresql.git
   cd nodejs_crud_postgresql
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Konfigurasi Lingkungan (.env):**
   Salin berkas `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   ```
   Buka berkas `.env` dan sesuaikan nilainya dengan konfigurasi PostgreSQL Anda:
   ```env
   PORT=3000
   SESSION_SECRET=super_secret_key_change_this
   DB_HOST=localhost
   DB_USER=postgres   # atau root (sesuaikan)
   DB_PASSWORD=rahasia # kata sandi database Anda
   DB_NAME=simple_crud # buat database ini di PostgreSQL
   ```

4. **Siapkan Basis Data:**
   Pastikan Anda sudah membuat basis data bernama `simple_crud` di PostgreSQL sebelum menjalankan aplikasi. Sequelize akan mengurus sinkronisasi tabel jika dikonfigurasi.

## 🚀 Menjalankan Aplikasi

**Mode Pengembangan (dengan Nodemon):**
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000` (atau port lain yang Anda atur di `.env`).

## 📡 Endpoint API

| Method | Endpoint               | Deskripsi                  |
|--------|------------------------|----------------------------|
| GET    | `/book`                | Mendapatkan daftar buku    |
| POST   | `/add-book`            | Menambahkan buku baru      |
| PUT    | `/update-book/:id`     | Memperbarui data buku      |
| DELETE | `/del-book/:id`        | Menghapus buku             |

## 🏗️ Struktur Proyek

```
├── src
│   ├── config
│   │   └── db.config.js       # Konfigurasi koneksi Sequelize
│   ├── controller
│   │   └── index.controller.js  # Logika bisnis dan fungsi CRUD
│   ├── models
│   │   └── books.model.js       # Definisi skema tabel Books
│   └── routes
│       └── index.routes.js      # Definisi rute Express
├── .env.example                 # Contoh variabel lingkungan
├── .gitignore                   # Daftar berkas yang diabaikan git
├── app.js                       # Titik masuk utama (Entry point)
└── package.json                 # Metadata dan dependensi proyek
```

## 📝 Lisensi

Proyek ini berada di bawah lisensi ISC.
