"use client";

import { useRef, useState } from "react";

const faqList = [
  {
    question: "Who can join?",
    answer: (
      <p>
        Everyone is welcome! Regardless of your nationality, religion, gender, or background, our community is open to all.
      </p>
    ),
  },
  {
    question: "How do I join the community?",
    answer: (
      <p>
        Simply request to join our Facebook group or contact us directly via email at{" "}
        <a
          href="mailto:ibcmanagement@outlook.com"
          className="text-primary underline">
          ibcmanagement@outlook.com
        </a>
        . It’s easy and free!
      </p>
    ),
  },
  {
    question: "How often are events organized?",
    answer: (
      <p>
        We host events every week, so there’s always something exciting happening. Check out our Facebook group or website for updates!
      </p>
    ),
  },
  {
    question: "Are the events free to attend?",
    answer: (
      <p>
        Most of our events are free, but for activities like kayaking or museum visits, you may need to pay for rentals or entrance fees.
      </p>
    ),
  },
  {
    question: "Can I bring a friend to the events?",
    answer: (
      <p>
        Absolutely! Feel free to invite friends to join. The more, the merrier!
      </p>
    ),
  },
  {
    question: "What languages are spoken at the events?",
    answer: (
      <p>
        Most events are conducted in English, but many of our organizers also speak some level of German. Language should never be a barrier to joining!
      </p>
    ),
  },
  {
    question: "Are children or pets allowed at events?",
    answer: (
      <p>
        It depends on the event. Most are family-friendly, but please check the event details to confirm if children or pets are welcome.
      </p>
    ),
  },
  {
    question: "What should I bring to an event?",
    answer: (
      <p>
        This varies depending on the activity. For hikes, bring comfortable shoes and water. For potlucks, bring a dish to share. Event-specific details will be shared beforehand.
      </p>
    ),
  },
  {
    question: "What happens if it rains on the day of an outdoor event?",
    answer: (
      <p>
        If the event is outdoors, we might adapt by gathering somewhere indoors instead of canceling. Complete cancellations are very rare, and we’ll always notify participants in advance.
      </p>
    ),
  },
  {
    question: "How can I support IBC?",
    answer: (
      <p>
        You can support us by attending events, spreading the word, or volunteering your time. Donations are currently not possible, but your participation helps us thrive!
      </p>
    ),
  },
  {
    question: "I have another question.",
    answer: (
      <p>
        Cool! Write in our community group or contact us directly at{" "}
        <a
          href="mailto:ibcmanagement@outlook.com"
          className="text-primary underline">
          ibcmanagement@outlook.com
        </a>
        .
      </p>
    ),
  },
];


const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
