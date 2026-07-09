import PageHero from "./PageHero.jsx";
import SectionTitle from "./SectionTitle.jsx";
import RoomCard from "./RoomCard.jsx";
import { ButtonLink } from "./Buttons.jsx";
import { images, rooms, business, whatsappLink } from "./data.js";

export default function Rooms() {
  return (
    <>
      <PageHero
        eyebrow="Camere e appartamenti"
        title="Le sistemazioni del Ninfea B&B"
        text="Appartamenti indipendenti da 60 m², pensati per offrire praticità, privacy e comfort durante il soggiorno."
        image={images.room1}
        ctaLabel="Verifica disponibilità"
        ctaHref={whatsappLink(
          "Ciao Ninfea B&B, vorrei verificare disponibilità per gli appartamenti."
        )}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Soluzioni disponibili"
            title="Scegli l’appartamento più adatto al tuo soggiorno."
            text="Due sistemazioni curate e funzionali, entrambe con bagno privato, Wi-Fi gratuito e dotazioni pensate per un soggiorno comodo."
          />

          <div className="room-grid two-columns">
            {rooms.map((room) => (
              <RoomCard key={room.title} room={room} />
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <SectionTitle
            eyebrow="Dettagli"
            title="Dotazioni degli appartamenti"
            text="Ogni appartamento è organizzato per offrire autonomia, comfort e praticità, con spazi funzionali e servizi utili durante il soggiorno."
          />

          <div className="apartment-details">
            {rooms.map((room) => (
              <article className="apartment-detail-card" key={room.title}>
                <div className="apartment-detail-card__head">
                  <div>
                    <p className="eyebrow">Sistemazione</p>
                    <h3>{room.title}</h3>
                  </div>

                  <ButtonLink
                    href={whatsappLink(
                      `Ciao Ninfea B&B, vorrei verificare disponibilità per: ${room.title}.`
                    )}
                  >
                    Richiedi disponibilità
                  </ButtonLink>
                </div>

                <div className="apartment-summary">
                  <span>{room.type}</span>
                  <span>{room.size}</span>
                  <span>{room.beds}</span>
                  <span>{room.comfortScore}</span>
                  <span>Fumatori: {room.smoking}</span>
                </div>

                <p className="apartment-description">{room.description}</p>

                <div className="detail-grid">
                  <div className="detail-box">
                    <h4>Servizi principali</h4>
                    <ul>
                      {room.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-box">
                    <h4>Angolo cottura</h4>
                    <ul>
                      {room.kitchenette.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-box">
                    <h4>Bagno privato</h4>
                    <ul>
                      {room.bathroom.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-box">
                    <h4>Dotazioni in appartamento</h4>
                    <ul>
                      {room.amenities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container narrow">
          <SectionTitle eyebrow="FAQ" title="Domande frequenti sulle sistemazioni" />

          <details open>
            <summary>A che ora è il check-in?</summary>
            <p>
              Il check-in è indicato dalle {business.checkIn}. Per esigenze
              particolari è consigliato contattare direttamente la struttura.
            </p>
          </details>

          <details>
            <summary>Gli appartamenti hanno bagno privato?</summary>
            <p>
              Sì, entrambe le sistemazioni dispongono di bagno privato con
              doccia, carta igienica e prodotti da bagno in omaggio.
            </p>
          </details>

          <details>
            <summary>È disponibile il Wi-Fi?</summary>
            <p>
              Sì, negli appartamenti è disponibile il Wi-Fi gratuito.
            </p>
          </details>

          <details>
            <summary>È possibile fumare?</summary>
            <p>
              No, nelle sistemazioni è vietato fumare.
            </p>
          </details>

          <details>
            <summary>Come posso prenotare?</summary>
            <p>
              Puoi contattare Ninfea B&B telefonicamente o tramite WhatsApp per
              verificare disponibilità, prezzi e dettagli del soggiorno.
            </p>
          </details>

          <div className="faq-actions">
            <ButtonLink
              href={whatsappLink(
                "Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno."
              )}
            >
              Verifica disponibilità
            </ButtonLink>

            <ButtonLink href={business.phoneHref} variant="secondary">
              Chiama ora
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}