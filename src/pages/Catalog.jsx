import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BookCard from "../components/BookCard.jsx";
import { books, genres } from "../data.js";

export default function Catalog({ favorites, toggleFavorite }) {
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState(params.get("genre") || "Semua");

  useEffect(() => {
    document.title = "Katalog | Katalog Buku Digital";
  }, []);
  useEffect(() => {
    setGenre(params.get("genre") || "Semua");
  }, [params]);

  const result = books
    .filter((b) => genre === "Semua" || b.genre === genre)
    .filter((b) =>
      (b.title + b.author).toLowerCase().includes(query.toLowerCase()),
    );

  return (
    <div className="container section">
      <h1>Katalog Buku</h1>
      <div className="toolbar">
        <input
          type="search"
          placeholder="Cari judul atau penulis..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Semua</option>
          {genres.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </div>
      <p className="muted">{result.length} buku ditemukan</p>
      {result.length === 0 ? (
        <p className="empty">Tidak ada buku yang cocok dengan pencarian.</p>
      ) : (
        <div className="grid">
          {result.map((b) => (
            <BookCard
              key={b.id}
              book={b}
              isFav={favorites.includes(b.id)}
              onToggle={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
