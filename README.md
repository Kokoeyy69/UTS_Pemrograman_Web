# 📚 Toko Buku UT — Aplikasi Pemesanan Buku Online
**UTS Pemrograman Web 1**

## 🧩 Deskripsi Project
Project ini merupakan tugas **UTS Pemrograman Web 1** yang berfokus pada pembuatan aplikasi web front-end menggunakan **HTML, CSS, dan JavaScript (Vanilla)**.
Aplikasi ini mensimulasikan sistem **pemesanan buku online di Universitas Terbuka (UT)** dengan dua jenis akun:
- 👤 **User:** dapat memesan buku, melihat riwayat, dan melacak pengiriman  
- 🛠️ **Admin:** dapat mengelola stok buku, pengguna, serta laporan penjualan  

Semua data bersifat **dummy** dan disimpan dalam file JavaScript (`data.js`) tanpa server atau database.

---

## 🗂️ Struktur Folder
```
tugas-uts-web/
│
├── login.html            → Halaman login (akses user & admin)
├── dashboard.html        → Dashboard utama
├── checkout.html         → Pemesanan buku (user)
├── history.html          → Riwayat pesanan (user)
├── tracking.html         → Lacak pengiriman (user)
├── stok.html             → Katalog & stok buku (user & admin)
├── laporan.html          → Laporan penjualan (admin)
├── user.html             → Manajemen pengguna (admin)
│
├── css/
│   └── style.css         → Styling utama (light & dark mode)
│
├── js/
│   ├── data.js           → Data dummy buku & user
│   ├── script.js         → Fungsi utama aplikasi
│   └── validation.js     → Validasi form login & input
│
└── assets/
    └── images/           → Gambar buku & ikon UI
```

---

## 🌗 Fitur Utama

### 🔐 1. Login
- Mendukung **multi-role (User dan Admin)**  
- Validasi email dan password  
- Mode **Light/Dark** toggle  
- Pesan kesalahan dengan alert  

📸 **Tampilan (User Mode)**  
![Login - User](./Screenshot%20from%202025-11-08%2005-22-46.png)  
📸 **Tampilan (Admin Mode)**  
![Login - Admin](./Screenshot%20from%202025-11-08%2005-25-54.png)

---

### 🏠 2. Dashboard
- Greeting otomatis berdasarkan waktu lokal  
- Menu navigasi sesuai role pengguna  
- Tombol logout dan mode tampilan  

📸 **User Dashboard**  
![Dashboard User](./Screenshot%20from%202025-11-08%2005-22-53.png)  
📸 **Admin Dashboard**  
![Dashboard Admin](./Screenshot%20from%202025-11-08%2005-26-05.png)

---

### 🛒 3. Pemesanan Buku (User)
- Form input nama, email, alamat  
- Tambah dan hapus item buku secara dinamis  
- Hitung otomatis total harga  
- Validasi sebelum pengiriman  

📸 **Halaman Pemesanan**  
![Checkout](./Screenshot%20from%202025-11-08%2005-23-17.png)

---

### 📜 4. Riwayat Pemesanan
- Menampilkan daftar pesanan berdasarkan user  
- Fitur pencarian & detail pesanan  
- Status pesanan muncul dalam modal box  

📸 **Riwayat Pesanan & Detail**  
![History](./Screenshot%20from%202025-11-08%2005-23-25.png)  
![Detail Pesanan](./Screenshot%20from%202025-11-08%2005-23-28.png)

---

### 🚚 5. Lacak Pengiriman
- Input nomor DO untuk melihat status pengiriman  
- Tampilkan detail pesanan, total, dan progress bar status  
- Update status otomatis oleh admin  

📸 **Tracking (User)**  
![Tracking User](./Screenshot%20from%202025-11-08%2005-23-54.png)  
📸 **Tracking (Admin update)**  
![Tracking Admin](./Screenshot%20from%202025-11-08%2005-28-50.png)

---

### 📦 6. Katalog & Stok Buku
- Menampilkan data buku dari `data.js`  
- Tabel dinamis (kode, nama, jenis, stok, harga)  
- Admin dapat menambah atau mengubah data buku  

📸 **Tampilan**  
![Katalog](./Screenshot%20from%202025-11-08%2005-24-01.png)  
![Katalog Dark Mode](./Screenshot%20from%202025-11-08%2005-26-13.png)

---

### 📈 7. Laporan Penjualan (Admin)
- Menampilkan grafik status pesanan (Menunggu, Dikirim, Selesai)  
- Menampilkan total pesanan, buku terjual, dan pendapatan  
- Filter berdasarkan nama & status  
- Ekspor ke **Excel / PDF / Cetak langsung**

📸 **Tampilan**  
![Laporan Penjualan](./Screenshot%20from%202025-11-08%2005-26-42.png)

---

### 👥 8. Manajemen Pengguna (Admin)
- CRUD (Create, Read, Update, Delete) pengguna  
- Input nama, email, password, dan role  
- Validasi sederhana dengan notifikasi  

📸 **Tampilan**  
![Manajemen Pengguna](./Screenshot%20from%202025-11-08%2005-27-09.png)

---

## 🧠 Teknologi yang Digunakan
- **HTML5** — Struktur halaman semantik  
- **CSS3** — Styling modern, responsif, dan dark mode  
- **JavaScript (Vanilla)** —  
  - Manipulasi DOM  
  - Validasi form  
  - Event handling  
  - Data dinamis dengan JSON  

---

## 🚀 Cara Menjalankan
1. Clone repository:
   ```bash
   git clone https://github.com/username/tugas-uts-web.git
   ```
2. Buka folder project  
3. Jalankan `login.html` di browser  
4. Gunakan akun contoh:  
   - **User:** `rina@gmail.com` | `123456`  
   - **Admin:** `siti@gmail.com` | `123456`  

---

## 🧑‍🎓 Identitas Pembuat  
**Nama:** Rina Wulandari  
**NIM:** _(isi sesuai data kamu)_  
**Kelas:** _(contoh: PW1B)_  
**Mata Kuliah:** Pemrograman Web 1  
**Dosen Pengampu:** _(isi sesuai dosen kamu)_

---

## 🏁 Kesimpulan  
Aplikasi **Toko Buku UT** berhasil memenuhi seluruh indikator UTS Pemrograman Web 1:  
✅ Struktur HTML yang semantik dan valid  
✅ CSS eksternal dengan tema terang & gelap  
✅ JavaScript untuk validasi, DOM, dan interaktivitas  
✅ Modularitas file terorganisir  
✅ Kreativitas tambahan (multi-role, laporan, ekspor data, dark mode)
