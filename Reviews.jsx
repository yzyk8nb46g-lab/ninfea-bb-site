import { Wifi, Wind, Bath, Car, Clock, Sparkles, Coffee, MapPin } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { ButtonLink } from "../components/Buttons.jsx";
import { images, services, whatsappLink } from "../data.js";

const icons = [Wifi, Wind, Bath, Car, Clock, Sparkles, Coffee, MapPin];

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Servizi"
        title="Servizi per un soggiorno pratico e rilassante"
        text="Tutto ciò che serve per vivere il soggiorno con semplicità, tranquillità e contatto diretto con la struttura."
        image={images.breakfast}
        ctaLabel="Richiedi informazioni"
        ctaHref={whatsappLink("Ciao Ninfea B&B, vorrei ricevere informazioni sui servizi disponibili.")}
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Comfort" title="Servizi principali" text="Verificare e lasciare solo i servizi realmente disponibili prima della pubblicazione." />
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];
              return <div className="service-card" key={service}><Icon /><span>{service}</span></div>;
            })}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <SectionTitle eyebrow="Ideale per" title="Una struttura adatta a più esigenze di viaggio." />
          <div className="cards-4">
            <div className="info-card"><h3>Coppie</h3><p>Per un soggiorno tranquillo e riservato.</p></div>
            <div className="info-card"><h3>Viaggi di lavoro</h3><p>Posizione comoda e collegamenti pratici.</p></div>
            <div className="info-card"><h3>Famiglie</h3><p>Ambienti accoglienti e funzionali.</p></div>
            <div className="info-card"><h3>Soggiorni brevi</h3><p>Perfetto per una notte o un weekend.</p></div>
          </div>
          <div className="center-space"><ButtonLink to="/contatti">Contattaci</ButtonLink></div>
        </div>
      </section>
    </>
  );
}
