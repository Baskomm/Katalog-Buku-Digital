// Data contoh (tanpa backend/database).
// Untuk memakai foto sendiri: taruh file di folder public/covers lalu ubah nilai `gambar`, misalnya '/covers/1.jpg'.
export const genres = ["Fantasi", "Fiksi", "Misteri"];

export const books = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasi",
    year: 1997,
    pages: 384,
    price: 128000,
    rating: 4.5,
    gambar: "/covers/1.jpg",
    synopsis:
      "Harry Potter, bocah yatim yang tinggal bersama keluarga Dursley, mengetahui pada ulang tahunnya yang ke-11 bahwa ia adalah seorang penyihir. Ia masuk Sekolah Hogwarts, berteman dengan Ron dan Hermione, lalu menghadapi rahasia Batu Bertuah yang berkaitan dengan Voldemort.",
  },
  {
    id: 2,
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    genre: "Fiksi",
    year: 2017,
    pages: 379,
    price: 135000,
    rating: 4.6,
    gambar: "/covers/2.jpg",
    synopsis:
      "Berpusat pada Biru Laut dan sahabat-sahabatnya yang menjadi aktivis mahasiswa pada akhir Orde Baru, novel ini menelusuri persahabatan, cinta, kehilangan, serta perjuangan keluarga mencari kebenaran atas hilangnya orang-orang yang mereka cintai.",
  },
  {
    id: 3,
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    genre: "Fiksi",
    year: 1980,
    pages: 535,
    price: 190000,
    rating: 4.5,
    gambar: "/covers/3.jpg",
    synopsis:
      "Minke, pemuda priyayi Jawa terpelajar, jatuh cinta kepada Annelies Mellema. Kisah cinta mereka berbenturan dengan hukum kolonial, diskriminasi ras, dan tumbuhnya kesadaran kebangsaan di Hindia Belanda pada awal abad ke-20.",
  },
  {
    id: 4,
    title: "Dua Dini Hari",
    author: "Chandra Bientang",
    genre: "Misteri",
    year: 2019,
    pages: 208,
    price: 69000,
    rating: 4,
    gambar: "/covers/4.jpg",
    synopsis:
      "Serangkaian kematian anak jalanan di kawasan Jatinegara memicu penyelidikan Elang, seorang pemuda yang bersikeras mengungkap kebenaran. Di sisi lain, Kanti, seorang ilustrator, mengalami teror yang berkaitan dengan pembunuhan tersebut. Novel ini menyatukan teka-teki pembunuhan dengan isu sosial perkotaan yang jarang diangkat. Meraih penghargaan Best Novel dan Best Crime Drama & Thriller di Scarlet Pen Awards 2020.",
  },
  {
    id: 5,
    title: "Misteri Patung Garam",
    author: "Ruwi Meita",
    genre: "Misteri",
    year: 2015,
    pages: 375,
    price: 110000,
    rating: 4.5,
    gambar: "/covers/5.jpg",
    synopsis:
      "Kiri Lamari, seorang polisi, harus mengungkap misteri di balik kematian seorang pemahat patung sekaligus tuan tanah bernama Munarto. Kasus ini membawanya pada rahasia-rahasia yang lebih pelik, menyentuh unsur mistis dan legenda urban yang khas Indonesia. Novel ini diapresiasi karena menghadirkan misteri dengan latar budaya lokal yang kuat.",
  },
  {
    id: 6,
    title: "Tujuh Kelana",
    author: "Nellaneva",
    genre: "Fantasi",
    year: 2020,
    pages: 265,
    price: 57000,
    rating: 4.1,
    gambar: "/covers/6.jpg",
    synopsis:
      "Zarra dan Dion tanpa sengaja menemukan sebuah permata merah yang ternyata adalah fragmen kunci dari gerbang kuno yang telah dijaga selama berabad-abad. Penemuan itu menyeret mereka ke dalam misteri besar, pertemuan dengan pria bertopeng bernama Alto, dan petualangan yang menghubungkan sembilan klan kesatria. Novel ini dikenal dengan world-building yang solid dan alur yang cepat.",
  },
];

export const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");
