import { Link } from 'react-router-dom';
import { rupiah } from '../data.js';

// Menampilkan foto sampul buku
export function Cover({ book, large }) {
  return <img className={large ? 'cover large' : 'cover'} src={book.gambar} alt={'Sampul ' + book.title} />;
}

export default function BookCard({ book, isFav, onToggle }) {
  return (
    <article className="card">
      <button className={isFav ? 'heart active' : 'heart'} onClick={() => onToggle(book.id)} aria-label="Favorit">
        {isFav ? '♥' : '♡'}
      </button>
      <Link to={`/buku/${book.id}`}>
        <Cover book={book} />
        <h3>{book.title}</h3>
      </Link>
      <p className="muted">{book.author}</p>
      <div className="card-foot">
        <span>★ {book.rating}</span>
        <strong>{rupiah(book.price)}</strong>
      </div>
    </article>
  );
}
