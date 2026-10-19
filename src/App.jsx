import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Detail from './pages/Detail.jsx';
import Favorites from './pages/Favorites.jsx';
import Contact from './pages/Contact.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';

export default function App() {
  const [favorites, setFavorites] = useLocalStorage('favorit', []);

  const toggleFavorite = (id) =>
    setFavorites((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const shared = { favorites, toggleFavorite };

  return (
    <>
      <Navbar favCount={favorites.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home {...shared} />} />
          <Route path="/katalog" element={<Catalog {...shared} />} />
          <Route path="/buku/:id" element={<Detail {...shared} />} />
          <Route path="/favorit" element={<Favorites {...shared} setFavorites={setFavorites} />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="*" element={<p className="empty">Halaman tidak ditemukan.</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
