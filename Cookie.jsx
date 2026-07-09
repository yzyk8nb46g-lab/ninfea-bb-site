import PageHero from "../components/PageHero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { ButtonLink } from "../components/Buttons.jsx";
import { business, images, reviews, whatsappLink } from "../data.js";

export default function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Recensioni"
        title="Le recensioni degli ospiti"
        text="La soddisfazione degli ospiti è il modo migliore per raccontare il nostro B&B."
        image={images.detail}
        ctaLabel="Prenota ora"
        ctaHref={whatsappLink("Ciao Ninfea B&B, vorrei prenotare un soggiorno.")}
      />

      <section className="section">
        <div className="container split-grid">
          <div className="rating-box">
            <span>{business.rating}</span>
            <div className="stars">★★★★★</div>
            <p>Valutazione Google su {business.reviewCount} recensioni.</p>
            <ButtonLink href={business.mapsLink} variant="secondary">Vedi su Google</ButtonLink>
          </div>
          <div>
            <SectionTitle align="left" eyebrow="Fiducia" title="Esperienze reali, maggiore sicurezza nella scelta." text="Inserire recensioni reali aiuta il sito a convertire meglio e riduce i dubbi prima della prenotazione." />
            <div className="review-stack">
              {reviews.map((review) => (
                <article className="review-card horizontal" key={review.text}>
                  <div className="stars">★★★★★</div>
                  <p>“{review.text}”</p>
                  <strong>{review.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
