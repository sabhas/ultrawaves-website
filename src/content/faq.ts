export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "f1",
    question: "What areas do you serve?",
    answer: "[Add your answer about service areas here]",
  },
  {
    id: "f2",
    question: "Do you provide free consultations?",
    answer: "[Add your answer about consultations here]",
  },
  {
    id: "f3",
    question: "What is the typical timeline for a cabling project?",
    answer: "[Add your answer about project timelines here]",
  },
  {
    id: "f4",
    question: "Do you work with Etisalat and DU approved infrastructure?",
    answer: "[Add your answer about Etisalat/DU compliance here]",
  },
  {
    id: "f5",
    question: "What is an AMC and do I need one?",
    answer: "[Add your answer about AMC services here]",
  },
];
