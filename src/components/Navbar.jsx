import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar({ favCount }) {
  const [open, setOpen] = useState(false); // fitur interaktif: menu mobile
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          Digital <span>Book</span>
        </Link>
        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={open ? "menu open" : "menu"}>
          <NavLink to="/" end onClick={close}>
            Beranda
          </NavLink>
          <NavLink to="/katalog" onClick={close}>
            Katalog
          </NavLink>
          <NavLink to="/favorit" onClick={close}>
            Favorit <b className="badge">{favCount}</b>
          </NavLink>
          <NavLink to="/kontak" onClick={close}>
            Kontak
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
