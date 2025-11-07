#    🧾UTS_Pemrograman_Web
## 📚 Toko Buku UT — Aplikasi Pemesanan Buku Online
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
 <img width="1366" height="768" alt="Screenshot from 2025-11-08 05-22-46" src="https://github.com/user-attachments/assets/34f4cbde-90ea-4fcd-b5d6-d70ce2ca9ab5" />  
📸 **Tampilan (Admin Mode)**  
 <img width="1366" height="768" alt="Screenshot from 2025-11-08 05-25-54" src="https://github.com/user-attachments/assets/d6443e1b-ad4a-4382-8996-0cc1a78e0925" />


---

### 🏠 2. Dashboard
- Greeting otomatis berdasarkan waktu lokal  
- Menu navigasi sesuai role pengguna  
- Tombol logout dan mode tampilan  

📸 **User Dashboard**  
 <img width="1366" height="768" alt="Screenshot from 2025-11-08 05-22-53" src="https://github.com/user-attachments/assets/48484963-fd96-4cc6-ad06-216d163948d9" />

📸 **Admin Dashboard**  
 <img width="1366" height="768" alt="Screenshot from 2025-11-08 05-26-05" src="https://github.com/user-attachments/assets/2056fca7-ae98-4380-b96c-8ecf89f2ab92" />


---

### 🛒 3. Pemesanan Buku (User)
- Form input nama, email, alamat  
- Tambah dan hapus item buku secara dinamis  
- Hitung otomatis total harga  
- Validasi sebelum pengiriman  

📸 **Halaman Pemesanan**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-23-17" src="https://github.com/user-attachments/assets/d47fd20e-4f8e-4e57-967c-14bc236b13bc" />

---

### 📜 4. Riwayat Pemesanan
- Menampilkan daftar pesanan berdasarkan user  
- Fitur pencarian & detail pesanan  
- Status pesanan muncul dalam modal box  

📸 **Riwayat Pesanan & Detail**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-23-25" src="https://github.com/user-attachments/assets/5b2e06aa-0da8-4cc1-84ce-05f355f42d18" />
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-23-28" src="https://github.com/user-attachments/assets/b21688c4-d980-4514-874a-5cd80a461e49" />

---

### 🚚 5. Lacak Pengiriman
- Input nomor DO untuk melihat status pengiriman  
- Tampilkan detail pesanan, total, dan progress bar status  
- Update status otomatis oleh admin  

📸 **Tracking (User)**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-23-54" src="https://github.com/user-attachments/assets/37c1cf6a-b13e-41e9-aad0-1411183a0000" />
📸 **Tracking (Admin update)**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-26-42" src="https://github.com/user-attachments/assets/00af1a6c-04c6-4210-9265-441f3ead2873" />

---

### 📦 6. Katalog & Stok Buku
- Menampilkan data buku dari `data.js`  
- Tabel dinamis (kode, nama, jenis, stok, harga)  
- Admin dapat menambah atau mengubah data buku  

📸 **Tampilan**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-24-01" src="https://github.com/user-attachments/assets/c8bd61e3-1f2a-433b-ac13-f3c169d72a8d" />
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-26-13" src="https://github.com/user-attachments/assets/6e4adf68-4f68-4b95-9968-774e571e4258" />

---

### 📈 7. Laporan Penjualan (Admin)
- Menampilkan grafik status pesanan (Menunggu, Dikirim, Selesai)  
- Menampilkan total pesanan, buku terjual, dan pendapatan  
- Filter berdasarkan nama & status  
- Ekspor ke **Excel / PDF / Cetak langsung**

📸 **Tampilan**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-26-42" src="https://github.com/user-attachments/assets/4c35085b-37fc-4c20-8c13-d45d74d822c3" />

---

### 👥 8. Manajemen Pengguna (Admin)
- CRUD (Create, Read, Update, Delete) pengguna  
- Input nama, email, password, dan role  
- Validasi sederhana dengan notifikasi  

📸 **Tampilan**  
<img width="1366" height="768" alt="Screenshot from 2025-11-08 05-27-09" src="https://github.com/user-attachments/assets/05dbe074-5084-49be-94a3-2a91918a3cc6" />

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

## 🏁 Kesimpulan  
Aplikasi **Toko Buku UT** berhasil memenuhi seluruh indikator UTS Pemrograman Web 1:  
✅ Struktur HTML yang semantik dan valid  
✅ CSS eksternal dengan tema terang & gelap  
✅ JavaScript untuk validasi, DOM, dan interaktivitas  
✅ Modularitas file terorganisir  
✅ Kreativitas tambahan (multi-role, laporan, ekspor data, dark mode)
