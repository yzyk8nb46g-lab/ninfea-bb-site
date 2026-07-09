import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { business, images, whatsappLink } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", checkin: "", checkout: "", guests: "2", message: "" });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function submit(e) {
    e.preventDefault();
    const message = `Ciao Ninfea B&B, vorrei ricevere informazioni per una prenotazione.\nNome: ${form.name || "non indicato"}\nTelefono: ${form.phone || "non indicato"}\nCheck-in: ${form.checkin || "da definire"}\nCheck-out: ${form.checkout || "da definire"}\nOspiti: ${form.guests}\nMessaggio: ${form.message || "nessun messaggio aggiuntivo"}`;
    window.open(whatsappLink(message), "_blank");
  }

  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Contatti e prenotazioni"
        text="Contattaci per disponibilità, prezzi e informazioni sul tuo soggiorno."
        image={images.exterior}
        ctaLabel="Scrivi su WhatsApp"
        ctaHref={whatsappLink("Ciao Ninfea B&B, vorrei informazioni per una prenotazione.")}
      />

      <section className="section">
        <div className="container split-grid align-start">
          <div>
            <SectionTitle align="left" eyebrow="Contatto diretto" title="Scrivici o chiamaci." text="La pagina contatti deve essere la pagina più orientata alla conversione: telefono, WhatsApp, indirizzo e richiesta disponibilità." />
            <div className="contact-cards">
              <a href={business.phoneHref}><Phone /><span><strong>Telefono</strong>{business.phoneDisplay}</span></a>
              <a href={whatsappLink("Ciao Ninfea B&B, vorrei informazioni per una prenotazione.")}><MessageCircle /><span><strong>WhatsApp</strong>Scrivi un messaggio</span></a>
              <a href={business.mapsLink} target="_blank" rel="noreferrer"><MapPin /><span><strong>Indirizzo</strong>{business.address}</span></a>
              <div><Clock /><span><strong>Check-in</strong>dalle {business.checkIn}</span></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="form-grid">
              <label>Nome<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Il tuo nome" /></label>
              <label>Telefono<input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Il tuo numero" /></label>
              <label>Check-in<input type="date" value={form.checkin} onChange={(e) => update("checkin", e.target.value)} /></label>
              <label>Check-out<input type="date" value={form.checkout} onChange={(e) => update("checkout", e.target.value)} /></label>
              <label className="full-field">Ospiti<select value={form.guests} onChange={(e) => update("guests", e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></label>
              <label className="full-field">Messaggio<textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Scrivi eventuali richieste particolari" rows="5" /></label>
            </div>
            <button className="form-submit" type="submit">Invia richiesta su WhatsApp</button>
            <p className="form-note">Il form apre WhatsApp con il messaggio già compilato. Per invio email serve collegare un servizio form.</p>
          </form>
        </div>
      </section>
    </>
  );
}
