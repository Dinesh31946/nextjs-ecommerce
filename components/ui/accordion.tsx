"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react"; // You can use any icon library

interface AccordionProps {
  title: string;
  description: string;
}

export default function Accordion({ title, description }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-10 my-8">
      <h2 className="text-3xl font-bold text-center mb-10">How to use?</h2>

      <div className="bg-gray-100 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <div
          className="flex items-center justify-between px-6 py-4 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <ChevronDown
            className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
        {open && (
          <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
