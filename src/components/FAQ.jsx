import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I apply for a job?",
      answer: "You can search for a job and apply with one click after creating your profile."
    },
    {
      question: "How does the resume builder work?",
      answer: "Our resume builder lets you create a professional resume in minutes with easy templates."
    },
    {
      question: "Is this platform free to use?",
      answer: "Yes! Our platform is completely free for job seekers."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-blackOps text-center text-[#e3b341] mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#1E293B] p-2 rounded-lg shadow-lg text-white cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-[16px] md:text-lg">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {openIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
