
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Oxford Noir Élégance",
    description: "Chaussure Oxford en cuir véritable, finition élégante et confort inégalé, parfaite pour les occasions formelles.",
    price: 129,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1374&auto=format&fit=crop",
    colors: ["#000000", "#5A3E36", "#0F2C59"],
    sizes: [40, 41, 42, 43, 44, 45],
    category: "oxford",
    new: true,
    url: "https://shopify.com"
  },
  {
    id: "2",
    name: "Derby Marron Classique",
    description: "Derby en cuir marron classique, idéale pour un look business ou casual chic, avec une semelle en cuir naturel.",
    price: 119,
    image: "https://images.unsplash.com/photo-1613763968326-04a2c0a0b1ef?q=80&w=1374&auto=format&fit=crop",
    colors: ["#5A3E36", "#000000"],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    category: "derby",
    new: false,
    url: "https://shopify.com"
  },
  {
    id: "3",
    name: "Sneakers Prestige Blanche",
    description: "Sneakers en cuir premium blanc avec détails dorés, alliance parfaite entre style et confort pour un look casual luxueux.",
    price: 149,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1374&auto=format&fit=crop",
    colors: ["#FFFFFF", "#000000"],
    sizes: [39, 40, 41, 42, 43, 44],
    category: "sneakers",
    new: true,
    url: "https://shopify.com"
  },
  {
    id: "4",
    name: "Chelsea Boots Noir",
    description: "Chelsea boots en cuir noir avec élastiques latéraux, un intemporel du style masculin alliant élégance et praticité.",
    price: 169,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=1335&auto=format&fit=crop",
    colors: ["#000000", "#5A3E36"],
    sizes: [40, 41, 42, 43, 44, 45],
    category: "boots",
    new: false,
    url: "https://shopify.com"
  },
  {
    id: "5",
    name: "Mocassin Cuir Tressé",
    description: "Mocassin en cuir tressé main, finition luxueuse et détail signature, parfait pour les soirées d'été.",
    price: 139,
    image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?q=80&w=1374&auto=format&fit=crop",
    colors: ["#5A3E36", "#000000"],
    sizes: [39, 40, 41, 42, 43, 44],
    category: "loafers",
    new: false,
    url: "https://shopify.com"
  },
  {
    id: "6",
    name: "Oxford Bleu Nuit",
    description: "Oxford en cuir bleu nuit patiné à la main, pour un look distinctif et une personnalité affirmée.",
    price: 159,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop",
    colors: ["#0F2C59", "#000000"],
    sizes: [40, 41, 42, 43, 44],
    category: "oxford",
    new: true,
    url: "https://shopify.com"
  }
];
