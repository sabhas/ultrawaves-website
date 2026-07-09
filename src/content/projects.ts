export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
}

export const projects: Project[] = [
  {
    id: "moon-tower",
    title: "Moon Tower, Dubai",
    subtitle: "Business Bay",
    description:
      "Moon Tower is a 21-story building comprising 21 floors under development in Business Bay, Dubai.",
    scope: [
      "CCTV Camera Installation and servicing",
      "Internal and external Structural cabling of all 20 floors (ISP, GPON, FTTH, OSP)",
      "Designing and installation of MDF, FDH and Mini OD, Micro ODF Etisalat / DU",
      "Structure cabling for Data and Telephone",
    ],
  },
  {
    id: "vida",
    title: "Vida, Dubai",
    subtitle: "Emaar Development",
    description:
      "An ultra-chic development featuring service and branded apartments with uninterrupted views of Burj Khalifa.",
    scope: [
      "Internal and external Structural cabling (ISP, GPON, FTTH, OSP)",
      "Designing and installation of MDF, FDH and Mini OD, Micro ODF Etisalat / DU",
      "Structure cabling for Data and Telephone",
      "Termination, Splicing and Labeling Micro ODF, Mini ODF and FDH for Etisalat and DU",
      "Installation and Termination of TETRA Radio Systems for Security",
    ],
  },
  {
    id: "hidd-marina",
    title: "Hidd Al-Saadiyat Marina",
    subtitle: "Abu Dhabi",
    description:
      "Abu Dhabi's newest marina with 117 berths (10–30 meters) overlooking the Al Jubail Mangroves in calm, clear waters.",
    scope: [
      "CCTV camera installation and servicing",
      "Termination of CCTV",
      "Internal and external Structural cabling",
      "Installation and configuration of Samsung Wisenet CCTV System",
    ],
  },
  {
    id: "al-durrah",
    title: "Al Durrah Tower, Al Barsha",
    subtitle: "Under MABC Building Contracting LLC",
    description: "Modern commercial tower in Al Barsha, Dubai.",
    scope: [
      "CCTV camera installation and servicing",
      "Termination of CCTV",
      "Internal and external Structural cabling",
      "Installation and configuration of Samsung Wisenet CCTV System",
      "Approval and clearance of SERA",
      "Complete Structure cabling (Data and Fiber Optics) with DU and Etisalat approvals",
    ],
  },
  {
    id: "executive-towers",
    title: "Executive Towers, Dubai",
    subtitle: "Home Automation — Tower E",
    description:
      "Home Automation for a 3BHK Apartment located in Tower E of Executive Towers.",
    scope: [
      "Supply and Installation for Smart switches for lights",
      "Supply and Installation of Smart Thermostats",
      "Supply and installation of smart Door Lock",
      "Supply and installation of Bose Sound System",
      "Adding Access Point for Wi-Fi Network",
      "Configuration of complete apartment with HUB and Smartphones",
    ],
  },
  {
    id: "helipad",
    title: "Helipad by Frozen Cherry",
    subtitle: "Festival City Mall, Dubai",
    description:
      "One of the best sunset spots and outdoor dining in Dubai located in Festival City Mall.",
    scope: [
      "CCTV camera installation and servicing",
      "Termination of CCTV",
      "Internal and external Structural cabling",
    ],
  },
];
