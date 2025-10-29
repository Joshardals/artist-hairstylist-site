import { ArtProduct } from "@/types";

export const artProducts: ArtProduct[] = [
  {
    id: 1,
    title: "Abstract Sunset",
    description:
      "Vibrant abstract piece capturing the essence of golden hour. Gallery quality print.",
    price: 45,
    size: "12x16 inches",
    image: "/images/art-sunset.jpg",
    category: "prints",
  },
  {
    id: 2,
    title: "Urban Dreams",
    description: "Bold city-inspired artwork. Perfect for modern spaces.",
    price: 55,
    size: "16x20 inches",
    image: "/images/art-urban.jpg",
    category: "prints",
  },
  {
    id: 3,
    title: "Nature's Whisper",
    description: "Serene botanical illustration on premium paper.",
    price: 40,
    size: "11x14 inches",
    image: "/images/art-nature.jpg",
    category: "prints",
  },
  {
    id: 4,
    title: "Artist Tote Bag",
    description:
      "Carry your essentials in style with original artwork printed on durable canvas.",
    price: 25,
    size: "One size",
    image: "/images/tote-bag.jpg",
    category: "apparel",
  },
];
