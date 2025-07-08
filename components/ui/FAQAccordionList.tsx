"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

export default function FAQAccordionList({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-10 my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={faq._id} className="mb-4">
          <div
            className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-t px-6 py-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-gray-800">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </div>
          {openIndex === index && (
            <div className="bg-white border border-gray-200 border-t-0 px-6 py-4 rounded-b text-gray-800 whitespace-pre-line">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
