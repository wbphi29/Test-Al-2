export const COMPANY_INFO = {
  name: "AL Électricité",
  tva: "BE 0760 630 745",
  phone: "+32 493 43 87 19",
  phoneRaw: "+32493438719",
  email: "info@al-electricite.be",
  address: "Bruxelles, Belgique",
  area: "Région de Bruxelles-Capitale",
  foundingDate: "2010",
};

export const SERVICES = [
  {
    id: "installation",
    title: "Installation électrique",
    slug: "installation-electrique",
    description: "Conception et mise en place de réseaux électriques complets pour nouvelles constructions et extensions à Bruxelles.",
    icon: "Zap",
    image: "https://picsum.photos/seed/electrical-wiring-pro/800/600",
    alt: "Installation de câblage électrique professionnel dans un bâtiment neuf à Bruxelles"
  },
  {
    id: "conformite",
    title: "Mise en conformité",
    slug: "mise-en-conformite",
    description: "Remise aux normes RGIE complète de votre installation pour garantir un certificat de conformité positif.",
    icon: "ShieldCheck",
    image: "https://picsum.photos/seed/electrical-panel-check/800/600",
    alt: "Vérification technique d'un tableau électrique pour mise en conformité RGIE"
  },
  {
    id: "depannage",
    title: "Dépannage 24/7",
    slug: "depannage-electrique",
    description: "Intervention d'urgence immédiate pour pannes de courant, courts-circuits et pannes de tableau à Bruxelles.",
    icon: "Clock",
    emergency: true,
    image: "https://picsum.photos/seed/electrical-troubleshooting/800/600",
    alt: "Électricien en train de diagnostiquer une panne sur un tableau électrique en urgence"
  },
  {
    id: "renovation",
    title: "Rénovation électrique",
    slug: "renovation-electrique",
    description: "Modernisation complète des anciennes installations électriques pour plus de sécurité et d'efficacité énergétique.",
    icon: "Hammer",
    image: "https://picsum.photos/seed/electrical-renovation/800/600",
    alt: "Rénovation de l'installation électrique d'une maison bruxelloise"
  },
  {
    id: "tableaux",
    title: "Tableaux électriques",
    slug: "tableaux-electriques",
    description: "Remplacement, extension et mise en sécurité de vos coffrets électriques avec du matériel de pointe.",
    icon: "Layout",
    image: "https://picsum.photos/seed/fuse-box-install/800/600",
    alt: "Installation d'un nouveau tableau électrique avec disjoncteurs modernes"
  },
  {
    id: "domotique",
    title: "Domotique",
    slug: "domotique",
    description: "Solutions intelligentes pour le contrôle automatisé de l'éclairage, du chauffage et de la sécurité de votre habitat.",
    icon: "Cpu",
    image: "https://picsum.photos/seed/smart-home-electrical/800/600",
    alt: "Installation de modules domotiques dans un coffret électrique intelligent"
  },
  {
    id: "eclairage",
    title: "Éclairage",
    slug: "eclairage-interieur-exterieur",
    description: "Conception et installation de systèmes d'éclairage LED intérieurs et extérieurs esthétiques et économiques.",
    icon: "Lightbulb",
    image: "https://picsum.photos/seed/lighting-installation/800/600",
    alt: "Installation de luminaires LED design dans un salon à Bruxelles"
  },
  {
    id: "bornes",
    title: "Bornes de recharge",
    slug: "bornes-de-recharge",
    description: "Installation professionnelle de stations de recharge pour véhicules électriques à domicile ou en entreprise.",
    icon: "BatteryCharging",
    image: "https://picsum.photos/seed/ev-charger-install/800/600",
    alt: "Installation d'une borne de recharge pour voiture électrique dans un garage"
  },
  {
    id: "terre",
    title: "Mise à la terre",
    slug: "mise-a-la-terre",
    description: "Installation et vérification de la boucle de terre pour assurer une protection maximale contre les électrocutions.",
    icon: "ArrowDownCircle",
    image: "https://picsum.photos/seed/grounding-system/800/600",
    alt: "Mise en place d'un système de mise à la terre pour la sécurité électrique"
  },
  {
    id: "certificat",
    title: "Certificat de conformité",
    slug: "certificat-conformite",
    description: "Accompagnement administratif et technique complet pour l'obtention de votre certificat électrique officiel.",
    icon: "FileText",
    image: "https://picsum.photos/seed/electrical-certificate/800/600",
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
