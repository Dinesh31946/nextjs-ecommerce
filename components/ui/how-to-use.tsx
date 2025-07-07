"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-gray-200 bg-white shadow-md transition">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 transition-transform duration-300" />
        )}
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
