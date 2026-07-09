import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Home, Menu, X, Phone } from "lucide-react";
import { business, whatsappLink } from "../data.js";
import { ButtonLink } from "./Buttons.jsx";

const navItems = [
  ["Home", "/"],
  ["Camere", "/camere"],
  ["Servizi", "/servizi"],
  ["Posizione", "/posizione"],
  ["Gallery", "/gallery"],
  ["Recensioni", "/recensioni"],
  ["Contatti", "/contatti"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon"><Home size={20} /></span>
          <span>
            <strong>{business.shortName}</strong>
            <small>B&B</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Menu principale">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => isActive ? "active" : undefined}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={business.phoneHref}>
            <Phone size={17} /> {business.phoneDisplay}
          </a>
          <ButtonLink
            href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}
          >
            Prenota
          </ButtonLink>
        </div>

        <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Apri menu">
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu__panel">
            <div className="mobile-menu__top">
              <Link to="/" className="brand" onClick={() => setOpen(false)}>
                <span className="brand-icon"><Home size={20} /></span>
                <span>
                  <strong>{business.shortName}</strong>
                  <small>B&B</small>
                </span>
              </Link>
              <button className="menu-btn" onClick={() => setOpen(false)} aria-label="Chiudi menu">
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav">
              {navItems.map(([label, path]) => (
                <NavLink key={path} to={path} onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="mobile-menu__actions">
              <ButtonLink
                href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}
                className="full"
              >
                WhatsApp
              </ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary" className="full">
                Chiama ora
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
