import { useState, useEffect } from 'react';
import FormField from '../components/FormField.jsx';
import useLocalStorage from '../hooks/useLocalStorage.js';

const empty = { nama: '', email: '', pesan: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [, setMessages] = useLocalStorage('pesanMasuk', []);

  useEffect(() => { document.title = 'Kontak | Katalog Buku Digital'; }, []);

  const validate = () => {
    const e = {};
    if (form.nama.trim().length < 3) e.nama = 'Nama minimal 3 karakter.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Format email tidak valid.';
    if (form.pesan.trim().length < 10) e.pesan = 'Pesan minimal 10 karakter.';
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setMessages((prev) => [...prev, { ...form, waktu: new Date().toISOString() }]);
      setForm(empty);
      setSent(true);
    }
  };

  return (
    <div className="container section narrow">
      <h1>Hubungi Kami</h1>
      <p className="muted">Punya saran judul buku atau kendala? Kirim pesan di sini.</p>
      {sent && <p className="success">Pesan berhasil dikirim. Terima kasih!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <FormField label="Nama" name="nama" value={form.nama} onChange={handleChange} error={errors.nama} />
        <FormField label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
        <FormField label="Pesan" name="pesan" value={form.pesan} onChange={handleChange} error={errors.pesan} textarea />
        <button className="btn" type="submit">Kirim Pesan</button>
      </form>
    </div>
  );
}
