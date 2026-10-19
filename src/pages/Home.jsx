import { useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import { books, genres } from "../data.js";

export default function Home({ favorites, toggleFavorite }) {
  useEffect(() => {
    document.title = "Beranda | Katalog Buku Digital";
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Temukan Buku Favoritmu</h1>
          <p>
            Jelajahi koleksi buku digital pilihan, simpan yang kamu suka, dan
            baca kapan saja.
          </p>
          <Link to="/katalog" className="btn">
            Mulai Membaca
          </Link>
        </div>
      </section>

      <section className="container section">
        <h2>Kategori</h2>
        <div className="chips">
          {genres.map((g) => (
            <Link
              key={g}
              to={`/katalog?genre=${encodeURIComponent(g)}`}
              className="chip"
            >
              {g}
            </Link>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Buku Pilihan</h2>
          <Link to="/katalog">Lihat semua →</Link>
        </div>
        <div className="grid">
          {books.map((b) => (
            <BookCard
              key={b.id}
              book={b}
              isFav={favorites.includes(b.id)}
              onToggle={toggleFavorite}
            />
          ))}
        </div>
      </section>
    </>
  );
}
