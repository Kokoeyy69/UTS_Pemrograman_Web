# 🧾UTS_Pemrograman_Web - Aplikasi Pemesanan Buku Online
##  Deskripsi Project

Project ini bertujuan untuk membuat aplikasi web front-end menggunakan HTML, CSS, dan JavaScript.
Aplikasi ini mensimulasikan proses pemesanan buku secara online tanpa koneksi ke server atau database — seluruh data diambil dari file JavaScript lokal dalam bentuk Array JSON.

##  📂 Struktur Folder
```
tugas-uts-web/
│
├── index.html             → halaman utama / login
├── dashboard.html         → menu utama setelah login
├── stok.html              → halaman katalog & stok buku
├── checkout.html          → halaman pemesanan buku
├── tracking.html          → halaman pelacakan pengiriman
│
├── css/
│   └── style.css          → file CSS eksternal untuk styling
│
├── js/
│   ├── data.js            → berisi data dummy katalog buku (Array JSON)
│   ├── script.js          → logika umum & interaksi DOM
│   └── validation.js      → fungsi validasi form dan alert
│
└── assets/
    └── images/            → berisi gambar buku atau icon tambahan
```

##  🖥️ Fitur-Fitur Utama

###  1. Halaman Login (login.html / index.html)
  -  Input: email dan password
  -  Tombol Login untuk masuk ke dashboard
  -  Validasi form menggunakan JavaScript
  -  Jika email/password salah → tampil alert
  -  Tersedia tombol “Lupa Password” dan “Daftar” dalam bentuk modal box
###  2. Dashboard Menu (dashboard.html)
  -  Menampilkan menu navigasi ke halaman:
      -  Informasi Stok / Katalog
      -  Tracking Pengiriman
      -  Laporan Pemesanan
      -  History Transaksi
  -  Menampilkan greeting otomatis berdasarkan waktu lokal (Selamat pagi/siang/sore)
###  3. Informasi Stok / Katalog (stok.html)
  -  Menampilkan daftar buku dari file ```data.js```
  -  Data ditampilkan secara dinamis menggunakan JavaScript DOM
  -  Terdapat fitur untuk menambah baris buku baru secara langsung
###  4. Halaman Pemesanan (checkout.html)
  -  Menampilkan form pemesanan dan data pembayaran
  -  Data pesanan bisa ditambah/ubah
  -  Validasi form dilakukan sebelum submit
  -  Interaksi menggunakan alert / modal box
###  5. Informasi Pengiriman (tracking.html)
  -  Input nomor Delivery Order
  -  Menampilkan detail:
      -  Nama pemesan
      -  Status pengiriman (dengan progress bar atau tabel)
      -  Detail ekspedisi, tanggal kirim, jenis paket, dan total pembayaran

##  🧠 Teknologi yang Digunakan
  -  HTML5 → Struktur halaman yang semantik dan valid
  -  CSS3 → Styling menggunakan kombinasi inline, internal, dan external CSS
  -  JavaScript (Vanilla) →
      -  Manipulasi DOM
      -  Validasi form
      -  Interaksi UI (alert, modal, dynamic table)
      -  Pengelolaan data dummy (Array JSON)

##  🎨 Tambahan Kreativitas
  -  Tema tampilan disesuaikan agar modern dan mudah digunakan
  -  Efek transisi pada tombol dan navigasi
  -  Progress bar untuk simulasi tracking pengiriman
  -  Modal pop-up untuk form tambahan

##  🚀 Cara Menjalankan

###  1.  Download atau clone repository ini:
  ```bash
git clone https://github.com/username/tugas-uts-web.git
```
###  2.  Buka folder project di komputer kamu
###  3.  Jalankan file ```login.html``` menggunakan browser (Chrome/Edge/Firefox)
###  4.  Interaksi dilakukan langsung melalui tampilan web

