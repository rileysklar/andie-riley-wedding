import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Faqs.css"; // Make sure to create this CSS file for the animations

export default function Faq(theme) {
  const faqData = [
    {
      question: "Where should we go to celebrate?",
      answer: (
        <>
          Our venue, Ivy Hall, is located at 1127 S St Mary's St, San Antonio,
          TX 78210.
        </>
      ),
    },

    {
      question: "What time should I arrive to the ceremony?",
      answer: "TBD",
    },
    {
      question: "What’s the vibe for attire?",
      answer: (
        <>
          We want you to feel glamorous while celebrating with us. Imagine
          yourself stepping into a modern-day hacienda adorned with disco balls,
          lanterns, bright florals, and eclectic dance music. The dress code is
          cocktail formal with colors and textures that radiate fun and your
          individual style. We encourage bold, vibrant colors and bright jewel
          tones to capture the magic of the evening. Feathers and velvet are
          most certainly welcomed to enhance the festive, party vibe. Dress to
          impress and get ready to dance the night away in the Lone Star State!
          Looking for inspiration? Check out our{" "}
          <a
            className="underline bg-white text-black py-2 rounded-full px-3"
            href="#"
          >
            Pinterest link
          </a>
          .
        </>
      ),
    },
    {
      question: "Will the wedding be outdoors?",
      answer: "Yes, the ceremony and reception will take place outdoors.",
    },
    {
      question: "What will the weather be like?",
      answer: "Coming Soon",
    },
    {
      question: "Can I bring a plus-one?",
      answer: (
        <>
          We unfortunately cannot accommodate additional guests. Due to limited
          capacity, we can only allow the people named on your invitation. Your
          invitation will be made out to “You & Guest” if a plus one has been
          given to you.
        </>
      ),
    },
    {
      question: "Are children welcome?",
      answer: (
        <>
          YES! Your children are more than welcome! Please note, they are
          strongly discouraged if they will require you to leave the dancefloor
          earlier than 10pm. Children should also follow the described dress
          code. Your invitation will be made out to “The Family” referencing
          your children have been invited.
        </>
      ),
    },
    {
      question: "What should I do if I can’t make it?",
      answer: (
        <>
          You will be missed! If you cannot make it, please let us know as soon
          as possible by RSVP-ing “no” so we can plan accordingly.
        </>
      ),
    },
    {
      question: "What if I do not RSVP in time?",
      answer: (
        <>
          We will miss celebrating with you! We require you and any additional
          invited guests to RSVP by March 15th, 2025. Any RSVPs received after
          this date will be marked as “no” so please don’t RSVP late!
        </>
      ),
    },
    {
      question: "Is there parking available?",
      answer:
        "There is ample street parking outside of the venue. There is no parking on-site.",
    },
    {
      question: "Is there transportation to and from the venue?",
      answer:
        "We will not be providing transportation and encourage you to use Lyft or Uber.",
    },
    {
      question: "I have a dietary restriction, what should I do?",
      answer: (
        <>
          There will be food options for vegetarian and gluten-free diets.
          Please reach out to Andie or Riley to share any additional dietary
          restrictions so we can plan accordingly.
        </>
      ),
    },
    {
      question: "Do you have a registry?",
      answer: (
        <>
          We do! You can find our registry{" "}
          <a
            className="underline bg-white text-black py-2 rounded-full px-3"
            href="#"
          >
            here.
          </a>
        </>
      ),
    },
  ];

  const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex flex-row justify-between text-left py-3 px-4 cursor-pointer focus:outline-none"
        onClick={onClick}
      >
        {question}
        <div>{isOpen ? "-" : "+"}</div>
      </button>
      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="accordion"
        unmountOnExit
      >
        <div>
          <p className="p-4 mb-4 bg-[var(--accent)] text-white rounded-lg">
            {answer}
          </p>
        </div>
      </CSSTransition>
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
      <div className="p-8 w-full flex flex-row items-center justify-center rounded-full align-center">
        {/* <img
          src="/logo-wht.svg"
          alt="Taos, New Mexico"
          className="max-w-[400px] p-4 w-full h-auto"
        /> */}
      </div>
      <Accordion items={faqData} />
      <div className="flex flex-col items-center align-center justify-end"></div>
    </div>
  );
}
