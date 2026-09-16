/* ==========================================================================
   KRONOS — main.js
   Satu-satunya file JavaScript. Dipakai bersama di kelima halaman.
   Setiap modul memeriksa keberadaan elemen sebelum dijalankan.

   Daftar isi
   1.  Data produk (ubah di sini bila ada produk baru)
   2.  Data pendukung (kategori, testimoni, FAQ)
   3.  Utilitas
   4.  Komponen global (header, menu, footer, back-to-top, reveal)
   5.  Beranda
   6.  Koleksi (filter, cari, urutkan)
   7.  Detail produk
   8.  Tentang (counter statistik)
   9.  Kontak (validasi form, FAQ)
   10. Inisialisasi
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   1. DATA PRODUK
   -------------------------------------------------------------------------- */

const PRODUK = [
  {
    id: 'kr-001',
    nama: 'Kronos Heritage 39',
    kategori: 'classic',
    harga: 2450000,
    ditambahkan: '2026-08-28',
    gambar: ['assets/img/kr-001-1.svg', 'assets/img/kr-001-2.svg', 'assets/img/kr-001-3.svg', 'assets/img/kr-001-4.svg'],
    deskripsi: 'Jam tangan harian dengan proporsi 39 mm yang pas di hampir semua pergelangan. Dial putih gading, indeks baton terpoles, dan strap kulit asli yang melunak mengikuti bentuk tangan setelah beberapa minggu pemakaian.',
    spesifikasi: {
      diameter: '39 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kulit Asli Cokelat',
      movement: 'Automatic',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Cokelat', 'Kulit Hitam', 'Stainless Steel'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-002',
    nama: 'Kronos Aurora Slim 36',
    kategori: 'classic',
    harga: 3150000,
    ditambahkan: '2026-07-14',
    gambar: ['assets/img/kr-002-1.svg', 'assets/img/kr-002-2.svg', 'assets/img/kr-002-3.svg', 'assets/img/kr-002-4.svg'],
    deskripsi: 'Case setebal 7,8 mm yang mudah masuk ke balik manset kemeja. Angka Romawi dan lapisan emas hangat membuatnya cocok untuk acara formal maupun jam kerja biasa.',
    spesifikasi: {
      diameter: '36 mm',
      materialCase: 'Stainless Steel Lapis Emas',
      strap: 'Kulit Asli Tan',
      movement: 'Quartz',
      waterResistance: '30 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Tan', 'Kulit Cokelat'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-003',
    nama: 'Kronos Regent Day-Date 40',
    kategori: 'classic',
    harga: 4250000,
    ditambahkan: '2026-05-02',
    gambar: ['assets/img/kr-003-1.svg', 'assets/img/kr-003-2.svg', 'assets/img/kr-003-3.svg', 'assets/img/kr-003-4.svg'],
    deskripsi: 'Bracelet stainless steel tiga baris dengan jendela tanggal pada posisi jam 3. Dirancang untuk dipakai setiap hari tanpa perlu dilepas saat cuci tangan.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Bracelet Stainless Steel',
      movement: 'Automatic',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Stainless Steel', 'Kulit Hitam'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-004',
    nama: 'Kronos Abyss 300',
    kategori: 'diver',
    harga: 5450000,
    ditambahkan: '2026-09-01',
    gambar: ['assets/img/kr-004-1.svg', 'assets/img/kr-004-2.svg', 'assets/img/kr-004-3.svg', 'assets/img/kr-004-4.svg'],
    deskripsi: 'Bezel searah dengan 120 klik, lume tebal pada seluruh indeks, dan strap karet yang tetap lentur di air dingin. Tahan hingga kedalaman 300 meter.',
    spesifikasi: {
      diameter: '42 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Karet FKM Hitam',
      movement: 'Automatic',
      waterResistance: '300 M',
      garansi: '2 Tahun'
    },
    varian: ['Karet Hitam', 'Nylon Biru', 'Stainless Steel'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-005',
    nama: 'Kronos Reef Ranger 42',
    kategori: 'diver',
    harga: 4850000,
    ditambahkan: '2026-06-18',
    gambar: ['assets/img/kr-005-1.svg', 'assets/img/kr-005-2.svg', 'assets/img/kr-005-3.svg', 'assets/img/kr-005-4.svg'],
    deskripsi: 'Dial biru laut dalam dengan bracelet yang punya extension link, sehingga tetap nyaman dipakai di atas wetsuit tipis.',
    spesifikasi: {
      diameter: '42 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Bracelet Stainless Steel',
      movement: 'Automatic',
      waterResistance: '200 M',
      garansi: '2 Tahun'
    },
    varian: ['Stainless Steel', 'Karet Biru'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-006',
    nama: 'Kronos Tidewalker GMT',
    kategori: 'diver',
    harga: 6750000,
    ditambahkan: '2026-08-05',
    gambar: ['assets/img/kr-006-1.svg', 'assets/img/kr-006-2.svg', 'assets/img/kr-006-3.svg', 'assets/img/kr-006-4.svg'],
    deskripsi: 'Case titanium yang ringan di tangan dengan jarum GMT untuk zona waktu kedua. Teman perjalanan lintas negara yang tidak minta perhatian.',
    spesifikasi: {
      diameter: '41 mm',
      materialCase: 'Titanium Grade 2',
      strap: 'Nylon Anyam',
      movement: 'Automatic GMT',
      waterResistance: '200 M',
      garansi: '2 Tahun'
    },
    varian: ['Nylon Abu', 'Nylon Hijau', 'Karet Hitam'],
    stok: false,
    unggulan: true
  },
  {
    id: 'kr-007',
    nama: 'Kronos Velocity Chrono 41',
    kategori: 'chronograph',
    harga: 5250000,
    ditambahkan: '2026-07-30',
    gambar: ['assets/img/kr-007-1.svg', 'assets/img/kr-007-2.svg', 'assets/img/kr-007-3.svg', 'assets/img/kr-007-4.svg'],
    deskripsi: 'Tiga subdial dengan skala tachymeter pada bezel. Pusher terasa mantap saat ditekan, dengan jarum detik merah sebagai satu-satunya aksen warna.',
    spesifikasi: {
      diameter: '41 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kulit Asli Hitam',
      movement: 'Quartz Chronograph',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Hitam', 'Stainless Steel'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-008',
    nama: 'Kronos Circuit Chrono 43',
    kategori: 'chronograph',
    harga: 6250000,
    ditambahkan: '2026-04-11',
    gambar: ['assets/img/kr-008-1.svg', 'assets/img/kr-008-2.svg', 'assets/img/kr-008-3.svg', 'assets/img/kr-008-4.svg'],
    deskripsi: 'Case berlapis PVD hitam penuh dengan strap karet bertekstur. Versi paling gelap dari koleksi chronograph kami.',
    spesifikasi: {
      diameter: '43 mm',
      materialCase: 'Stainless Steel Lapis PVD',
      strap: 'Karet FKM Hitam',
      movement: 'Quartz Chronograph',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Karet Hitam', 'Nylon Hitam'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-009',
    nama: 'Kronos Meridian Racing',
    kategori: 'chronograph',
    harga: 5950000,
    ditambahkan: '2026-03-09',
    gambar: ['assets/img/kr-009-1.svg', 'assets/img/kr-009-2.svg', 'assets/img/kr-009-3.svg', 'assets/img/kr-009-4.svg'],
    deskripsi: 'Case rose gold dengan dial krem hangat. Terinspirasi jam pengukur waktu balap era 1960-an, dengan proporsi yang lebih tenang.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel Lapis Rose Gold',
      strap: 'Kulit Asli Cokelat',
      movement: 'Quartz Chronograph',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Cokelat', 'Kulit Tan'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-010',
    nama: 'Kronos Lumen 38',
    kategori: 'minimalist',
    harga: 1850000,
    ditambahkan: '2026-09-06',
    gambar: ['assets/img/kr-010-1.svg', 'assets/img/kr-010-2.svg', 'assets/img/kr-010-3.svg', 'assets/img/kr-010-4.svg'],
    deskripsi: 'Dial bersih tanpa angka, hanya empat indeks penanda arah. Pilihan pertama yang aman bila ini jam tangan serius pertama Anda.',
    spesifikasi: {
      diameter: '38 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kulit Asli Hitam',
      movement: 'Quartz',
      waterResistance: '30 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Hitam', 'Kulit Cokelat', 'Nylon Abu'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-011',
    nama: 'Kronos Stillpoint 40',
    kategori: 'minimalist',
    harga: 2950000,
    ditambahkan: '2026-08-19',
    gambar: ['assets/img/kr-011-1.svg', 'assets/img/kr-011-2.svg', 'assets/img/kr-011-3.svg', 'assets/img/kr-011-4.svg'],
    deskripsi: 'Case titanium sandblast dengan dial abu batu. Beratnya hanya 46 gram, cukup ringan untuk dilupakan saat dipakai bekerja.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Titanium Grade 2',
      strap: 'Kanvas Katun',
      movement: 'Quartz',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kanvas Pasir', 'Nylon Abu'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-012',
    nama: 'Kronos Monolith 36',
    kategori: 'minimalist',
    harga: 2250000,
    ditambahkan: '2026-02-22',
    gambar: ['assets/img/kr-012-1.svg', 'assets/img/kr-012-2.svg', 'assets/img/kr-012-3.svg', 'assets/img/kr-012-4.svg'],
    deskripsi: 'Ukuran 36 mm yang netral, dengan aksen emas tipis pada indeks. Banyak dipilih sebagai hadiah karena muat di pergelangan mana pun.',
    spesifikasi: {
      diameter: '36 mm',
      materialCase: 'Stainless Steel Lapis Emas',
      strap: 'Kulit Asli Tan',
      movement: 'Quartz',
      waterResistance: '30 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Tan', 'Kulit Hitam'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-013',
    nama: 'Kronos Nocturne 40',
    kategori: 'classic',
    harga: 3650000,
    ditambahkan: '2026-01-15',
    gambar: ['assets/img/kr-013-1.svg', 'assets/img/kr-013-2.svg', 'assets/img/kr-013-3.svg', 'assets/img/kr-013-4.svg'],
    deskripsi: 'Dial hitam dengan angka Romawi berwarna gading dan jendela tanggal. Versi malam dari Heritage, untuk acara yang dimulai setelah matahari turun.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kulit Asli Hitam',
      movement: 'Automatic',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Hitam', 'Stainless Steel'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-014',
    nama: 'Kronos Harbour 200',
    kategori: 'diver',
    harga: 4450000,
    ditambahkan: '2026-05-27',
    gambar: ['assets/img/kr-014-1.svg', 'assets/img/kr-014-2.svg', 'assets/img/kr-014-3.svg', 'assets/img/kr-014-4.svg'],
    deskripsi: 'Dial hijau tua dengan case lapis emas dan strap nylon. Diver dengan tampilan yang lebih santai, cocok dipakai di luar air juga.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel Lapis Emas',
      strap: 'Nylon Anyam Hijau',
      movement: 'Automatic',
      waterResistance: '200 M',
      garansi: '2 Tahun'
    },
    varian: ['Nylon Hijau', 'Kulit Cokelat'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-015',
    nama: 'Kronos Tempo Chrono 40',
    kategori: 'chronograph',
    harga: 4950000,
    ditambahkan: '2026-06-03',
    gambar: ['assets/img/kr-015-1.svg', 'assets/img/kr-015-2.svg', 'assets/img/kr-015-3.svg', 'assets/img/kr-015-4.svg'],
    deskripsi: 'Dial abu asap dengan bracelet steel dan jarum detik merah. Chronograph paling ringkas di koleksi, hanya 11,4 mm tebalnya.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Bracelet Stainless Steel',
      movement: 'Quartz Chronograph',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Stainless Steel', 'Kulit Hitam'],
    stok: false,
    unggulan: false
  },
  {
    id: 'kr-016',
    nama: 'Kronos Canvas Field 38',
    kategori: 'minimalist',
    harga: 1650000,
    ditambahkan: '2026-04-25',
    gambar: ['assets/img/kr-016-1.svg', 'assets/img/kr-016-2.svg', 'assets/img/kr-016-3.svg', 'assets/img/kr-016-4.svg'],
    deskripsi: 'Case titanium dan strap kanvas yang bisa dicuci. Jam paling terjangkau di koleksi, dibuat untuk dipakai kasar tanpa rasa bersalah.',
    spesifikasi: {
      diameter: '38 mm',
      materialCase: 'Titanium Grade 2',
      strap: 'Kanvas Katun',
      movement: 'Quartz',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kanvas Pasir', 'Kanvas Hijau'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-017',
    nama: 'Kronos Somerset 38',
    kategori: 'classic',
    harga: 2650000,
    ditambahkan: '2026-02-10',
    gambar: ['assets/img/kr-017-1.svg', 'assets/img/kr-017-2.svg', 'assets/img/kr-017-3.svg', 'assets/img/kr-017-4.svg'],
    deskripsi: 'Dial krem hangat dengan case 38 mm yang ramping, ditujukan untuk yang suka jam tangan tanpa kesan mencolok. Cocok dipasangkan dengan kemeja maupun kaus polos.',
    spesifikasi: {
      diameter: '38 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kulit Asli Cokelat Tua',
      movement: 'Automatic',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Cokelat Tua', 'Kulit Hitam'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-018',
    nama: 'Kronos Ainsworth GMT Dress',
    kategori: 'classic',
    harga: 4650000,
    ditambahkan: '2026-03-21',
    gambar: ['assets/img/kr-018-1.svg', 'assets/img/kr-018-2.svg', 'assets/img/kr-018-3.svg', 'assets/img/kr-018-4.svg'],
    deskripsi: 'GMT formal dengan case rose gold dan bezel dua warna yang tenang. Jarum zona kedua tetap terbaca jelas tanpa mengganggu tampilan dress watch.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel Lapis Rose Gold',
      strap: 'Kulit Asli Hitam',
      movement: 'Automatic GMT',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Hitam', 'Kulit Cokelat'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-019',
    nama: 'Kronos Whitfield Day-Date 41',
    kategori: 'classic',
    harga: 3950000,
    ditambahkan: '2026-04-02',
    gambar: ['assets/img/kr-019-1.svg', 'assets/img/kr-019-2.svg', 'assets/img/kr-019-3.svg', 'assets/img/kr-019-4.svg'],
    deskripsi: 'Bracelet lima baris dengan tampilan hari dan tanggal sekaligus. Klasik kantoran yang tetap kokoh dipakai dari Senin sampai Sabtu.',
    spesifikasi: {
      diameter: '41 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Bracelet Stainless Steel',
      movement: 'Automatic',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Stainless Steel', 'Kulit Hitam'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-020',
    nama: 'Kronos Belmont Petite 34',
    kategori: 'classic',
    harga: 2150000,
    ditambahkan: '2026-01-29',
    gambar: ['assets/img/kr-020-1.svg', 'assets/img/kr-020-2.svg', 'assets/img/kr-020-3.svg', 'assets/img/kr-020-4.svg'],
    deskripsi: 'Case paling mungil di koleksi kami, dirancang untuk pergelangan ramping. Dial polos berlapis emas hangat cocok untuk penggunaan sehari-hari yang sederhana.',
    spesifikasi: {
      diameter: '34 mm',
      materialCase: 'Stainless Steel Lapis Emas',
      strap: 'Kulit Asli Tan',
      movement: 'Quartz',
      waterResistance: '30 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Tan', 'Kulit Hitam'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-021',
    nama: 'Kronos Marlin Pro 300',
    kategori: 'diver',
    harga: 5150000,
    ditambahkan: '2026-02-27',
    gambar: ['assets/img/kr-021-1.svg', 'assets/img/kr-021-2.svg', 'assets/img/kr-021-3.svg', 'assets/img/kr-021-4.svg'],
    deskripsi: 'Dial biru gelap dengan bezel keramik searah dan pelapis lume terang di setiap indeks. Dibuat untuk penyelaman rekreasi maupun harian.',
    spesifikasi: {
      diameter: '42 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Karet FKM Biru Tua',
      movement: 'Automatic',
      waterResistance: '300 M',
      garansi: '2 Tahun'
    },
    varian: ['Karet Biru Tua', 'Nylon Biru'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-022',
    nama: 'Kronos Current Diver 200',
    kategori: 'diver',
    harga: 3950000,
    ditambahkan: '2026-03-14',
    gambar: ['assets/img/kr-022-1.svg', 'assets/img/kr-022-2.svg', 'assets/img/kr-022-3.svg', 'assets/img/kr-022-4.svg'],
    deskripsi: 'Case titanium ringan dengan dial hijau lumut dan bezel bergerigi yang mudah dipegang meski memakai sarung tangan basah.',
    spesifikasi: {
      diameter: '41 mm',
      materialCase: 'Titanium Grade 2',
      strap: 'Karet FKM Hijau',
      movement: 'Automatic',
      waterResistance: '200 M',
      garansi: '2 Tahun'
    },
    varian: ['Karet Hijau', 'Nylon Hijau'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-023',
    nama: 'Kronos Trench Master 500',
    kategori: 'diver',
    harga: 7450000,
    ditambahkan: '2026-05-11',
    gambar: ['assets/img/kr-023-1.svg', 'assets/img/kr-023-2.svg', 'assets/img/kr-023-3.svg', 'assets/img/kr-023-4.svg'],
    deskripsi: 'Diver kelas berat dengan case PVD hitam pekat dan helium escape valve. Dibuat untuk yang menyelam lebih dalam dari sekadar snorkeling akhir pekan.',
    spesifikasi: {
      diameter: '44 mm',
      materialCase: 'Stainless Steel Lapis PVD',
      strap: 'Karet FKM Hitam',
      movement: 'Automatic',
      waterResistance: '500 M',
      garansi: '2 Tahun'
    },
    varian: ['Karet Hitam', 'Nylon Hitam'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-024',
    nama: 'Kronos Shoal Diver 40',
    kategori: 'diver',
    harga: 3450000,
    ditambahkan: '2026-06-24',
    gambar: ['assets/img/kr-024-1.svg', 'assets/img/kr-024-2.svg', 'assets/img/kr-024-3.svg', 'assets/img/kr-024-4.svg'],
    deskripsi: 'Diver bertema klasik dengan dial putih cerah dan bezel merah bata. Ukuran 40 mm membuatnya lebih ramping dibanding diver pada umumnya.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Bracelet Stainless Steel',
      movement: 'Automatic',
      waterResistance: '200 M',
      garansi: '2 Tahun'
    },
    varian: ['Stainless Steel', 'Karet Merah'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-025',
    nama: 'Kronos Overdrive Chrono 42',
    kategori: 'chronograph',
    harga: 5650000,
    ditambahkan: '2026-02-05',
    gambar: ['assets/img/kr-025-1.svg', 'assets/img/kr-025-2.svg', 'assets/img/kr-025-3.svg', 'assets/img/kr-025-4.svg'],
    deskripsi: 'Chronograph otomatis dengan tiga subdial fungsional dan pusher berukir. Skala tachymeter melingkari dial untuk mengukur kecepatan rata-rata.',
    spesifikasi: {
      diameter: '42 mm',
      materialCase: 'Stainless Steel Lapis PVD',
      strap: 'Karet FKM Hitam',
      movement: 'Automatic Chronograph',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Karet Hitam', 'Nylon Abu'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-026',
    nama: 'Kronos Paddock Chrono 40',
    kategori: 'chronograph',
    harga: 4650000,
    ditambahkan: '2026-03-18',
    gambar: ['assets/img/kr-026-1.svg', 'assets/img/kr-026-2.svg', 'assets/img/kr-026-3.svg', 'assets/img/kr-026-4.svg'],
    deskripsi: 'Panel-panel kontras hitam putih terinspirasi mobil balap klasik. Ringkas di pergelangan namun tetap terasa sporty saat dipakai harian.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kulit Asli Hitam',
      movement: 'Quartz Chronograph',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Hitam', 'Kulit Cokelat'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-027',
    nama: 'Kronos Skyline Chrono GMT',
    kategori: 'chronograph',
    harga: 7250000,
    ditambahkan: '2026-07-09',
    gambar: ['assets/img/kr-027-1.svg', 'assets/img/kr-027-2.svg', 'assets/img/kr-027-3.svg', 'assets/img/kr-027-4.svg'],
    deskripsi: 'Kombinasi chronograph dan GMT dalam satu case titanium ringan. Untuk yang sering bepergian dan tetap ingin mengukur waktu secara presisi.',
    spesifikasi: {
      diameter: '42 mm',
      materialCase: 'Titanium Grade 2',
      strap: 'Nylon Anyam Biru',
      movement: 'Automatic Chronograph GMT',
      waterResistance: '100 M',
      garansi: '2 Tahun'
    },
    varian: ['Nylon Biru', 'Nylon Abu'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-028',
    nama: 'Kronos Apex Chrono 44',
    kategori: 'chronograph',
    harga: 6450000,
    ditambahkan: '2026-08-30',
    gambar: ['assets/img/kr-028-1.svg', 'assets/img/kr-028-2.svg', 'assets/img/kr-028-3.svg', 'assets/img/kr-028-4.svg'],
    deskripsi: 'Case besar berlapis rose gold dengan dial cokelat karamel. Chronograph paling mewah di koleksi, cocok untuk momen yang butuh tampil beda.',
    spesifikasi: {
      diameter: '44 mm',
      materialCase: 'Stainless Steel Lapis Rose Gold',
      strap: 'Kulit Asli Cokelat',
      movement: 'Quartz Chronograph',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Cokelat', 'Kulit Tan'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-029',
    nama: 'Kronos Bare 36',
    kategori: 'minimalist',
    harga: 1450000,
    ditambahkan: '2026-01-08',
    gambar: ['assets/img/kr-029-1.svg', 'assets/img/kr-029-2.svg', 'assets/img/kr-029-3.svg', 'assets/img/kr-029-4.svg'],
    deskripsi: 'Dial putih polos tanpa satu angka pun, hanya dua jarum. Untuk yang percaya jam tangan terbaik adalah yang paling mudah dilupakan di tangan.',
    spesifikasi: {
      diameter: '36 mm',
      materialCase: 'Stainless Steel 316L',
      strap: 'Kanvas Katun Krem',
      movement: 'Quartz',
      waterResistance: '30 M',
      garansi: '2 Tahun'
    },
    varian: ['Kanvas Krem', 'Kulit Hitam'],
    stok: true,
    unggulan: true
  },
  {
    id: 'kr-030',
    nama: 'Kronos Horizon 39',
    kategori: 'minimalist',
    harga: 2050000,
    ditambahkan: '2026-04-19',
    gambar: ['assets/img/kr-030-1.svg', 'assets/img/kr-030-2.svg', 'assets/img/kr-030-3.svg', 'assets/img/kr-030-4.svg'],
    deskripsi: 'Dial abu batu dengan case titanium sandblast. Garis horizon tipis di tengah dial jadi satu-satunya detail selain indeks minimal.',
    spesifikasi: {
      diameter: '39 mm',
      materialCase: 'Titanium Grade 2',
      strap: 'Nylon Anyam Abu',
      movement: 'Quartz',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Nylon Abu', 'Nylon Pasir'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-031',
    nama: 'Kronos Paper 40',
    kategori: 'minimalist',
    harga: 2350000,
    ditambahkan: '2026-05-06',
    gambar: ['assets/img/kr-031-1.svg', 'assets/img/kr-031-2.svg', 'assets/img/kr-031-3.svg', 'assets/img/kr-031-4.svg'],
    deskripsi: 'Dial putih kertas dengan aksen emas tipis di sekeliling indeks. Terlihat bersih dan lembut, cocok untuk gaya kerja maupun santai.',
    spesifikasi: {
      diameter: '40 mm',
      materialCase: 'Stainless Steel Lapis Emas',
      strap: 'Kulit Asli Putih',
      movement: 'Quartz',
      waterResistance: '30 M',
      garansi: '2 Tahun'
    },
    varian: ['Kulit Putih', 'Kulit Tan'],
    stok: true,
    unggulan: false
  },
  {
    id: 'kr-032',
    nama: 'Kronos Slate Field 41',
    kategori: 'minimalist',
    harga: 1950000,
    ditambahkan: '2026-06-12',
    gambar: ['assets/img/kr-032-1.svg', 'assets/img/kr-032-2.svg', 'assets/img/kr-032-3.svg', 'assets/img/kr-032-4.svg'],
    deskripsi: 'Dial abu gelap dengan case PVD hitam matte. Terinspirasi jam lapangan klasik, dibuat sederhana agar tahan dipakai dalam kondisi apa pun.',
    spesifikasi: {
      diameter: '41 mm',
      materialCase: 'Stainless Steel Lapis PVD',
      strap: 'Kanvas Katun Hijau',
      movement: 'Quartz',
      waterResistance: '50 M',
      garansi: '2 Tahun'
    },
    varian: ['Kanvas Hijau', 'Kanvas Hitam'],
    stok: true,
    unggulan: true
  }
];

/* --------------------------------------------------------------------------
   2. DATA PENDUKUNG
   -------------------------------------------------------------------------- */

const KATEGORI = {
  classic: 'Classic',
  diver: 'Diver',
  chronograph: 'Chronograph',
  minimalist: 'Minimalist'
};

const TESTIMONI = [
  {
    isi: 'Saya beli Heritage 39 untuk dipakai kerja setiap hari. Sudah delapan bulan, kulitnya makin enak dan akurasinya masih meleset kurang dari sedetik per hari.',
    nama: 'Raka Dewanto',
    kota: 'Surabaya',
    produk: 'Heritage 39'
  },
  {
    isi: 'Bingung pilih hadiah untuk ayah saya. Tim Kronos bantu lewat WhatsApp sampai ukurannya pas, dan kotaknya datang rapi siap dibungkus.',
    nama: 'Amanda Prasetya',
    kota: 'Jakarta',
    produk: 'Monolith 36'
  },
  {
    isi: 'Abyss 300 sudah ikut turun ke Karimunjawa tiga kali. Bezelnya masih rapat, lume-nya masih jelas terbaca di kedalaman 18 meter.',
    nama: 'Yosef Widjaja',
    kota: 'Semarang',
    produk: 'Abyss 300'
  },
  {
    isi: 'Servis rutin di tahun kedua ditangani tanpa biaya dan selesai lima hari. Komunikasinya jelas dari awal sampai jam saya kembali.',
    nama: 'Nadia Rahmawati',
    kota: 'Bandung',
    produk: 'Aurora Slim 36'
  },
  {
    isi: 'Pengiriman ke Makassar sampai dalam tiga hari, dikemas dengan busa dan kartu garansi bernomor. Tidak ada lecet sama sekali.',
    nama: 'Bimo Santosa',
    kota: 'Makassar',
    produk: 'Velocity Chrono 41'
  }
];

const WA_NOMOR = '6281234567890';

/* --------------------------------------------------------------------------
   3. UTILITAS
   -------------------------------------------------------------------------- */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** Mengubah angka menjadi format Rupiah, contoh: 2450000 -> "Rp 2.450.000" */
const formatRupiah = (angka) => 'Rp ' + angka.toLocaleString('id-ID');

/** Membaca parameter dari URL, misal ?id=kr-001 */
const paramURL = (nama) => new URLSearchParams(window.location.search).get(nama);

const cariProduk = (id) => PRODUK.find((p) => p.id === id);

const labelKategori = (kode) => KATEGORI[kode] || kode;

const tautanWhatsApp = (pesan) =>
  `https://wa.me/${WA_NOMOR}?text=${encodeURIComponent(pesan)}`;

/** Markup satu kartu produk, dipakai di Beranda, Koleksi, dan Produk Terkait */
const kartuProduk = (p, lazy = true) => `
  <article class="kartu">
    <a class="kartu__tautan" href="produk.html?id=${p.id}">
      <div class="kartu__gambar">
        <img src="${p.gambar[0]}" alt="${p.nama}, jam tangan ${labelKategori(p.kategori)} Kronos"
             width="800" height="800"${lazy ? ' loading="lazy"' : ''}>
        ${p.stok ? '' : '<span class="kartu__stok">Stok habis</span>'}
      </div>
      <div class="kartu__isi">
        <p class="kartu__meta">${labelKategori(p.kategori)}<span class="kartu__kode">${p.id.toUpperCase()}</span></p>
        <h3 class="kartu__nama">${p.nama}</h3>
        <p class="kartu__harga">${formatRupiah(p.harga)}</p>
      </div>
    </a>
  </article>`;

/* --------------------------------------------------------------------------
   4. KOMPONEN GLOBAL
   -------------------------------------------------------------------------- */

/** Header sticky + penanda menu aktif + sembunyi saat scroll turun, muncul saat scroll naik */
function initHeader() {
  const header = $('.situs-header');
  if (!header) return;

  const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let posisiTerakhir = window.scrollY;
  let ticking = false;
  const AMBANG_ATAS = 96; // px dari atas: header selalu tampil di area ini

  const perbaruiHeader = () => {
    const posisiSekarang = window.scrollY;
    header.classList.toggle('situs-header--tertaut', posisiSekarang > 24);

    if (!kurangiGerak && !document.body.classList.contains('terkunci')) {
      const turun = posisiSekarang > posisiTerakhir;
      if (posisiSekarang <= AMBANG_ATAS) {
        header.classList.remove('situs-header--tersembunyi');
      } else if (turun) {
        header.classList.add('situs-header--tersembunyi');
      } else {
        header.classList.remove('situs-header--tersembunyi');
      }
    }

    posisiTerakhir = posisiSekarang;
    ticking = false;
  };

  perbaruiHeader();
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(perbaruiHeader);
      ticking = true;
    }
  }, { passive: true });

  const halaman = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav__tautan').forEach((tautan) => {
    const target = tautan.getAttribute('href').split('?')[0];
    if (target === halaman) {
      tautan.classList.add('nav__tautan--aktif');
      tautan.setAttribute('aria-current', 'page');
    }
  });
}

/** Hamburger menu untuk layar < 768px */
function initMenu() {
  const tombol = $('.hamburger');
  const menu = $('#menu-utama');
  const tirai = $('.tirai');
  if (!tombol || !menu) return;

  const header = $('.situs-header');

  const buka = () => {
    menu.classList.add('nav--terbuka');
    tombol.setAttribute('aria-expanded', 'true');
    tombol.setAttribute('aria-label', 'Tutup menu');
    document.body.classList.add('terkunci');
    if (tirai) tirai.hidden = false;
    if (header) header.classList.remove('situs-header--tersembunyi');
  };

  const tutup = () => {
    menu.classList.remove('nav--terbuka');
    tombol.setAttribute('aria-expanded', 'false');
    tombol.setAttribute('aria-label', 'Buka menu');
    document.body.classList.remove('terkunci');
    if (tirai) tirai.hidden = true;
  };

  tombol.addEventListener('click', () => {
    const terbuka = tombol.getAttribute('aria-expanded') === 'true';
    terbuka ? tutup() : buka();
  });

  if (tirai) tirai.addEventListener('click', tutup);
  $$('.nav__tautan, .nav__cta', menu).forEach((t) => t.addEventListener('click', tutup));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') tutup();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) tutup();
  });
}

/** Tombol kembali ke atas, muncul setelah scroll > 400px */
function initBackToTop() {
  const tombol = $('.ke-atas');
  if (!tombol) return;

  const perbarui = () => tombol.classList.toggle('ke-atas--tampil', window.scrollY > 400);
  perbarui();
  window.addEventListener('scroll', perbarui, { passive: true });
  tombol.addEventListener('click', () => {
    const halus = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: halus ? 'smooth' : 'auto' });
  });
}

/** Animasi fade-in ringan saat elemen masuk viewport */
function initReveal() {
  const elemen = $$('[data-reveal]');
  if (!elemen.length) return;

  const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (kurangiGerak || !('IntersectionObserver' in window)) {
    elemen.forEach((el) => el.classList.add('tampil'));
    return;
  }

  const pengamat = new IntersectionObserver(
    (entri) => {
      entri.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('tampil');
          pengamat.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  elemen.forEach((el) => pengamat.observe(el));
}

/** Tahun berjalan di footer */
function initTahun() {
  $$('[data-tahun]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* --------------------------------------------------------------------------
   5. BERANDA
   -------------------------------------------------------------------------- */

function initBeranda() {
  const gridUnggulan = $('#grid-unggulan');
  if (gridUnggulan) {
    const unggulan = PRODUK.filter((p) => p.unggulan).slice(0, 8);
    gridUnggulan.innerHTML = unggulan.map((p) => kartuProduk(p)).join('');
  }

  initTestimoni();
}

/** Slider testimoni sederhana */
function initTestimoni() {
  const jalur = $('#testimoni-jalur');
  const titikWadah = $('#testimoni-titik');
  if (!jalur) return;

  jalur.innerHTML = TESTIMONI.map(
    (t) => `
    <figure class="testimoni" role="group" aria-roledescription="slide">
      <blockquote><p>${t.isi}</p></blockquote>
      <figcaption>
        <span class="testimoni__nama">${t.nama}</span>
        <span class="testimoni__detail">${t.kota} · ${t.produk}</span>
      </figcaption>
    </figure>`
  ).join('');

  let indeks = 0;
  const total = TESTIMONI.length;

  if (titikWadah) {
    titikWadah.innerHTML = TESTIMONI.map(
      (_, i) =>
        `<button type="button" class="titik" data-ke="${i}" aria-label="Tampilkan testimoni ${i + 1}"></button>`
    ).join('');
  }

  const tampilkan = (i) => {
    indeks = (i + total) % total;
    jalur.style.transform = `translateX(-${indeks * 100}%)`;
    $$('.titik', titikWadah || document).forEach((titik, n) =>
      titik.classList.toggle('titik--aktif', n === indeks)
    );
  };

  $$('.titik', titikWadah || document).forEach((titik) =>
    titik.addEventListener('click', () => tampilkan(Number(titik.dataset.ke)))
  );

  const sebelum = $('#testimoni-sebelum');
  const sesudah = $('#testimoni-sesudah');
  if (sebelum) sebelum.addEventListener('click', () => tampilkan(indeks - 1));
  if (sesudah) sesudah.addEventListener('click', () => tampilkan(indeks + 1));

  tampilkan(0);
}

/* --------------------------------------------------------------------------
   6. KOLEKSI
   -------------------------------------------------------------------------- */

function initKoleksi() {
  const grid = $('#grid-koleksi');
  if (!grid) return;

  const pencarian = $('#pencarian');
  const urutan = $('#urutan');
  const hitungan = $('#hitungan');
  const kosong = $('#kosong');
  const tombolFilter = $$('.filter__tombol');

  const state = {
    kategori: paramURL('kategori') || 'semua',
    kata: '',
    urut: 'terbaru'
  };

  if (!Object.keys(KATEGORI).includes(state.kategori)) state.kategori = 'semua';

  const urutkan = (daftar) => {
    const salinan = [...daftar];
    if (state.urut === 'termurah') return salinan.sort((a, b) => a.harga - b.harga);
    if (state.urut === 'termahal') return salinan.sort((a, b) => b.harga - a.harga);
    return salinan.sort((a, b) => new Date(b.ditambahkan) - new Date(a.ditambahkan));
  };

  const render = () => {
    const kata = state.kata.trim().toLowerCase();
    const hasil = urutkan(
      PRODUK.filter((p) => {
        const cocokKategori = state.kategori === 'semua' || p.kategori === state.kategori;
        const cocokKata = !kata || p.nama.toLowerCase().includes(kata);
        return cocokKategori && cocokKata;
      })
    );

    grid.innerHTML = hasil.map((p) => kartuProduk(p)).join('');
    if (hitungan) {
      hitungan.textContent = `Menampilkan ${hasil.length} dari ${PRODUK.length} produk`;
    }
    if (kosong) kosong.hidden = hasil.length > 0;
  };

  tombolFilter.forEach((tombol) => {
    const nilai = tombol.dataset.kategori;
    const aktif = nilai === state.kategori;
    tombol.classList.toggle('filter__tombol--aktif', aktif);
    tombol.setAttribute('aria-pressed', String(aktif));

    tombol.addEventListener('click', () => {
      state.kategori = nilai;
      tombolFilter.forEach((t) => {
        const sama = t === tombol;
        t.classList.toggle('filter__tombol--aktif', sama);
        t.setAttribute('aria-pressed', String(sama));
      });
      render();
    });
  });

  if (pencarian) {
    pencarian.addEventListener('input', (e) => {
      state.kata = e.target.value;
      render();
    });
  }

  if (urutan) {
    urutan.addEventListener('change', (e) => {
      state.urut = e.target.value;
      render();
    });
  }

  const reset = $('#reset-filter');
  if (reset) {
    reset.addEventListener('click', () => {
      state.kategori = 'semua';
      state.kata = '';
      state.urut = 'terbaru';
      if (pencarian) pencarian.value = '';
      if (urutan) urutan.value = 'terbaru';
      tombolFilter.forEach((t) => {
        const sama = t.dataset.kategori === 'semua';
        t.classList.toggle('filter__tombol--aktif', sama);
        t.setAttribute('aria-pressed', String(sama));
      });
      render();
    });
  }

  render();
}

/* --------------------------------------------------------------------------
   7. DETAIL PRODUK
   -------------------------------------------------------------------------- */

function initProduk() {
  const wadah = $('#detail-produk');
  if (!wadah) return;

  const produk = cariProduk(paramURL('id'));
  const tidakAda = $('#produk-kosong');
  const terkaitBagian = $('#bagian-terkait');

  if (!produk) {
    wadah.hidden = true;
    if (terkaitBagian) terkaitBagian.hidden = true;
    if (tidakAda) tidakAda.hidden = false;
    return;
  }

  document.title = `${produk.nama} — Kronos`;
  const deskripsiMeta = $('meta[name="description"]');
  if (deskripsiMeta) deskripsiMeta.setAttribute('content', produk.deskripsi);

  // renderInfo dulu supaya tombol varian (dengan status --aktif) sudah ada
  // di DOM sebelum galeri membaca varian mana yang sedang dipilih.
  renderInfo(produk);
  renderGaleri(produk);
  renderSpesifikasi(produk);
  renderTerkait(produk);
  initAccordion();
}

/* --- Pewarnaan strap sesuai varian yang dipilih ------------------------- */

// Kata kunci dicocokkan ke nama varian (mis. "Nylon Biru", "Kulit Cokelat").
// "metal": true memakai gradasi logam (#mtl2) yang sudah ada di tiap SVG,
// dipakai untuk varian Stainless Steel / Bracelet.
const WARNA_STRAP = [
  { kata: 'stainless', metal: true },
  { kata: 'bracelet', metal: true },
  { kata: 'cokelat', stops: ['#3a2417', '#6b4226', '#2c1b10'] },
  { kata: 'tan', stops: ['#8a6438', '#c79a5e', '#6e4e28'] },
  { kata: 'biru', stops: ['#101d33', '#23407a', '#0c1626'] },
  { kata: 'hijau', stops: ['#14251a', '#2c4a34', '#0f1c14'] },
  { kata: 'abu', stops: ['#3a3d40', '#63666b', '#2c2e30'] },
  { kata: 'pasir', stops: ['#8a7c5c', '#c2b28c', '#6e6247'] },
  { kata: 'hitam', stops: ['#131619', '#22262b', '#131619'] }
];

function cariWarnaStrap(namaVarian) {
  const n = (namaVarian || '').toLowerCase();
  return WARNA_STRAP.find((w) => n.includes(w.kata)) || WARNA_STRAP[WARNA_STRAP.length - 1];
}

function tandaiElemenStrap(svgEl) {
  $$('path[fill="url(#strap)"]', svgEl).forEach((p) => p.setAttribute('data-strap', '1'));
}

function terapkanWarnaStrap(svgEl, namaVarian) {
  if (!svgEl) return;
  const warna = cariWarnaStrap(namaVarian);
  const elemenStrap = $$('[data-strap="1"]', svgEl);
  const gradien = svgEl.querySelector('#strap');
  const stopEls = gradien ? gradien.querySelectorAll('stop') : [];

  if (warna.metal) {
    elemenStrap.forEach((p) => p.setAttribute('fill', 'url(#mtl2)'));
  } else {
    elemenStrap.forEach((p) => p.setAttribute('fill', 'url(#strap)'));
    if (stopEls.length >= 3 && warna.stops) {
      stopEls[0].setAttribute('stop-color', warna.stops[0]);
      stopEls[1].setAttribute('stop-color', warna.stops[1]);
      stopEls[2].setAttribute('stop-color', warna.stops[2]);
    }
  }
}

/* --- Galeri (memuat SVG inline agar warna strap bisa diubah) ------------ */

const KESIMPANAN_SVG = {};

function ambilSVG(src) {
  if (!KESIMPANAN_SVG[src]) {
    KESIMPANAN_SVG[src] = fetch(src)
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error('Gagal memuat gambar'))))
      .catch(() => null);
  }
  return KESIMPANAN_SVG[src];
}

function varianAktifSaatIni(produk) {
  const tombolAktif = $('.varian--aktif');
  if (tombolAktif) return tombolAktif.dataset.varian;
  return produk.varian && produk.varian.length ? produk.varian[0] : '';
}

async function tampilkanGambarUtama(bungkus, src, label, namaVarian) {
  const teksSVG = await ambilSVG(src);

  if (!teksSVG) {
    // Cadangan bila fetch gagal (mis. dibuka langsung dari file lokal
    // tanpa server): tampilkan sebagai gambar biasa tanpa pewarnaan strap.
    bungkus.innerHTML = `<img src="${src}" alt="${label}" width="800" height="800">`;
    return;
  }

  bungkus.innerHTML = teksSVG;
  bungkus.setAttribute('aria-label', label);

  const svgEl = bungkus.querySelector('svg');
  if (svgEl) {
    svgEl.setAttribute('role', 'img');
    svgEl.removeAttribute('aria-label');
    tandaiElemenStrap(svgEl);
    terapkanWarnaStrap(svgEl, namaVarian);
  }
}

function renderGaleri(produk) {
  const utama = $('#galeri-utama');
  const daftar = $('#galeri-thumb');
  if (!utama || !daftar) return;

  daftar.innerHTML = produk.gambar
    .map(
      (src, i) => `
      <li>
        <button type="button" class="thumb${i === 0 ? ' thumb--aktif' : ''}"
                data-src="${src}" aria-label="Tampilkan gambar ${i + 1} dari ${produk.gambar.length}">
          <img src="${src}" alt="" width="200" height="200" loading="lazy">
        </button>
      </li>`
    )
    .join('');

  tampilkanGambarUtama(utama, produk.gambar[0], `${produk.nama}, tampak depan`, varianAktifSaatIni(produk));

  $$('.thumb', daftar).forEach((tombol) => {
    tombol.addEventListener('click', () => {
      $$('.thumb', daftar).forEach((t) => t.classList.remove('thumb--aktif'));
      tombol.classList.add('thumb--aktif');
      tampilkanGambarUtama(utama, tombol.dataset.src, produk.nama, varianAktifSaatIni(produk));
    });
  });
}

function renderInfo(produk) {
  const setTeks = (selektor, teks) => {
    const el = $(selektor);
    if (el) el.textContent = teks;
  };

  setTeks('#produk-kategori', labelKategori(produk.kategori));
  setTeks('#produk-kode', produk.id.toUpperCase());
  setTeks('#produk-nama', produk.nama);
  setTeks('#produk-harga', formatRupiah(produk.harga));
  setTeks('#produk-deskripsi', produk.deskripsi);

  const stok = $('#produk-stok');
  if (stok) {
    stok.textContent = produk.stok ? 'Siap kirim hari ini' : 'Stok habis — bisa inden';
    stok.className = produk.stok ? 'stok stok--ada' : 'stok stok--habis';
  }

  const remah = $('#remah-produk');
  if (remah) remah.textContent = produk.nama;

  // Pemilih varian strap/warna
  const varianWadah = $('#produk-varian');
  if (varianWadah && produk.varian && produk.varian.length) {
    varianWadah.innerHTML = produk.varian
      .map(
        (v, i) => `
        <button type="button" class="varian${i === 0 ? ' varian--aktif' : ''}"
                data-varian="${v}" aria-pressed="${i === 0}">${v}</button>`
      )
      .join('');

    $$('.varian', varianWadah).forEach((tombol) => {
      tombol.addEventListener('click', () => {
        $$('.varian', varianWadah).forEach((t) => {
          t.classList.remove('varian--aktif');
          t.setAttribute('aria-pressed', 'false');
        });
        tombol.classList.add('varian--aktif');
        tombol.setAttribute('aria-pressed', 'true');
        perbaruiTautanWA(produk);

        const galeriUtama = $('#galeri-utama');
        const svgEl = galeriUtama ? galeriUtama.querySelector('svg') : null;
        terapkanWarnaStrap(svgEl, tombol.dataset.varian);
      });
    });
  }

  perbaruiTautanWA(produk);

  const tanya = $('#produk-tanya');
  if (tanya) {
    tanya.href = tautanWhatsApp(
      `Halo Kronos, saya ingin bertanya soal ${produk.nama} (${produk.id.toUpperCase()}).`
    );
  }
}

function perbaruiTautanWA(produk) {
  const beli = $('#produk-beli');
  if (!beli) return;
  const varianAktif = $('.varian--aktif');
  const varian = varianAktif ? ` varian ${varianAktif.dataset.varian}` : '';
  beli.href = tautanWhatsApp(
    `Halo Kronos, saya ingin memesan ${produk.nama} (${produk.id.toUpperCase()})${varian} seharga ${formatRupiah(
      produk.harga
    )}. Apakah masih tersedia?`
  );
}

function renderSpesifikasi(produk) {
  const tbody = $('#tabel-spesifikasi tbody');
  if (!tbody) return;

  const s = produk.spesifikasi;
  const baris = [
    ['Diameter case', s.diameter],
    ['Material case', s.materialCase],
    ['Material strap', s.strap],
    ['Tipe movement', s.movement],
    ['Water resistance', s.waterResistance],
    ['Garansi', s.garansi]
  ];

  tbody.innerHTML = baris
    .map(([label, nilai]) => `<tr><th scope="row">${label}</th><td>${nilai}</td></tr>`)
    .join('');
}

function renderTerkait(produk) {
  const grid = $('#grid-terkait');
  const bagian = $('#bagian-terkait');
  if (!grid) return;

  const terkait = PRODUK.filter(
    (p) => p.kategori === produk.kategori && p.id !== produk.id
  ).slice(0, 4);

  if (!terkait.length) {
    if (bagian) bagian.hidden = true;
    return;
  }
  grid.innerHTML = terkait.map((p) => kartuProduk(p)).join('');
}

/* Accordion dipakai di halaman Produk dan Kontak */
function initAccordion() {
  $$('.akordeon__tombol').forEach((tombol) => {
    if (tombol.dataset.siap === '1') return;
    tombol.dataset.siap = '1';

    tombol.addEventListener('click', () => {
      const panel = document.getElementById(tombol.getAttribute('aria-controls'));
      const terbuka = tombol.getAttribute('aria-expanded') === 'true';
      tombol.setAttribute('aria-expanded', String(!terbuka));
      if (panel) panel.hidden = terbuka;
    });
  });
}

/* --------------------------------------------------------------------------
   8. TENTANG
   -------------------------------------------------------------------------- */

function initStatistik() {
  const angka = $$('[data-hitung]');
  if (!angka.length) return;

  const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const jalankan = (el) => {
    const target = Number(el.dataset.hitung);
    if (kurangiGerak) {
      el.textContent = target.toLocaleString('id-ID');
      return;
    }
    const durasi = 1400;
    const mulai = performance.now();

    const langkah = (waktu) => {
      const maju = Math.min((waktu - mulai) / durasi, 1);
      const eased = 1 - Math.pow(1 - maju, 3);
      el.textContent = Math.round(target * eased).toLocaleString('id-ID');
      if (maju < 1) requestAnimationFrame(langkah);
    };
    requestAnimationFrame(langkah);
  };

  if (!('IntersectionObserver' in window)) {
    angka.forEach(jalankan);
    return;
  }

  const pengamat = new IntersectionObserver(
    (entri) => {
      entri.forEach((e) => {
        if (e.isIntersecting) {
          jalankan(e.target);
          pengamat.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  angka.forEach((el) => pengamat.observe(el));
}

/* --------------------------------------------------------------------------
   9. KONTAK
   -------------------------------------------------------------------------- */

function initFormKontak() {
  const form = $('#form-kontak');
  if (!form) return;

  const sukses = $('#form-sukses');

  const aturan = {
    nama: (nilai) => {
      if (!nilai.trim()) return 'Isi nama lengkap Anda.';
      if (nilai.trim().length < 3) return 'Nama minimal 3 karakter.';
      return '';
    },
    email: (nilai) => {
      if (!nilai.trim()) return 'Isi alamat email Anda.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(nilai.trim()))
        return 'Format email belum benar, contoh: nama@email.com.';
      return '';
    },
    telepon: (nilai) => {
      if (!nilai.trim()) return 'Isi nomor HP yang bisa dihubungi.';
      if (!/^[0-9]+$/.test(nilai.trim())) return 'Nomor HP hanya boleh berisi angka.';
      if (nilai.trim().length < 9) return 'Nomor HP minimal 9 angka.';
      return '';
    },
    subjek: (nilai) => (nilai ? '' : 'Pilih satu subjek.'),
    pesan: (nilai) => {
      if (!nilai.trim()) return 'Tulis pesan Anda.';
      if (nilai.trim().length < 10) return 'Pesan minimal 10 karakter.';
      return '';
    }
  };

  const tampilkanError = (field, pesan) => {
    const kotak = document.getElementById(`error-${field.name}`);
    field.classList.toggle('bidang--salah', Boolean(pesan));
    field.setAttribute('aria-invalid', pesan ? 'true' : 'false');
    if (kotak) kotak.textContent = pesan;
  };

  const periksa = (field) => {
    const aturanField = aturan[field.name];
    if (!aturanField) return true;
    const pesan = aturanField(field.value);
    tampilkanError(field, pesan);
    return !pesan;
  };

  const bidang = Object.keys(aturan)
    .map((nama) => form.elements[nama])
    .filter(Boolean);

  bidang.forEach((field) => {
    field.addEventListener('blur', () => periksa(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('bidang--salah')) periksa(field);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const hasil = bidang.map((field) => periksa(field));

    if (hasil.includes(false)) {
      if (sukses) sukses.hidden = true;
      const pertama = bidang.find((f) => f.classList.contains('bidang--salah'));
      if (pertama) pertama.focus();
      return;
    }

    form.reset();
    bidang.forEach((field) => tampilkanError(field, ''));
    if (sukses) {
      sukses.hidden = false;
      sukses.focus();
    }
  });
}

/* --------------------------------------------------------------------------
   10. INISIALISASI
   -------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
  // Global
  initHeader();
  initMenu();
  initBackToTop();
  initReveal();
  initTahun();
  initAccordion();

  // Per halaman (masing-masing berhenti sendiri bila elemennya tidak ada)
  initBeranda();
  initKoleksi();
  initProduk();
  initStatistik();
  initFormKontak();
});
