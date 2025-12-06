"use client";

import { useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

const Item = ({ question, answer, isOpen, setIsOpen }) => {
  const accordion = useRef(null);

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
        <span className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}>
          {question}
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
        <div className="pb-5 leading-relaxed">{answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      question: t('faqWhoCanJoin', language),
      answer: t('faqWhoCanJoinAnswer', language),
    },
    {
      question: t('faqHowToJoin', language),
      answer: (
        <span>
          {t('faqHowToJoinAnswerPart1', language)}{" "}
          <a href="mailto:ibcmanagement@outlook.com" className="text-primary underline">
            ibcmanagement@outlook.com
          </a>
          . {t('faqHowToJoinAnswerPart2', language)}
        </span>
      ),
    },
    {
      question: t('faqHowOften', language),
      answer: t('faqHowOftenAnswer', language),
    },
    {
      question: t('faqAreFree', language),
      answer: t('faqAreFreeAnswer', language),
    },
    {
      question: t('faqBringFriend', language),
      answer: t('faqBringFriendAnswer', language),
    },
    {
      question: t('faqLanguages', language),
      answer: t('faqLanguagesAnswer', language),
    },
    {
      question: t('faqChildrenPets', language),
      answer: t('faqChildrenPetsAnswer', language),
    },
    {
      question: t('faqWhatToBring', language),
      answer: t('faqWhatToBringAnswer', language),
    },
    {
      question: t('faqRain', language),
      answer: t('faqRainAnswer', language),
    },
    {
      question: t('faqSupport', language),
      answer: t('faqSupportAnswer', language),
    },
    {
      question: t('faqAnotherQuestion', language),
      answer: (
        <span>
          {t('faqAnotherQuestionAnswerPart1', language)}{" "}
          <a href="mailto:ibcmanagement@outlook.com" className="text-primary underline">
            ibcmanagement@outlook.com
          </a>
          .
        </span>
      ),
    },
  ];

  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">{t('faq', language)}</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            {t('frequentlyAsked', language)}
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              setIsOpen={(open) => setOpenIndex(open ? i : null)}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;