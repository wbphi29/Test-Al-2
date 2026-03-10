export const COMPANY_INFO = {
  name: "AL Électricité",
  tva: "BE 0760 630 745",
  phone: "+32 493 43 87 19",
  phoneRaw: "+32493438719",
  email: "info@al-electricite.be",
  address: "Bruxelles, Belgique",
  area: "Région de Bruxelles-Capitale",
  foundingDate: "2010",
  baseUrl: "https://alelectricite.be",
};

export const IMG_VERSION = "20260310";

export const SERVICES = [
  {
    id: "installation",
    title: "Installation électrique",
    slug: "installation-electrique",
    description: "Conception et mise en place de réseaux électriques complets pour nouvelles constructions et extensions à Bruxelles.",
    icon: "Zap",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Design-sans-titre-59.webp?v=${IMG_VERSION}`,
    alt: "Installation de câblage électrique professionnel dans un bâtiment neuf à Bruxelles"
  },
  {
    id: "conformite",
    title: "Mise en conformité",
    slug: "mise-en-conformite",
    description: "Remise aux normes RGIE complète de votre installation pour garantir un certificat de conformité positif.",
    icon: "ShieldCheck",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-5.webp?v=${IMG_VERSION}`,
    alt: "Vérification technique d'un tableau électrique pour mise en conformité RGIE"
  },
  {
    id: "depannage",
    title: "Dépannage 24/7",
    slug: "depannage-electrique",
    description: "Intervention d'urgence immédiate pour pannes de courant, courts-circuits et pannes de tableau à Bruxelles.",
    icon: "Clock",
    emergency: true,
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-4.webp?v=${IMG_VERSION}`,
    alt: "Électricien en train de diagnostiquer une panne sur un tableau électrique en urgence"
  },
  {
    id: "renovation",
    title: "Rénovation électrique",
    slug: "renovation-electrique",
    description: "Modernisation complète des anciennes installations électriques pour plus de sécurité et d'efficacité énergétique.",
    icon: "Hammer",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Design-sans-titre-58.webp?v=${IMG_VERSION}`,
    alt: "Rénovation de l'installation électrique d'une maison bruxelloise"
  },
  {
    id: "tableaux",
    title: "Tableaux électriques",
    slug: "tableaux-electriques",
    description: "Remplacement, extension et mise en sécurité de vos coffrets électriques avec du matériel de pointe.",
    icon: "Layout",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-1.webp?v=${IMG_VERSION}`,
    alt: "Installation d'un nouveau tableau électrique avec disjoncteurs modernes"
  },
  {
    id: "domotique",
    title: "Domotique",
    slug: "domotique",
    description: "Solutions intelligentes pour le contrôle automatisé de l'éclairage, du chauffage et de la sécurité de votre habitat.",
    icon: "Cpu",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Design-sans-titre-56.webp?v=${IMG_VERSION}`,
    alt: "Installation de modules domotiques dans un coffret électrique intelligent"
  },
  {
    id: "eclairage",
    title: "Éclairage",
    slug: "eclairage-interieur-exterieur",
    description: "Conception et installation de systèmes d'éclairage LED intérieurs et extérieurs esthétiques et économiques.",
    icon: "Lightbulb",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-17-at-18.24.07-1.jpeg?v=${IMG_VERSION}`,
    alt: "Installation de luminaires LED design dans un salon à Bruxelles"
  },
  {
    id: "parlophonie",
    title: "Parlophonie & Vidéophonie",
    slug: "parlophonie-videophonie",
    description: "Installation et réparation de systèmes d'interphonie et vidéophonie pour sécuriser l'accès à votre bâtiment.",
    icon: "PhoneCall",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-2.webp?v=${IMG_VERSION}`,
    alt: "Installation d'un système de vidéophonie moderne à Bruxelles"
  },
  {
    id: "interphone",
    title: "Installation Interphone",
    slug: "installation-interphone",
    description: "Solutions de contrôle d'accès par interphone pour maisons individuelles et copropriétés.",
    icon: "Mic",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-2.webp?v=${IMG_VERSION}`,
    alt: "Électricien installant un interphone professionnel"
  },
  {
    id: "detecteur-fumee",
    title: "Détecteurs de fumée",
    slug: "installation-detecteur-fumee",
    description: "Installation de détecteurs de fumée obligatoires et conformes pour votre sécurité incendie.",
    icon: "Bell",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-5.webp?v=${IMG_VERSION}`,
    alt: "Pose d'un détecteur de fumée certifié au plafond"
  },
  {
    id: "bornes",
    title: "Bornes de recharge",
    slug: "bornes-de-recharge",
    description: "Installation professionnelle de stations de recharge pour véhicules électriques à domicile ou en entreprise.",
    icon: "BatteryCharging",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Design-sans-titre-59.webp?v=${IMG_VERSION}`,
    alt: "Installation d'une borne de recharge pour voiture électrique dans un garage"
  },
  {
    id: "terre",
    title: "Mise à la terre",
    slug: "mise-a-la-terre",
    description: "Installation et vérification de la boucle de terre pour assurer une protection maximale contre les électrocutions.",
    icon: "ArrowDownCircle",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Detection-incendie-4.webp?v=${IMG_VERSION}`,
    alt: "Mise en place d'un système de mise à la terre pour la sécurité électrique"
  },
  {
    id: "certificat",
    title: "Certificat de conformité",
    slug: "certificat-conformite",
    description: "Accompagnement administratif et technique complet pour l'obtention de votre certificat électrique officiel.",
    icon: "FileText",
    image: `https://sos-electricite-bruxelles.be/wp-content/uploads/2026/02/Design-sans-titre-58.webp?v=${IMG_VERSION}`,
    alt: "Dossier de certificat de conformité électrique pour une vente immobilière"
  },
];

export const COMMUNES = [
  "Bruxelles", "Uccle", "Ixelles", "Anderlecht", "Schaerbeek", "Etterbeek", 
  "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre", "Forest", "Molenbeek", 
  "Auderghem", "Jette", "Evere", "Saint-Gilles", "Berchem-Sainte-Agathe", 
  "Koekelberg", "Watermael-Boitsfort", "Ganshoren", "Saint-Josse"
];

export const NAV_LINKS = [
  { name: "Accueil", path: "/" },
  { 
    name: "Services", 
    path: "/services",
    submenu: SERVICES.map(s => ({ name: s.title, path: `/services/${s.slug}` }))
  },
  { 
    name: "Zones d’intervention", 
    path: "/zones",
    submenu: COMMUNES.slice(0, 6).map(c => ({ name: c, path: `/electricien-${c.toLowerCase().replace(/ /g, '-')}` }))
  },
  { name: "À propos", path: "/a-propos" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
