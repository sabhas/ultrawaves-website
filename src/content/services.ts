export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  bullets?: string[];
  features?: { title: string; description: string }[];
  heroImage: string;
}

export const serviceOverview = [
  {
    id: "cabling",
    title: "Structured Cabling",
    description: "Dynamic network infrastructure through structured cabling.",
  },
  {
    id: "cctv",
    title: "CCTV Surveillance",
    description: "Real-time monitoring and protection of your assets.",
  },
  {
    id: "pabx",
    title: "IP Telephony & PABX",
    description: "Tailored solutions to improve connectivity and streamline operations.",
  },
  {
    id: "wifi",
    title: "Wi-Fi Support",
    description: "Seamless and secure wireless connectivity for homes and businesses.",
  },
  {
    id: "access",
    title: "Time Attendance & Access",
    description: "Streamline attendance tracking and access control.",
  },
  {
    id: "intercom",
    title: "Audio & Video Intercoms",
    description: "Efficient two-way communication for residential and commercial spaces.",
  },
  {
    id: "automation",
    title: "Home & Office Automation",
    description: "Convenience and energy efficiency with smart automation systems.",
  },
  {
    id: "amc",
    title: "AMC Support Services",
    description: "Regular maintenance and technical support for ICT, ELV and AV.",
  },
  {
    id: "web",
    title: "Website Design & Development",
    description: "User-friendly websites that establish a strong online presence.",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Strategic campaigns that boost online visibility and engagement.",
  },
] as const;

export const services: Service[] = [
  {
    id: "cabling",
    title: "Structured Cabling",
    subtitle: "UTP | Fiber Optic | Copper",
    description:
      "Our structured cabling services optimize network infrastructure, guaranteeing efficient data and voice connectivity across your organization. We deal with a comprehensive range of single mode and multi mode fiber optic cable and components.",
    bullets: [
      "New Network cabling installation",
      "Add, Move and change in existing network cable",
      "Efficiently organize and tidy up network cabling racks",
      "Testing CAT-6 / CAT-6A cabling with Fluke tester",
      "Fiber Optic cable pulling and Termination",
      "Terminating, Dressing and Patching cable in server rooms",
    ],
    highlights: [
      "Specialized expertise in Optical Fiber Splicing and Testing",
      "Fiber-To-The-Home (FTTH) solutions aligned with Etisalat and DU guidelines",
    ],
    heroImage: "/src/assets/web/heroes/cabling.webp",
  },
  {
    id: "cctv",
    title: "CCTV Surveillance System",
    description:
      "We offer state-of-the-art CCTV surveillance systems designed to fortify the protection of your assets and premises. Our solutions feature real-time monitoring and advanced security, ensuring the utmost safety and peace of mind.",
    highlights: [
      "Solutions for retail, banks, warehouses, commercial buildings and residences",
      "User-friendly systems with premium HD and 4K video output",
    ],
    features: [
      {
        title: "Dome Cameras",
        description:
          "Cameras with a wide-angle view, suitable for indoor and outdoor surveillance for general security purposes.",
      },
      {
        title: "Bullet Cameras",
        description:
          "Designed for long-distance viewing in outdoor locations with a visible presence to deter intruders.",
      },
      {
        title: "PTZ Cameras",
        description:
          "Motorized cameras that pan, tilt, and zoom for dynamic surveillance requirements.",
      },
      {
        title: "IP Cameras",
        description:
          "Internet-connected cameras allowing remote viewing and control for a wide range of applications.",
      },
    ],
    heroImage: "/src/assets/web/heroes/cctv.webp",
  },
  {
    id: "pabx",
    title: "PABX System",
    subtitle: "Hosted VoIP | SIP Trunking | UCaaS | Mobile VoIP | WebRTC | 5G VoIP",
    description:
      "Ultra is highly regarded in PABX Intercom System solutions. We provide a wide range of services designed to improve communication and connectivity for businesses of all sizes, specializing in planning, installation, and maintenance customized to each client.",
    features: [
      {
        title: "Innovative Technology Solutions",
        description:
          "Advanced IP Telephony solutions staying current with the latest VoIP developments.",
      },
      {
        title: "Exceptional Customer Support",
        description:
          "Responsive technical support and tailored solutions for each client's specific needs.",
      },
      {
        title: "Competitive Pricing",
        description:
          "Cost-effective pricing models accessible to businesses of all sizes without compromising quality.",
      },
    ],
    heroImage: "/src/assets/web/heroes/pabx.webp",
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    subtitle: "Wi-Fi 6 | Wi-Fi 7 | Mesh Wi-Fi",
    description:
      "In a world where connectivity is king, we possess the expertise to create a wire-free world of connectivity. Our certified team excels in configuring seamless home and office networks, integrating computers, tablets, printers, smart TVs and smart gadgets with secure networks aligned to Etisalat and DU guidelines.",
    highlights: [
      "Advanced Wi-Fi solutions for homes and offices",
      "Years of industry experience as a reliable connectivity partner",
    ],
    heroImage: "/src/assets/web/heroes/wifi.webp",
  },
  {
    id: "access",
    title: "Time Attendance & Door Access System",
    description:
      "At Ultra we believe selecting the right attendance and door access control systems is crucial. We ensure systems are user-friendly, reliable, and scalable to accommodate your future growth.",
    highlights: [
      "Seamless employee attendance management",
      "Regulate who enters and exits your premises",
      "Reduce security risks and protect valuable assets",
    ],
    heroImage: "/src/assets/web/heroes/access.webp",
  },
  {
    id: "intercom",
    title: "Intercom",
    subtitle: "Audio | Video",
    description:
      "At Ultra, we specialize in state-of-the-art audio and video intercom systems designed to meet unique client needs. Premium systems tailored for both offices and homes.",
    features: [
      {
        title: "Seamless Communication",
        description: "Connect with visitors and staff effortlessly across your premises.",
      },
      {
        title: "Enhanced Security",
        description: "Verify visitors before granting access with integrated video capabilities.",
      },
      {
        title: "User-Friendly Technology",
        description: "Intuitive interfaces accessible from smartphones, tablets and dedicated panels.",
      },
    ],
    heroImage: "/src/assets/web/heroes/intercom.webp",
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Home | Office",
    description:
      "In a world that's becoming increasingly digital and interconnected, automation has emerged as a game-changer. At Ultra we specialize in cutting-edge automation devices and services tailored to unique client needs.",
    features: [
      {
        title: "Smart Lighting",
        description:
          "Control brightness, color and scheduling via smartphone or voice commands for energy efficiency and security.",
      },
      {
        title: "Smart Thermostats",
        description:
          "Systems like Nest and Aqara that learn preferences, adapt to schedules and reduce utility bills.",
      },
    ],
    heroImage: "/src/assets/web/heroes/automation.webp",
  },
  {
    id: "amc",
    title: "AMC",
    subtitle: "Support | Services",
    description:
      "Ultra's Annual Maintenance Contract (AMC) for IT services, CCTV cameras, and home automation offers comprehensive solutions to ensure uninterrupted functionality and security of your technology infrastructure.",
    highlights: [
      "Regular maintenance and software updates for IT systems",
      "CCTV camera servicing and home automation support",
      "Consistent technical support making your systems reliable and hassle-free",
    ],
    heroImage: "/src/assets/web/heroes/amc.webp",
  },
  {
    id: "web",
    title: "Website Design & Development",
    subtitle: "Design | Development | Hosting",
    description:
      "Ultra delivers user-friendly websites that establish a strong online presence for your business. From responsive layouts to fast, secure builds, we help you connect with customers across desktop and mobile.",
    features: [
      {
        title: "Responsive Design",
        description:
          "Mobile-first websites that look and perform beautifully on every screen size and device.",
      },
      {
        title: "Modern Development",
        description:
          "Clean, maintainable code using current frameworks and best practices for speed and reliability.",
      },
      {
        title: "SEO-Ready Structure",
        description:
          "Built-in foundations for search visibility, performance, and accessibility from day one.",
      },
    ],
    heroImage: "/src/assets/web/heroes/web.svg",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    subtitle: "SEO | Social Media | Campaigns",
    description:
      "Our strategic digital marketing campaigns boost your online visibility and engagement, driving measurable growth for your business across search, social, and paid channels.",
    highlights: [
      "Data-driven campaigns tailored to your audience and goals",
      "Improved brand visibility across search engines and social platforms",
      "Measurable results with ongoing optimization and reporting",
    ],
    features: [
      {
        title: "Search Engine Optimization",
        description:
          "On-page and technical SEO strategies to improve rankings and organic traffic over time.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Engaging content and targeted campaigns that build community and drive conversions.",
      },
      {
        title: "Paid Advertising",
        description:
          "Managed Google and social ad campaigns optimized for reach, leads, and return on investment.",
      },
    ],
    heroImage: "/src/assets/web/heroes/marketing.svg",
  },
];
