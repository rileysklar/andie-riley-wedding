import React, { useState } from "react";

export default function Faq(theme) {
  const faqData = [
    {
      question: "Where should we go to celebrate?",
      answer:
        "Our venue, The Stakeout, is located at 101 Stake Out Dr, Ranchos De Taos, NM 87557. More information will be shared regarding transportation to the venue.",
    },
    {
      question: "What time should I arrive to the ceremony?",
      answer: "TBD",
    },
    {
      question: "What time does the party end?",
      answer: "All guests are required to be off the property by midnight.",
    },
    {
      question: "What’s the vibe for attire?",
      answer:
        "We want you to feel glamorous while celebrating with us in the high desert. Imagine yourself stepping into a modern-day '60s or '70s disco, but the disco sits atop Outlaw Hill in Taos, NM. The dress code is formal with colors and textures that radiate elegance and fun. We encourage bold, vibrant colors and bright jewel tones to capture the magic of the evening. Picture yourself in your favorite winter coat, perhaps a fur gem that’s been tucked away in your closet. Feathers and velvet are most certainly welcomed to enhance the festive, retro vibe. Dress to impress and get ready to dance the night away under the desert stars! Looking for inspiration? INSERT PINTREST LINK",
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
      answer: "We do! You can find our registry here – INSERT LINK",
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
        <img src="/logo.svg" alt="Taos, New Mexico" className="max-w-[400px]" />
      </div>
      <Accordion items={faqData} />
      <div className="flex flex-col items-center align-center justify-end"></div>
    </div>
  );
}
