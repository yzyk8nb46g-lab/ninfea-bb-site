import PageHero from "../components/PageHero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import RoomCard from "../components/RoomCard.jsx";
import { ButtonLink } from "../components/Buttons.jsx";
import { images, rooms, business, whatsappLink } from "../data.js";

export default function Rooms() {
  return (
    <>
      <PageHero
        eyebrow="Camere"
        title="Le camere del Ninfea B&B"
        text="Spazi semplici, curati e accoglienti per un soggiorno pratico e confortevole."
        image={images.room1}
        ctaLabel="Verifica disponibilità"
        ctaHref={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità delle camere.")}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Soluzioni"
            title="Scegli la sistemazione più adatta al tuo soggiorno."
            text="I nomi e le descrizioni possono essere aggiornati con le camere reali della struttura."
          />
          <div className="room-grid">
            {rooms.map((room) => <RoomCard key={room.title} room={room} />)}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container split-grid">
          <div>
            <SectionTitle
              align="left"
              eyebrow="Dotazioni"
              title="Tutto l’essenziale per un soggiorno comodo."
              text="Le camere sono pensate per offrire praticità, pulizia e tranquillità."
            />
            <div className="service-list">
              <span>Bagno privato</span>
              <span>Wi-Fi</span>
              <span>Climatizzazione</span>
              <span>Biancheria</span>
              <span>Pulizia</span>
              <span>Contatto diretto</span>
            </div>
            <ButtonLink href={business.phoneHref} variant="secondary">Chiama per dettagli</ButtonLink>
          </div>
          <div className="image-grid-2">
            <img src={images.room2} alt="Camera Ninfea B&B" />
            <img src={images.bathroom} alt="Bagno Ninfea B&B" />
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container narrow">
          <SectionTitle eyebrow="FAQ" title="Domande frequenti sulle camere" />
          <details open><summary>A che ora è il check-in?</summary><p>Il check-in è indicato dalle {business.checkIn}. Per esigenze particolari è consigliato contattare la struttura.</p></details>
          <details><summary>È possibile prenotare direttamente?</summary><p>Sì, il sito è pensato per favorire il contatto diretto tramite telefono o WhatsApp.</p></details>
          <details><summary>Le camere hanno bagno privato?</summary><p>Inserire qui l’informazione definitiva in base alla dotazione reale della struttura.</p></details>
        </div>
      </section>
    </>
  );
}
