# Katalog Buku Digital (Proyek UTS Pemrograman Web)
Situs katalog buku digital sederhana berbasis React.js (Vite), berisi 6 buku contoh dengan foto sampul. Tampilan dibuat sederhana: latar putih, satu warna aksen (biru), garis tipis tanpa gradien atau bayangan.

## Perencanaan

### Pengguna situs
Pelajar dan mahasiswa	Menemukan bacaan dengan cepat, mengetahui isi buku sebelum memilih, dan menyimpan buku untuk dibaca nanti	Pencarian, filter genre, halaman detail, tombol favorit dan halaman Favorit, tampilan responsif

### Daftar fitur
1. Daftar buku dalam bentuk kartu (sampul, judul, penulis, rating, harga).
2. Pencarian berdasarkan judul atau penulis.
3. Filter berdasarkan genre.
4. Halaman detail buku.
5. Tombol favorit dan halaman Favorit.
6. Formulir kontak dengan validasi.
7. Penyimpanan lokal (localStorage) untuk favorit dan pesan.
8. Tampilan responsif dengan menu hamburger di ponsel.

### Alur navigasi
Beranda
|-- Katalog
| |-- Detail Buku
|-- Favorit
|-- Kontak
Detail Buku dibuka dengan mengklik kartu buku dari Beranda, Katalog, atau Favorit.

## Cara menjalankan
1. Pasang Node.js (versi 18 atau lebih baru).
2. Di folder proyek: `npm install`
3. Jalankan: `npm run dev`, lalu buka http://localhost:5173

## Mengganti foto sampul
Taruh foto di folder `public/covers`, lalu ubah nilai `gambar` di `src/data.js`, contoh: `gambar: '/covers/1.jpg'`.

## Halaman
Beranda, Katalog, Detail Buku, Favorit, Kontak.

## Fitur interaktif
1. Tombol favorit (useState + localStorage).
2. Pencarian dan filter genre di Katalog.
3. Menu hamburger di ponsel.
4. Formulir Kontak dengan validasi (nama, email, pesan).
   useEffect dipakai untuk judul halaman dan penyimpanan localStorage.

## Struktur
- `src/components`: Navbar, Footer, BookCard (Cover), FormField
- `src/pages`: Home, Catalog, Detail, Favorites, Contact
- `src/hooks/useLocalStorage.js`: hook penyimpanan lokal
- `src/data.js`: data contoh (6 buku)
