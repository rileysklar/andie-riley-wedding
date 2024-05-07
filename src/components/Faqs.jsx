import React, { useState } from "react";

export default function Faq() {
  const faqData = [
    {
      question: "Who is tying the knot?",
      answer:
        "Andie Goc from the breezy Bay Area and Riley Sklar from the vibrant city of Austin are joining forces in matrimony. Get ready for a coast-to-coast celebration!",
    },
    {
      question: "When's the big day?",
      answer:
        "Mark your calendars! The love fest is set for April 14, 2025. Don’t be late!",
    },
    {
      question: "Where should we go to celebrate?",
      answer:
        "The party will be at The Stakeout in Taos. It's the perfect spot to capture our wild spirits and love for breathtaking views!",
    },
    {
      question: "What's the vibe for attire?",
      answer:
        "Think vibrant and colorful, inspired by the stunning Southwest. It’s all about bright patterns and fun under the sun!",
    },
    {
      question: "How chilly will it get?",
      answer:
        "It's an outdoor affair in April, so expect it to be nippy. Wrap up warm so you can party all night without turning into an ice cube!",
    },
    {
      question: "Do you have a registry?",
      answer:
        "We're lucky enough to have everything we need for our next adventure—except maybe a map for Riley! Instead of traditional gifts, we'd love if you could help make our dream honeymoon come true. Details for our honeymoon fund and RSVP info can be found on our site, along with the saga of our love story!",
    },
    {
      question: "Can I bring a plus-one?",
      answer:
        "Got a special someone or a stellar dance partner? Please let us know in your RSVP if you’re bringing a plus-one so we can save them a seat!",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, there’s ample parking at The Stakeout. Just follow the signs and maybe a couple of bunnies. They know the best spots!",
    },
    {
      question: "What's on the menu?",
      answer:
        "Prepare for a culinary adventure with local flavors and festive delights. We'll cater to all diets, so let us know your preferences and we'll make sure you're more than satisfied!",
    },
    {
      question: "What should I do if I arrive early?",
      answer:
        "Early bird gets the worm! Or in this case, the best views of Taos. Drop your bags and explore the town, or join some of us for a pre-wedding gathering. Details to follow in our updates!",
    },
    {
      question: "Will there be dancing?",
      answer:
        "Absolutely! After we say ‘I do,’ it’s time to dance like nobody’s watching. Get ready to bust some moves on the dance floor with us!",
    },
  ];

  const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-3 px-4 cursor-pointer focus:outline-none"
        onClick={onClick}
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <p className="p-4 mb-4 bg-[var(--accent)] rounded-lg font-sans ">
          {answer}
        </p>
      )}
    </div>
  );

  const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
      <div className="w-full max-w-2xl mx-auto mt-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between p-8">
      <Accordion items={faqData} />
      <div className="flex flex-col items-center align-center justify-end"></div>
    </div>
  );
}
