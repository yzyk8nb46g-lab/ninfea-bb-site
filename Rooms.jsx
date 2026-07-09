import { Users } from "lucide-react";
import { whatsappLink } from "../data.js";

export default function RoomCard({ room }) {
  return (
    <article className="room-card">
      <div className="room-card__image">
        <img src={room.image} alt={room.title} />
      </div>
      <div className="room-card__body">
        <div className="room-card__topline"><Users size={17} /> {room.guests}</div>
        <h3>{room.title}</h3>
        <p>{room.description}</p>
        <div className="tags">
          {room.features.map((feature) => <span key={feature}>{feature}</span>)}
        </div>
        <a className="text-link" href={whatsappLink(`Ciao Ninfea B&B, vorrei informazioni sulla ${room.title}.`)}>
          Richiedi disponibilità →
        </a>
      </div>
    </article>
  );
}
