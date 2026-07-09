import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="legal-page">
      <div className="container narrow center-text">
        <p className="eyebrow">404</p>
        <h1>Pagina non trovata</h1>
        <p>La pagina che stai cercando non esiste o è stata spostata.</p>
        <Link className="btn btn-primary" to="/">Torna alla Home</Link>
      </div>
    </section>
  );
}
