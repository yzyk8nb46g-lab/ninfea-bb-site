import { CalendarCheck, MapPin, Star, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { business, images, rooms, services, reviews, whatsappLink } from "./data.js";
import { ButtonLink } from "./Buttons.jsx";
import SectionTitle from "./SectionTitle.jsx";
import RoomCard from "./RoomCard.jsx";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media">
          <img src={images.hero} alt="Ninfea B&B" />
          <div className="home-hero__overlay" />
        </div>
        <div className="container home-hero__content">
          <div className="rating-pill"><Star size={16} fill="currentColor" /> {business.rating} su Google · {business.type}</div>
          <h1>Il tuo soggiorno tranquillo tra Chieti e Pescara.</h1>
          <p>Ninfea B&B ti accoglie in un ambiente semplice, curato e riservato, ideale per soggiorni brevi, lavoro, weekend e viaggi in zona.</p>
          <div className="hero-actions">
            <ButtonLink href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}>Verifica disponibilità</ButtonLink>
            <ButtonLink to="/camere" variant="secondary">Scopri le camere</ButtonLink>
          </div>
          <div className="hero-facts">
            <div><strong>Check-in</strong><span>dalle {business.checkIn}</span></div>
            <div><strong>Telefono</strong><span>{business.phoneDisplay}</span></div>
            <div><strong>Posizione</strong><span>San Giovanni Teatino</span></div>
            <div><strong>Prenotazione</strong><span>contatto diretto</span></div>
          </div>
        </div>
      </section>

      <section className="booking-strip">
        <div className="container booking-card">
          <div><CalendarCheck size={22} /><span>Controlla disponibilità in modo rapido</span></div>
          <p>Scrivici su WhatsApp indicando date e numero di ospiti.</p>
          <ButtonLink href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità. Date: — Ospiti: —")}>Scrivi su WhatsApp</ButtonLink>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-grid">
          <div>
            <SectionTitle align="left" eyebrow="Benvenuti" title="Accoglienza semplice, atmosfera tranquilla e posizione comoda." text="Ninfea B&B è pensato per chi cerca un soggiorno pratico, pulito e rilassante in una zona strategica tra Chieti e Pescara." />
            <div className="mini-grid">
              <div className="feature-box"><ShieldCheck /><h3>Ambiente curato</h3><p>Spazi ordinati, funzionali e accoglienti.</p></div>
              <div className="feature-box"><MapPin /><h3>Posizione strategica</h3><p>Comodo per muoversi tra Chieti, Pescara e dintorni.</p></div>
            </div>
          </div>
          <div className="image-card offset-card">
            <img src={images.exterior} alt="Esterno Ninfea B&B" />
            <div><strong>Dove siamo</strong><span>{business.address}</span></div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <SectionTitle eyebrow="Perché sceglierci" title="Tutto quello che serve per un soggiorno senza pensieri." text="Una comunicazione chiara, una posizione utile e ambienti accoglienti rendono Ninfea B&B una scelta pratica e piacevole." />
          <div className="cards-4">
            <div className="info-card"><MapPin /><h3>Posizione comoda</h3><p>Una base pratica per raggiungere Chieti, Pescara e le principali vie di collegamento.</p></div>
            <div className="info-card"><Sparkles /><h3>Spazi curati</h3><p>Ambienti semplici, puliti e pensati per offrire comfort durante la permanenza.</p></div>
            <div className="info-card"><ShieldCheck /><h3>Atmosfera tranquilla</h3><p>Una soluzione riservata e rilassante per riposare bene.</p></div>
            <div className="info-card"><MessageCircle /><h3>Contatto diretto</h3><p>Puoi chiamare o scrivere su WhatsApp per disponibilità e informazioni.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head-row">
          <SectionTitle align="left" eyebrow="Camere" title="Spazi accoglienti per riposare bene." text="Una selezione di soluzioni pratiche per soggiorni brevi, lavoro, coppie e famiglie." />
          <ButtonLink to="/camere" variant="secondary">Vedi tutte</ButtonLink>
        </div>
        <div className="container room-grid">
          {rooms.map((room) => <RoomCard key={room.title} room={room} />)}
        </div>
      </section>

      <section className="section dark-cta">
        <div className="container dark-cta__grid">
          <div>
            <p className="eyebrow light">Servizi</p>
            <h2>Comfort essenziale, comunicazione semplice.</h2>
            <p>Una selezione di servizi utili per rendere il soggiorno pratico, rilassante e ben organizzato.</p>
          </div>
          <div className="service-list compact">
            {services.slice(0, 6).map((service) => <span key={service}>{service}</span>)}
          </div>
          <ButtonLink to="/servizi" className="dark-btn">Scopri i servizi</ButtonLink>
        </div>
      </section>

      <section className="section light-section">
        <div className="container split-grid reverse">
          <div className="map-preview">
            <iframe title="Mappa Ninfea B&B" src={business.mapsEmbed} loading="lazy" />
          </div>
          <div>
            <SectionTitle align="left" eyebrow="Posizione" title="A San Giovanni Teatino, comodo tra Chieti e Pescara." text="Una posizione utile per chi viaggia in zona, con ristoranti e collegamenti nelle vicinanze." />
            <ButtonLink to="/posizione">Apri la pagina posizione</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-head-row">
          <SectionTitle align="left" eyebrow="Recensioni" title="La fiducia passa dalle esperienze reali." text={`Valutazione Google: ${business.rating}/5 su ${business.reviewCount} recensioni.`} />
          <ButtonLink to="/recensioni" variant="secondary">Leggi recensioni</ButtonLink>
        </div>
        <div className="container review-grid">
          {reviews.map((review) => <article className="review-card" key={review.text}><div className="stars">★★★★★</div><p>“{review.text}”</p><strong>{review.name}</strong></article>)}
        </div>
      </section>

      <section className="final-conversion">
        <div className="container final-conversion__inner">
          <h2>Hai bisogno di una camera?</h2>
          <p>Contatta Ninfea B&B per disponibilità, prezzi e informazioni sul tuo soggiorno.</p>
          <div className="hero-actions center">
            <ButtonLink href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}>WhatsApp</ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary">Chiama ora</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
