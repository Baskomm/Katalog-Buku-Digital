export default function FormField({ label, name, value, onChange, error, textarea }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Tag id={name} name={name} value={value} onChange={onChange} rows={textarea ? 5 : undefined} className={error ? 'invalid' : ''} />
      {error && <small className="error">{error}</small>}
    </div>
  );
}
