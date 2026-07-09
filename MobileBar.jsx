import { Phone, MessageCircle, MapPin } from "lucide-react";
import { business, whatsappLink } from "./data.js";

export default function MobileBar() {
  return (
    <div className="mobile-sticky-bar">
      <a href={business.phoneHref}><Phone size={20} />Chiama</a>
      <a className="main" href={whatsappLink("Ciao Ninfea B&B, vorrei verificare disponibilità per un soggiorno.")}><MessageCircle size={20} />WhatsApp</a>
      <a href={business.mapsLink} target="_blank" rel="noreferrer"><MapPin size={20} />Maps</a>
    </div>
  );
}
