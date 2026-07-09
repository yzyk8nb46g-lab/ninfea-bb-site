import PageHero from "./PageHero.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { ButtonLink } from "./Buttons.jsx";
import { images, whatsappLink } from "./data.js";

const gallery = [
  [images.exterior, "Esterno"],
  [images.room1, "Camera matrimoniale"],
  [images.room2, "Camera comfort"],
  [images.room3, "Soluzione famiglia"],
  [images.breakfast, "Colazione"],
  [images.bathroom, "Bagno"],
  [images.detail, "Dettagli"],
  [images.location, "Dintorni"],
];

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Scopri gli ambienti del Ninfea B&B"
        text="Foto della struttura, delle camere e dei dettagli che raccontano l’accoglienza del B&B."
        image={images.exterior}
        ctaLabel="Prenota il tuo soggiorno"
        ctaHref={whatsappLink("Ciao Ninfea B&B, ho visto la gallery e vorrei verificare disponibilità.")}
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Immagini" title="Gallery fotografica" text="Sostituisci queste immagini con foto reali della struttura prima della pubblicazione." />
          <div className="gallery-grid">
            {gallery.map(([src, alt], index) => (
              <figure key={src} className={index === 0 || index === 3 ? "large" : ""}>
                <img src={src} alt={alt} />
                <figcaption>{alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="center-space"><ButtonLink href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}>Verifica disponibilità</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
