export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "What areas do you serve?",
    answer:
      "We serve all of Dubai, including Business Bay, Dubai Marina, Downtown Dubai, Al Barsha, and surrounding areas. We can also arrange services across the UAE for larger projects.",
  },
  {
    id: "f2",
    question: "Do you provide free consultations?",
    answer:
      "Yes, we offer free on-site consultations to assess your needs and provide a tailored solution with a transparent quote. Contact us to schedule a visit.",
  },
  {
    id: "f3",
    question: "What is the typical timeline for a cabling project?",
    answer:
      "Timelines vary by scope. A standard office cabling project typically takes 3-5 days, while larger multi-floor installations can take 1-3 weeks. We always provide a timeline during the consultation.",
  },
  {
    id: "f4",
    question: "Do you work with Etisalat and DU approved infrastructure?",
    answer:
      "Absolutely. All our structured cabling installations follow Etisalat and DU guidelines. We handle approvals for ISP, GPON, FTTH, and OSP infrastructure.",
  },
  {
    id: "f5",
    question: "What is an AMC and do I need one?",
    answer:
      "An Annual Maintenance Contract (AMC) ensures your IT infrastructure, CCTV systems, and automation equipment receive regular maintenance and priority support. It's recommended for businesses that rely on uninterrupted operations.",
  },
];
