import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Cover } from '../components/BookCard.jsx';
import { books, rupiah } from '../data.js';

export default function Detail({ favorites, toggleFavorite }) {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  useEffect(() => {
    document.title = book ? `${book.title} | Katalog Buku Digital` : 'Buku tidak ditemukan';
    window.scrollTo(0, 0);
  }, [book]);

  if (!book) {
    return <div className="container section"><p className="empty">Buku tidak ditemukan.</p><Link to="/katalog">← Kembali ke katalog</Link></div>;
  }

  const isFav = favorites.includes(book.id);

  return (
    <div className="container section">
      <Link to="/katalog">← Kembali ke katalog</Link>
      <div className="detail">
        <Cover book={book} large />
        <div>
          <p className="tag">{book.genre}</p>
          <h1>{book.title}</h1>
          <p className="muted">oleh {book.author} · {book.year} · {book.pages} halaman · ★ {book.rating}</p>
          <p className="price">{rupiah(book.price)}</p>
          <p>{book.synopsis}</p>
          <button className={isFav ? 'btn outline active' : 'btn outline'} onClick={() => toggleFavorite(book.id)}>
            {isFav ? '♥ Hapus dari Favorit' : '♡ Tambah ke Favorit'}
          </button>
        </div>
      </div>
    </div>
  );
}
