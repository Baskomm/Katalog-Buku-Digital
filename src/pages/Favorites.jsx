import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard.jsx';
import { books } from '../data.js';

export default function Favorites({ favorites, toggleFavorite, setFavorites }) {
  useEffect(() => { document.title = 'Favorit | Katalog Buku Digital'; }, []);
  const list = books.filter((b) => favorites.includes(b.id));

  return (
    <div className="container section">
      <div className="section-head">
        <h1>Buku Favorit</h1>
        {list.length > 0 && <button className="btn outline" onClick={() => setFavorites([])}>Hapus semua</button>}
      </div>
      {list.length === 0 ? (
        <p className="empty">Belum ada favorit. <Link to="/katalog">Jelajahi katalog</Link> dan tekan ikon ♡.</p>
      ) : (
        <div className="grid">
          {list.map((b) => <BookCard key={b.id} book={b} isFav onToggle={toggleFavorite} />)}
        </div>
      )}
    </div>
  );
}
