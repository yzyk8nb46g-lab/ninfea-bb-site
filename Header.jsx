import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { business, whatsappLink } from "./data.js";
import { ButtonLink } from "./Buttons.jsx";
import logoNinfea from "./logo-ninfea-trasparente.png";

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
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-logo">
              <img src={logoNinfea} alt="Logo Ninfea B&B" />
            </span>

            <span className="brand-text">
              <strong>{business.shortName}</strong>
              <small>B&B</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Menu principale">
            {navItems.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={business.phoneHref}>
              <Phone size={17} /> {business.phoneDisplay}
            </a>

            <ButtonLink
              href={whatsappLink(
                "Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno."
              )}
            >
              Prenota
            </ButtonLink>
          </div>

          <button
            className="menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Apri menu"
            type="button"
          >
            <Menu size={25} />
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-drawer-overlay">
          <button
            className="mobile-drawer-backdrop"
            onClick={() => setOpen(false)}
            aria-label="Chiudi menu"
            type="button"
          />

          <aside className="mobile-drawer">
            <div className="mobile-drawer-top">
              <Link to="/" className="brand" onClick={() => setOpen(false)}>
                <span className="brand-logo">
                  <img src={logoNinfea} alt="Logo Ninfea B&B" />
                </span>

                <span className="brand-text">
                  <strong>{business.shortName}</strong>
                  <small>B&B</small>
                </span>
              </Link>

              <button
                className="menu-btn close-btn"
                onClick={() => setOpen(false)}
                aria-label="Chiudi menu"
                type="button"
              >
                <X size={25} />
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              {navItems.map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="mobile-drawer-actions">
              <ButtonLink
                href={whatsappLink(
                  "Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno."
                )}
                className="full"
              >
                Verifica disponibilità
              </ButtonLink>

              <ButtonLink
                href={business.phoneHref}
                variant="secondary"
                className="full"
              >
                Chiama ora
              </ButtonLink>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}