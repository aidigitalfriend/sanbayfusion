export const site = {
  name: "Maison Noir",
  tagline: "Contemporary tasting menus in the heart of the city",
  description:
    "Maison Noir is a Michelin-starred restaurant offering a contemporary tasting menu — an intimate, theatrical dining experience built on fire, precision, and the finest seasonal produce.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://maisonnoir.example.com",
  address: {
    line1: "1 Rue de l'Ombre",
    line2: "75001 Paris, France",
  },
  phone: "+33 1 23 45 67 89",
  email: "reservations@maisonnoir.example.com",
  hours: [
    { days: "Tuesday — Thursday", time: "18:00 — 22:00" },
    { days: "Friday — Saturday", time: "18:00 — 23:00" },
    { days: "Sunday — Monday", time: "Closed" },
  ],
  social: {
    instagram: "https://instagram.com",
    // add others as needed
  },
} as const;

export const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
] as const;
