import { MapPin, Navigation, Coffee, Utensils, ParkingCircle } from "lucide-react";
import PageHero from "./PageHero.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { ButtonLink } from "./Buttons.jsx";
import { business, images } from "./data.js";

export default function Location() {
  return (
    <>
      <PageHero
        eyebrow="Posizione"
        title="Dove si trova Ninfea B&B"
        text="A San Giovanni Teatino, in una posizione comoda per raggiungere Chieti, Pescara e i principali collegamenti della zona."
        image={images.location}
        ctaLabel="Apri su Google Maps"
        ctaHref={business.mapsLink}
      />

      <section className="section">
        <div className="container split-grid">
          <div>
            <SectionTitle align="left" eyebrow="Indirizzo" title="Via Chieti, 4/g" text="66020 San Giovanni Teatino CH" />
            <div className="contact-cards">
              <div><MapPin /><span>{business.address}</span></div>
              <div><Navigation /><span>Calcola il percorso direttamente su Google Maps.</span></div>
            </div>
            <ButtonLink href={business.mapsLink}>Calcola percorso</ButtonLink>
          </div>
          <div className="map-box"><iframe title="Mappa Ninfea B&B" src={business.mapsEmbed} loading="lazy" /></div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <SectionTitle eyebrow="Nelle vicinanze" title="Tutto ciò che serve a portata di zona." text="Questa sezione aiuta l’utente a capire velocemente la comodità della posizione." />
          <div className="cards-4">
            <div className="info-card"><Utensils /><h3>Ristoranti</h3><p>Possibilità di trovare locali e ristoranti nella zona.</p></div>
            <div className="info-card"><Coffee /><h3>Bar e caffè</h3><p>Soluzioni pratiche per colazione o pausa veloce.</p></div>
            <div className="info-card"><ParkingCircle /><h3>Parcheggio</h3><p>Inserire qui l’informazione definitiva sul parcheggio.</p></div>
            <div className="info-card"><Navigation /><h3>Collegamenti</h3><p>Posizione utile per muoversi tra Chieti e Pescara.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
