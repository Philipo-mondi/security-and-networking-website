/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit everything here to rebrand the website.
 *  Company name, phone, WhatsApp, email, location, hours, socials and
 *  business statistics are all defined in this single file.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const COMPANY = {
  name: "EMHILL",
  shortName: "EMHILL",
  tagline: "Security. Reliability. Technology.",
  subBrand: "CCTV • SECURITY • NETWORKING",

  phoneDisplay: "+254 113 137 010",
  phoneHref: "tel:+254113137010",

  whatsappNumber: "254113137010",
  whatsappHref:
    "https://wa.me/254113137010?text=" +
    encodeURIComponent(
      "Hello, I am interested in your CCTV and networking services. I would like to request a quotation."
    ),

  email: "emmanuelweke58@gmail.com",
  emailHref:
    "mailto:emmanuelweke58@gmail.com?subject=EMHILL%20Inquiry&body=" +
    encodeURIComponent(
      "Hello EMHILL Team,\n\nI am interested in your CCTV installation and networking services.\n\nPlease provide more information about your services and pricing.\n\nThank you."
    ),

  location: "Nairobi, Kenya",
  address: "5th Floor, ABC Plaza, Moi Avenue, Nairobi CBD, Kenya",

  businessHours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday & Holidays", time: "Emergency support only" },
  ],

  mapEmbedUrl:
    "https://www.google.com/maps?q=Moi%20Avenue%2C%20Nairobi%2C%20Kenya&z=15&output=embed",

  socials: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
    googleReview: "#",
  },
} as const;

/** Editable trust statistics (placeholder values). */
export const STATS = [
  { value: 100, suffix: "+", label: "Installations Completed" },
  { value: 50, suffix: "+", label: "Businesses Supported" },
  { value: 24, suffix: "/7", label: "Security Technology" },
  { value: 100, suffix: "%", label: "Customer Commitment" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const QUOTE_SERVICES = [
  "CCTV Installation",
  "CCTV Maintenance",
  "CCTV Management",
  "Remote Monitoring",
  "Business Security",
  "Networking",
  "Wi-Fi Installation",
  "Network Troubleshooting",
  "Structured Cabling",
  "Other",
];

export const CAMERA_COUNT_OPTIONS = [
  "1 – 4 cameras",
  "5 – 8 cameras",
  "9 – 16 cameras",
  "17 – 32 cameras",
  "33+ cameras",
  "Not sure yet",
];

export const PROPERTY_TYPES = [
  "Retail Shop",
  "Supermarket",
  "Office",
  "Warehouse",
  "School / Institution",
  "Restaurant",
  "Hotel",
  "Industrial Facility",
  "Construction Site",
  "Residential / Home",
  "Other",
];

/* ─────────────────────────── SERVICES ─────────────────────────── */

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "cctv-installation",
    title: "CCTV Installation",
    description:
      "We design and install CCTV systems around your premises, security requirements and budget — positioned for maximum coverage, configured for reliable recording and easy viewing.",
    features: [
      "Indoor & outdoor cameras",
      "IP cameras & HD cameras",
      "Night vision & motion detection",
      "DVR/NVR systems",
      "Professional camera positioning",
      "System configuration & testing",
      "Remote viewing on phone & PC",
    ],
    cta: "Get CCTV Installation Quote",
    featured: true,
  },
  {
    id: "cctv-management",
    title: "CCTV Management & Monitoring",
    description:
      "Professional support to manage and maintain your surveillance system — we keep your cameras recording, your footage safe and your remote access working.",
    features: [
      "CCTV system management",
      "Camera & recording configuration",
      "Remote monitoring setup",
      "DVR/NVR management",
      "Storage management",
      "User access management",
      "System health checks",
    ],
    cta: "Request a Quote",
  },
  {
    id: "business-security",
    title: "Business Security Solutions",
    description:
      "Security is more than cameras. We build complete surveillance solutions that protect your assets, people and operations across every corner of your business.",
    features: [
      "Monitor premises & assets",
      "Reduce security risks",
      "Monitor staff & operations",
      "Investigate incidents",
      "Improve accountability",
      "Secure entrances & exits",
      "Protect sensitive areas",
    ],
    cta: "Request a Quote",
  },
  {
    id: "networking",
    title: "Networking Services",
    description:
      "Reliable networking is the backbone of modern CCTV systems and daily operations. We design and build stable, secure networks that keep everything connected.",
    features: [
      "LAN installation & expansion",
      "Wi-Fi installation & optimization",
      "Router & switch configuration",
      "Network troubleshooting",
      "Structured cabling",
      "IP addressing & setup",
      "Network security hardening",
    ],
    cta: "Request a Quote",
  },
  {
    id: "cctv-maintenance",
    title: "CCTV Maintenance & Support",
    description:
      "Cameras not recording? Footage missing? Remote access down? Our technicians diagnose and fix CCTV problems fast — and prevent them with scheduled maintenance.",
    features: [
      "Camera & DVR/NVR troubleshooting",
      "Cable inspection & repair",
      "Storage problems resolved",
      "Camera replacement",
      "System upgrades",
      "Preventive maintenance",
      "Network-related CCTV issues",
    ],
    cta: "Request a Quote",
  },
];

/* ─────────────────────────── WHY CHOOSE US ─────────────────────────── */

export const WHY_US = [
  {
    title: "Professional Installation",
    text: "Certified technicians who install, configure and test every system to professional standards.",
  },
  {
    title: "Reliable Equipment",
    text: "We supply and recommend trusted camera and networking brands built to last.",
  },
  {
    title: "Customized Security Solutions",
    text: "Every system is designed around your premises, risks and budget — never one-size-fits-all.",
  },
  {
    title: "Experienced Technical Support",
    text: "Hands-on expertise in CCTV, DVR/NVR systems, networks and security technology.",
  },
  {
    title: "Fast Troubleshooting",
    text: "Quick response times when something goes wrong — we get your system back online.",
  },
  {
    title: "Business-Focused Solutions",
    text: "Security and networking designed to protect your operations and support your growth.",
  },
  {
    title: "Affordable Packages",
    text: "Transparent, competitive pricing with packages that suit small, medium and large premises.",
  },
  {
    title: "Ongoing Maintenance",
    text: "Preventive maintenance plans that keep your system healthy long after installation.",
  },
  {
    title: "Customer-Centered Service",
    text: "Clear communication, honest advice and support that continues after the job is done.",
  },
];

/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */

export const STEPS = [
  {
    number: "01",
    title: "Consultation",
    text: "We listen and understand your security and networking requirements, concerns and budget.",
  },
  {
    number: "02",
    title: "Site Assessment",
    text: "We assess your premises to identify camera locations, networking needs and security risks.",
  },
  {
    number: "03",
    title: "Installation",
    text: "Our technicians professionally install, configure and thoroughly test your system.",
  },
  {
    number: "04",
    title: "Support",
    text: "We provide maintenance, troubleshooting, upgrades and ongoing technical support.",
  },
];

/* ─────────────────────────── CCTV SOLUTIONS ─────────────────────────── */

export const CCTV_SOLUTIONS = [
  {
    title: "Home CCTV",
    text: "Deter intruders, watch deliveries and keep an eye on your family — viewable from your phone, day or night.",
  },
  {
    title: "Retail CCTV",
    text: "Reduce shoplifting, monitor staff and customers, and review incidents at tills, entrances and displays.",
  },
  {
    title: "Supermarket CCTV",
    text: "Full coverage of entrances, aisles, cashiers, storage areas and parking to cut shrinkage and disputes.",
  },
  {
    title: "Office CCTV",
    text: "Protect equipment and sensitive areas, monitor access points and improve staff accountability.",
  },
  {
    title: "Warehouse CCTV",
    text: "Cover loading bays, inventory racks and perimeters of large facilities with long-range and HD cameras.",
  },
  {
    title: "School CCTV",
    text: "Safer campuses with monitored gates, corridors and grounds — protecting students, staff and property.",
  },
  {
    title: "Restaurant CCTV",
    text: "Watch the kitchen, counter and dining areas to prevent loss and manage busy service periods.",
  },
  {
    title: "Hotel CCTV",
    text: "Secure lobbies, corridors, parking and back-of-house areas while respecting guest privacy.",
  },
  {
    title: "Industrial CCTV",
    text: "Heavy-duty cameras that withstand harsh environments while monitoring machinery, safety and access.",
  },
  {
    title: "Construction Site CCTV",
    text: "Prevent theft of materials and equipment, monitor progress and enforce site safety — even without power.",
  },
];

/* ─────────────────────────── NETWORKING ─────────────────────────── */

export const NETWORK_FEATURES = [
  "LAN installation & expansion",
  "Wi-Fi installation & optimization",
  "Router & switch configuration",
  "Network troubleshooting",
  "Structured cabling",
  "IP addressing & setup",
  "Business network setup",
  "Network security hardening",
];

export const NETWORK_DEVICES = [
  "Computers",
  "POS systems",
  "CCTV systems",
  "Printers",
  "Wi-Fi devices",
  "Servers",
  "Business applications",
  "Internet connectivity",
];

/* ─────────────────────────── PROJECTS ─────────────────────────── */

export interface Project {
  title: string;
  category: "CCTV" | "Networking" | "Security" | "Maintenance";
  description: string;
  services: string[];
  image: string;
  alt: string;
}

export const PROJECT_FILTERS = [
  "All",
  "CCTV",
  "Networking",
  "Security",
  "Maintenance",
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Retail CCTV Installation",
    category: "CCTV",
    description:
      "Professional surveillance installation for retail businesses — covering entrances, aisles, tills and stock areas.",
    services: ["HD Cameras", "DVR Setup", "Remote Viewing"],
    image:
      "https://images.pexels.com/photos/11608887/pexels-photo-11608887.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Customer browsing shelves in a modern retail store protected by CCTV",
  },
  {
    title: "Office Network Installation",
    category: "Networking",
    description:
      "Reliable LAN and Wi-Fi infrastructure for offices — fast, stable connectivity for computers, printers and CCTV.",
    services: ["LAN Setup", "Wi-Fi", "Structured Cabling"],
    image:
      "https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Ethernet cables plugged into a network switch in an office server cabinet",
  },
  {
    title: "Supermarket Security System",
    category: "Security",
    description:
      "Complete CCTV coverage for entrances, aisles, cashiers, storage areas and external premises of supermarkets.",
    services: ["24 Cameras", "NVR", "POS Integration"],
    image:
      "https://images.pexels.com/photos/7451955/pexels-photo-7451955.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Modern supermarket interior with shelves of products under CCTV surveillance",
  },
  {
    title: "Warehouse Surveillance",
    category: "CCTV",
    description:
      "Security monitoring for large storage facilities — long-range cameras over loading bays, racks and perimeters.",
    services: ["Long-range Cameras", "Night Vision", "24/7 Recording"],
    image:
      "https://images.pexels.com/photos/36126305/pexels-photo-36126305.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Industrial warehouse interior with metal storage racks under CCTV monitoring",
  },
  {
    title: "Wi-Fi & Structured Cabling Project",
    category: "Networking",
    description:
      "Whole-premises Wi-Fi coverage and tidy structured cabling for a busy multi-store commercial building.",
    services: ["Wi-Fi Mesh", "Patch Panels", "Cable Management"],
    image:
      "https://images.pexels.com/photos/5073493/pexels-photo-5073493.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Neatly routed network cables connected into a patch panel in a data cabinet",
  },
  {
    title: "Hotel CCTV Upgrade",
    category: "Maintenance",
    description:
      "Upgraded an aging analogue system to HD IP cameras with central monitoring for a busy city hotel.",
    services: ["System Upgrade", "IP Cameras", "User Training"],
    image:
      "https://images.pexels.com/photos/10919666/pexels-photo-10919666.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Security camera mounted on a modern building facade",
  },
  {
    title: "School CCTV Coverage",
    category: "CCTV",
    description:
      "Campus-wide surveillance covering gates, corridors, parking and grounds with restricted staff access.",
    services: ["Perimeter Cameras", "Access Control", "Mobile Viewing"],
    image:
      "https://images.pexels.com/photos/5650141/pexels-photo-5650141.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Outdoor security camera pole-mounted against a clear blue sky",
  },
  {
    title: "Industrial Site Surveillance",
    category: "Security",
    description:
      "Rugged surveillance for an industrial facility — monitoring machinery, safety compliance and site access.",
    services: ["Rugged Cameras", "24/7 Monitoring", "NVR Storage"],
    image:
      "https://images.pexels.com/photos/36126272/pexels-photo-36126272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Empty metal storage racks in a spacious industrial facility with security monitoring",
  },
];

/* ─────────────────────────── PACKAGES ─────────────────────────── */

export const PACKAGES = [
  {
    name: "Basic CCTV Package",
    audience: "Suitable for small businesses, shops and homes.",
    features: [
      "CCTV consultation",
      "Camera installation",
      "DVR/NVR configuration",
      "Mobile viewing setup",
      "Basic system training",
    ],
    popular: false,
  },
  {
    name: "Business Security Package",
    audience: "Suitable for medium-sized businesses and offices.",
    features: [
      "Professional site assessment",
      "Multiple CCTV cameras",
      "DVR/NVR recorder",
      "Remote monitoring setup",
      "Network configuration",
      "User access setup",
      "Full system testing",
    ],
    popular: true,
  },
  {
    name: "Complete Security & Network Package",
    audience: "The full solution for growing organizations.",
    features: [
      "Complete CCTV installation",
      "Network infrastructure",
      "Wi-Fi installation & setup",
      "Router/switch configuration",
      "Remote CCTV access",
      "Security optimization",
      "Maintenance support plan",
    ],
    popular: false,
  },
];

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */

export const TESTIMONIALS = [
  {
    name: "James Mwangi",
    company: "Retail Store Owner",
    service: "CCTV Installation",
    rating: 5,
    text: "They installed 8 cameras across my shop and store. The picture quality is excellent and I can now watch everything from my phone. Very professional team from start to finish.",
  },
  {
    name: "Sarah Wanjiku",
    company: "Office Manager",
    service: "Networking Services",
    rating: 5,
    text: "Our office Wi-Fi was slow and unreliable. SecureNet restructured our entire network and now everything — computers, printers and CCTV — runs smoothly without a single dropout.",
  },
  {
    name: "Daniel Otieno",
    company: "Supermarket Manager",
    service: "Business Security",
    rating: 5,
    text: "Shrinkage has dropped noticeably since the new system went in. The cameras at the tills and storage areas give us full visibility, and the remote monitoring is a game changer.",
  },
  {
    name: "Amina Hassan",
    company: "Restaurant Owner",
    service: "CCTV Maintenance",
    rating: 5,
    text: "Our old CCTV had stopped recording and other companies said it needed full replacement. Their technician repaired and upgraded the system for a fraction of the cost. Honest and skilled.",
  },
  {
    name: "Peter Kariuki",
    company: "Warehouse Operations Lead",
    service: "Warehouse Surveillance",
    rating: 5,
    text: "Covers the entire warehouse including loading bays. Night vision is clear and the system has never gone down. Their support team is always just a call away.",
  },
  {
    name: "Grace Njeri",
    company: "School Administrator",
    service: "CCTV Installation",
    rating: 5,
    text: "Professional and discreet installation across the campus. Parents and staff feel much safer now. The team trained our security staff on how to use the system properly.",
  },
];

/* ─────────────────────────── FAQS ─────────────────────────── */

export const FAQS = [
  {
    q: "How much does CCTV installation cost?",
    a: "The cost depends on the number of cameras, camera type (HD or IP), DVR/NVR capacity, cabling and your premises layout. After a free site assessment we provide a clear, itemized quote with no hidden charges — so you know exactly what you're paying for.",
  },
  {
    q: "How many cameras does my business need?",
    a: "It depends on your premises size and layout. We recommend covering all entrances and exits, cash/till points, high-value areas, parking and blind spots. During the site assessment we map every risk area and advise the optimal number of cameras — no over-selling.",
  },
  {
    q: "Can I monitor my CCTV from my phone?",
    a: "Yes. We configure remote viewing on your phone, tablet or computer, so you can watch live footage and play back recordings from anywhere with an internet connection — securely and with your own login.",
  },
  {
    q: "Can CCTV work at night?",
    a: "Absolutely. We install cameras with infrared night vision and low-light technology that capture clear, usable footage in total darkness — essential for 24/7 business security.",
  },
  {
    q: "Can you repair an existing CCTV system?",
    a: "Yes. We diagnose and repair existing systems — faulty cameras, DVR/NVR issues, storage problems, damaged cables and lost remote access. Often a repair costs a fraction of a full replacement, and we'll always give you an honest recommendation.",
  },
  {
    q: "Can you install CCTV on an existing network?",
    a: "Yes. We can integrate IP cameras into your existing network infrastructure, or design a separate dedicated camera network for maximum reliability and performance. We assess your current setup first.",
  },
  {
    q: "Do you provide networking services?",
    a: "Yes. We provide complete networking services including LAN setup, Wi-Fi installation, router and switch configuration, structured cabling, network troubleshooting and network security — for offices, shops and commercial premises.",
  },
  {
    q: "Can you maintain our CCTV system?",
    a: "Yes. We offer preventive maintenance plans including camera cleaning, cable inspection, recording checks, storage health, firmware updates and system health reports — keeping your security system reliable year-round.",
  },
  {
    q: "How long does CCTV installation take?",
    a: "Most small-to-medium installations are completed in one to two days, including configuration and testing. Larger multi-site projects are scheduled in phases. We always confirm a timeline before work begins.",
  },
  {
    q: "Can you upgrade an old CCTV system?",
    a: "Yes. We upgrade analogue systems to HD or IP, increase storage capacity, add remote viewing and expand camera coverage — often reusing your existing cabling to keep costs down.",
  },
  {
    q: "Do you provide support after installation?",
    a: "Yes — support doesn't end at handover. We provide ongoing technical support, troubleshooting, upgrades and maintenance plans. Every installation includes training on using your system confidently.",
  },
  {
    q: "Can you install CCTV for supermarkets and retail stores?",
    a: "Yes, this is one of our specialties. We install CCTV for supermarkets, retail stores and shopping environments covering entrances, aisles, cashiers, storage and exterior areas — reducing theft and resolving customer disputes.",
  },
];

/* ─────────────────────────── IMAGES ─────────────────────────── */

export const IMAGES = {
  hero: "/images/hero-monitoring.jpg",
  technician: "/images/technician.jpg",
  cameraDome:
    "https://images.pexels.com/photos/29866272/pexels-photo-29866272.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  camerasPair:
    "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  networkSwitch:
    "https://images.pexels.com/photos/2881224/pexels-photo-2881224.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  patchPanel:
    "https://images.pexels.com/photos/4716292/pexels-photo-4716292.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  sunsetCamera:
    "https://images.pexels.com/photos/29536249/pexels-photo-29536249.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
};
