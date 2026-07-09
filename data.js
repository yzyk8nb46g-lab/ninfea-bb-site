export const business = {
  name: "Ninfea B&B",
  shortName: "Ninfea",
  type: "Bed & Breakfast",
  rating: "4,7",
  reviewCount: "12",
  phoneDisplay: "388 256 4751",
  phoneHref: "tel:+393882564751",
  whatsappNumber: "393882564751",
  address: "Via Chieti, 4/g, 66020 San Giovanni Teatino CH",
  checkIn: "14:00",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Ninfea+B%26B+Via+Chieti+4%2Fg+San+Giovanni+Teatino",
  mapsEmbed:
    "https://www.google.com/maps?q=Ninfea%20B%26B%20Via%20Chieti%204%2Fg%20San%20Giovanni%20Teatino&output=embed",
};

export const images = {
  hero:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=85",
  exterior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
  room1:
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85",
  room2:
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  room3:
    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1400&q=85",
  breakfast:
    "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1400&q=85",
  detail:
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85",
  bathroom:
    "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=1400&q=85",
  location:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
};

export const rooms = [
  {
    title: "Appartamento con 1 Camera da Letto",
    image: images.room1,
    guests: "Fino a 3 ospiti",
    size: "60 m²",
    type: "Intero appartamento",
    beds: "1 letto singolo + 1 letto matrimoniale",
    comfortScore: "Letti comodi: punteggio 8,3 su 9 recensioni",
    smoking: "È vietato fumare",
    description:
      "Appartamento indipendente di 60 m² con camera da letto, angolo cottura privato, bagno privato e balcone. Una soluzione comoda e funzionale per soggiorni brevi o più lunghi, ideale per coppie, piccoli nuclei familiari o viaggi di lavoro.",
    features: [
      "Intero appartamento",
      "60 m²",
      "Angolo cottura privato",
      "Bagno privato",
      "Balcone",
      "Wi-Fi gratis",
    ],
    highlights: [
      "Aria condizionata",
      "TV a schermo piatto",
      "Ingresso indipendente",
      "Lavatrice",
      "Divano",
      "Scrivania",
    ],
    kitchenette: [
      "Lavatrice",
      "Frigorifero",
      "Utensili da cucina",
      "Forno",
      "Piano cottura",
      "Tavolo da pranzo",
    ],
    bathroom: [
      "Prodotti da bagno in omaggio",
      "Doccia",
      "Carta igienica",
    ],
    amenities: [
      "Balcone",
      "Aria condizionata",
      "Lavatrice",
      "Divano",
      "Biancheria da letto",
      "Scrivania",
      "Ingresso indipendente",
      "Frigorifero",
      "Zanzariera",
      "Ferro da stiro",
      "TV a schermo piatto",
      "Utensili da cucina",
      "Angolo cottura",
      "Cabina armadio",
      "Forno",
      "Piano cottura",
      "Tavolo da pranzo",
      "Stendibiancheria",
    ],
  },
  {
    title: "Appartamento Deluxe con 1 Camera da Letto",
    image: images.room2,
    guests: "Fino a 2 ospiti",
    size: "60 m²",
    type: "Intero appartamento",
    beds: "1 letto matrimoniale",
    comfortScore: "Letti comodi: punteggio 8,3 su 9 recensioni",
    smoking: "È vietato fumare",
    description:
      "Appartamento Deluxe di 60 m² con una camera da letto e bagno privato. La sistemazione dispone di ingresso indipendente, divano, cabina armadio e dotazioni essenziali per un soggiorno confortevole e riservato.",
    features: [
      "Intero appartamento",
      "60 m²",
      "Bagno privato",
      "Wi-Fi gratis",
      "Ingresso indipendente",
      "1 letto matrimoniale",
    ],
    highlights: [
      "Bagno privato",
      "Ingresso indipendente",
      "Divano",
      "Cabina armadio",
      "Scrivania",
      "Wi-Fi gratis",
    ],
    kitchenette: [
      "Frigorifero",
      "Utensili da cucina",
      "Forno",
      "Piano cottura",
      "Tavolo da pranzo",
    ],
    bathroom: [
      "Prodotti da bagno in omaggio",
      "Doccia",
      "Carta igienica",
    ],
    amenities: [
      "Divano",
      "Biancheria da letto",
      "Scrivania",
      "Ingresso indipendente",
      "Frigorifero",
      "Zanzariera",
      "Ferro da stiro",
      "Utensili da cucina",
      "Cabina armadio",
      "Forno",
      "Piano cottura",
      "Tavolo da pranzo",
      "Stendibiancheria",
    ],
  },
];

export const services = [
  "Wi-Fi gratis",
  "Aria condizionata",
  "Bagno privato",
  "Ingresso indipendente",
  "Angolo cottura",
  "Balcone",
  "TV a schermo piatto",
  "Lavatrice",
  "Frigorifero",
  "Utensili da cucina",
  "Forno",
  "Piano cottura",
  "Biancheria da letto",
  "Zanzariera",
  "Ferro da stiro",
  "Cabina armadio",
];

export const reviews = [
  {
    name: "Ospite Google",
    text: "Inserire qui una recensione reale presa dalla scheda Google del B&B.",
  },
  {
    name: "Ospite Google",
    text: "Inserire qui una recensione reale su pulizia, posizione o accoglienza.",
  },
  {
    name: "Ospite Google",
    text: "Inserire qui una recensione breve e utile per aumentare la fiducia.",
  },
];

export function whatsappLink(message) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}