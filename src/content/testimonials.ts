export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Ultra Wave Technologies delivered exceptional structured cabling for our entire building. Their team was professional, on-time, and the quality exceeded our expectations.",
    name: "Ahmed Al Mansouri",
    title: "Project Manager",
    company: "MABC Building Contracting LLC",
  },
  {
    id: "t2",
    quote:
      "We partnered with Ultra for our CCTV and access control systems across multiple sites. Their expertise in security infrastructure is unmatched in Dubai.",
    name: "Fatima Hassan",
    title: "Facilities Director",
    company: "Emaar Properties",
  },
  {
    id: "t3",
    quote:
      "The home automation system Ultra installed transformed our apartment. Smart lighting, thermostats, and security — all seamlessly integrated. Highly recommended.",
    name: "Karim Nasser",
    title: "Homeowner",
    company: "Executive Towers, Dubai",
  },
];
