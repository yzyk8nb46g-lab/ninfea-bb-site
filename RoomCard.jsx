import { Link } from "react-router-dom";
import { business, whatsappLink } from "../data.js";
import { ButtonLink } from "./Buttons.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{business.name}</h3>
          <p>Bed & Breakfast a San Giovanni Teatino, in posizione comoda tra Chieti e Pescara.</p>
          <ButtonLink href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}>Prenota ora</ButtonLink>
        </div>

        <div>
          <h4>Menu</h4>
          <Link to="/camere">Camere</Link>
          <Link to="/servizi">Servizi</Link>
          <Link to="/posizione">Posizione</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contatti">Contatti</Link>
        </div>

        <div>
          <h4>Contatti</h4>
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <a href={business.mapsLink} target="_blank" rel="noreferrer">{business.address}</a>
          <p>Check-in: dalle {business.checkIn}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {business.name}. Tutti i diritti riservati.</p>
        <div>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
