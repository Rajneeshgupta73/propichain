// src/components/Accordion.js
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray">
      <button
        className="w-full text-left py-5 px-6 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-2xl 2xl:text-3xl font-medium">{title}</span>
        <span className="text-2xl">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pt-2 pb-6 max-w-2xl">{content}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const accordionData = [
    {
      title: '01. How can I buy with connect wallet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      title: '02. How can I buy with a login?',
      content: 'This is the content of the second accordion item.',
    },
    {
      title: '03. What security measure does your platform offer?',
      content: 'This is the content of the third accordion item.',
    },
    {
        title: '04. What security measure does your platform offer?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
  ];

  return (
    <div className="px-20 mt-10 mb-40">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Faq;
