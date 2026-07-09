import { Users, Ruler, BedDouble } from "lucide-react";
import { whatsappLink } from "./data.js";

export default function RoomCard({ room }) {
  return (
    <article className="room-card">
      <div className="room-card__image">
        <img src={room.image} alt={room.title} />
      </div>

      <div className="room-card__body">
        <div className="room-card__topline">
          <Users size={17} /> {room.guests}
        </div>

        <h3>{room.title}</h3>

        <div className="room-meta">
          <span>
            <Ruler size={15} />
            {room.size}
          </span>
          <span>
            <BedDouble size={15} />
            {room.beds}
          </span>
        </div>

        <p>{room.description}</p>

        <div className="tags">
          {room.features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <a
          className="text-link"
          href={whatsappLink(
            `Ciao Ninfea B&B, vorrei informazioni su: ${room.title}.`
          )}
        >
          Richiedi disponibilità →
        </a>
      </div>
    </article>
  );
}