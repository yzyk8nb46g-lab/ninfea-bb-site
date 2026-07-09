import { Star } from "lucide-react";
import { business } from "../data.js";
import { ButtonLink } from "./Buttons.jsx";

export default function PageHero({ eyebrow, title, text, image, ctaLabel, ctaTo, ctaHref }) {
  return (
    <section className="page-hero">
      <div className="page-hero__media">
        <img src={image} alt={title} />
        <div className="page-hero__overlay" />
      </div>
      <div className="container page-hero__content">
        <div className="rating-pill">
          <Star size={16} fill="currentColor" />
          {business.rating} su Google · {business.reviewCount} recensioni
        </div>
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {ctaLabel && <ButtonLink to={ctaTo} href={ctaHref}>{ctaLabel}</ButtonLink>}
      </div>
    </section>
  );
}
