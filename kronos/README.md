# KRONOS — Website Jam Tangan

Implementasi PRD "Website Jam Tangan (Watch Store / Brand)" v1.0.
HTML, CSS, dan JavaScript murni — tanpa framework, tanpa backend.

## Struktur berkas

```
/
├── index.html      Beranda
├── koleksi.html    Katalog + filter, pencarian, urutan
├── produk.html     Detail produk (dirender dari ?id=)
├── tentang.html    Cerita brand, linimasa, nilai, proses, statistik
├── kontak.html     Form tervalidasi, info kontak, peta, FAQ
├── css/style.css   Satu-satunya berkas CSS
├── js/main.js      Satu-satunya berkas JS (data produk ada di bagian atas)
└── assets/img/     71 ilustrasi SVG produk dan brand
```

## Cara menjalankan

Buka `index.html` langsung di browser, atau jalankan server statis agar
perilakunya sama persis dengan hosting sungguhan:

```bash
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

## Menambah atau mengubah produk

Seluruh data ada di array `PRODUK` di bagian atas `js/main.js`. Tambahkan satu
objek dengan bentuk berikut, lalu simpan gambarnya di `assets/img/`:

```js
{
  id: 'kr-017',
  nama: 'Kronos Model Baru',
  kategori: 'classic',          // classic | diver | chronograph | minimalist
  harga: 2450000,
  ditambahkan: '2026-09-15',    // dipakai untuk urutan "Terbaru"
  gambar: ['assets/img/kr-017-1.svg', 'assets/img/kr-017-2.svg'],
  deskripsi: '...',
  spesifikasi: { diameter, materialCase, strap, movement, waterResistance, garansi },
  varian: ['Kulit Cokelat'],
  stok: true,
  unggulan: false               // true = tampil di Produk Pilihan pada Beranda
}
```

Beranda, Koleksi, Detail Produk, dan Produk Terkait semuanya membaca array yang
sama, jadi tidak ada berkas lain yang perlu disentuh.

## Checklist sebelum tayang (WAJIB)

Semua data dan aset di repo ini **contoh/dummy** — belum aman dipublikasikan.

- [ ] **Foto produk**: ganti seluruh SVG ilustrasi di `assets/img/` dengan foto
      asli produk Anda sendiri, atau foto berlisensi bebas komersial
      (mis. Unsplash/Pexels untuk jam generik tanpa merek) — **jangan**
      memakai foto produk merek lain (Rolex, Seiko, dll.) karena melanggar
      hak cipta dan merek dagang, meskipun mudah diunduh dari internet.
      Format WebP, rasio 1:1, ukuran seragam antar produk.
- [ ] **Alamat & kontak**: `Jl. Basuki Rahmat No. 88, Surabaya` di footer dan
      `kontak.html`, nomor telepon `(031) 123 4567`, dan email `halo@kronos.id`
      semuanya **contoh**. Ganti dengan alamat, nomor, dan email bisnis Anda
      yang sesungguhnya — jangan mencantumkan alamat orang/tempat lain tanpa
      izin.
- [ ] **`WA_NOMOR`** di `js/main.js` dan seluruh tautan `wa.me` di HTML.
- [ ] **`src` iframe peta Google Maps** di `kontak.html` — ganti dengan embed
      lokasi asli (Google Maps → Bagikan → Sematkan peta).
- [ ] **Tautan Instagram dan TikTok** di footer kelima halaman (saat ini
      mengarah ke beranda instagram.com/tiktok.com, bukan akun Anda).
- [ ] **Domain** di `sitemap.xml` dan `robots.txt` (saat ini `kronos.id`) —
      ganti dengan domain/URL GitHub Pages Anda yang sebenarnya, mis.
      `https://username.github.io/kronos/`.
- [ ] **`og:image`** di tag `<meta property="og:image">` sebaiknya file PNG/JPG
      berukuran 1200×630, bukan SVG — kebanyakan platform (WhatsApp, Facebook,
      LinkedIn) tidak merender SVG untuk pratinjau tautan.
- [ ] Nomor statistik di `tentang.html` (tahun berdiri, jumlah unit terjual,
      dsb.) — pastikan sesuai fakta bisnis Anda, bukan angka contoh.

## Catatan teknis

- Tidak ada CSS inline, tag `<style>`, JavaScript inline, maupun atribut `onclick`.
- `main.js` selalu memeriksa keberadaan elemen sebelum mengeksekusi modul,
  sehingga satu berkas aman dipakai di kelima halaman.
- Mobile-first; breakpoint utama 768px, 900px, 1024px, dan 1440px.
- Gambar memakai `loading="lazy"` di bawah fold dan `width`/`height` agar tidak
  terjadi pergeseran tata letak.
- Animasi mengikuti `prefers-reduced-motion`.
