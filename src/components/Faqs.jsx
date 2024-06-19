import React, { useState } from "react";

export default function Faq(theme) {
  const faqData = [
    {
      question: "Where should we go to celebrate?",
      answer:
        "Our venue, The Stakeout, is located at 101 Stake Out Dr, Ranchos De Taos, NM 87557. More information coming soon regarding transportation to the venue.",
    },
    {
      question: "Where should we go to celebrate?",
      answer: (
        <>
          "Our venue, The Stakeout, is located at 101 Stake Out Dr, Ranchos De
          Taos, NM 87557. More information regarding{" "}
          <a
            className="underline bg-white text-black py-2 rounded-full px-3"
            href="../blog/transportation"
          >
            transportation
          </a>{" "}
          coming soon.
        </>
      ),
    },

    {
      question: "What time should I arrive to the ceremony?",
      answer: "Coming Soon",
    },
    {
      question: "What time does the party end?",
      answer: "All guests are required to be off the property by midnight.",
    },
    {
      question: "What’s the vibe for attire?",
      answer: (
        <>
          Thank you for inquiring! Check out our{" "}
          <a
            className="underline bg-white text-black py-2 rounded-full px-3"
            href="../blog/outfit"
          >
            blog
          </a>{" "}
          for details and inspiration.
        </>
      ),
    },
    {
      question: "Will the wedding be outdoors?",
      answer:
        "Yes, the ceremony will take place outdoors. The reception location has indoor and outdoor spaces, with most of the evening taking place indoors. Please keep this in mind when selecting your attire for the event.",
    },
    {
      question: "How chilly will it get?",
      answer:
        "Taos is located in northern New Mexico, 13,000 feet above sea level. April weather starts to turn towards spring. You can expect the sun to be very strong during the day (65-70). The temperatures drop dramatically in the evening (35-40). Please plan your attire accordingly. We recommend a very warm coat! If you are cold, please consider joining us on the dance floor.",
    },
    {
      question: "Can I bring a plus-one?",
      answer:
        "We unfortunately cannot accommodate additional guests. Due to limited capacity, we can only allow the people named on your invitation. Your invitation will be made out to “{Your Name} & Guest” if a plus one has been given to you.",
    },
    {
      question: "What should I bring?",
      answer:
        "A coat for the evening, and comfortable shoes for dancing. Andie is a stationary enthusiast. A card for the bride and groom would be greatly appreciated. We would also recommend bringing some cash to tip the bartenders.",
    },
    {
      question: "Are children welcome?",
      answer:
        "YES! Your children are more than welcome! Please note, they are strongly discouraged if they will require you to leave the dancefloor earlier than 10pm. Children should also follow the described dress code. They will look back on their outfit with pride! Your invitation will be made out to “The {Your Last Name} Family” referencing your children have been invited.",
    },
    {
      question: "What should I do if I can’t make it?",
      answer:
        "You will be missed! If you cannot make it, please let us know as soon as possible by RSVP-ing “no” so we can plan accordingly.",
    },
    {
      question: "What if I do not RSVP in time?",
      answer:
        "We will miss celebrating with you! We require you and any additional invited guests to RSVP by January 15th, 2025. Any RSVPs received after this date will be marked as “no” so please don’t RSVP late!",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, parking is available on-site at the venue.",
    },
    {
      question: "Is there transportation to and from the venue?",
      answer: "Coming Soon",
    },
    {
      question: "What’s the menu?",
      answer:
        "The chef at The Stakeout is from the south. We are drawing inspiration from her experience and have decided on a southern focused menu. There will be meat, gumbo, veggie options and bread!!!",
    },
    {
      question: "I have a dietary restriction, what should I do?",
      answer:
        "There will be food options for vegetarian and gluten free diets. Please reach out to Andie or Riley to share any additional dietary restrictions so we can plan accordingly.",
    },
    {
      question: "Do you have a registry?",
      answer: (
        <>
          We do! You can find our registry{" "}
          <a
            className="underline bg-white text-black py-2 rounded-full px-3"
            href="  https://www.zola.com/registry/rileyandandie"
          >
            here.
          </a>{" "}
        </>
      ),
    },
    {
      question: "What should I do and see in New Mexico?",
      answer: "Coming Soon",
    },
  ];

  const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className=" border-b border-gray-200">
      <button
        className="w-full flex flex-row justify-between text-left py-3 px-4 cursor-pointer focus:outline-none"
        onClick={onClick}
      >
        {question}
        <div className="">{isOpen ? "-" : "+"}</div>
      </button>
      {isOpen && (
        <p className="p-4 mb-4 bg-[var(--accent)] text-white rounded-lg ">
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
      <div class="p-8 w-full flex flex-row items-center justify-center rounded-full align-center">
        <img
          src="/logo-wht.svg"
          alt="Taos, New Mexico"
          className="max-w-[400px] p-4 w-full h-auto"
        />
      </div>
      <Accordion items={faqData} />
      <div className="flex flex-col items-center align-center justify-end"></div>
    </div>
  );
}
