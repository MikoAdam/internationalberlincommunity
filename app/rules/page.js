"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/translations";

const Rules = () => {
  const { language } = useLanguage();

  const rules = [
    { icon: "🛡️", titleKey: "rule1Title", textKey: "rule1Text" },
    { icon: "🤝", titleKey: "rule2Title", textKey: "rule2Text" },
    { icon: "📢", titleKey: "rule3Title", textKey: "rule3Text" },
    { icon: "🚫", titleKey: "rule4Title", textKey: "rule4Text" },
    { icon: "💝", titleKey: "rule5Title", textKey: "rule5Text" },
    { icon: "🚨", titleKey: "rule6Title", textKey: "rule6Text" },
    { icon: "📝", titleKey: "rule7Title", textKey: "rule7Text" },
    { icon: "🔒", titleKey: "rule8Title", textKey: "rule8Text" },
    { icon: "📅", titleKey: "rule9Title", textKey: "rule9Text" },
    { icon: "🌍", titleKey: "rule10Title", textKey: "rule10Text" },
    { icon: "🍺", titleKey: "rule11Title", textKey: "rule11Text" },
    { icon: "📸", titleKey: "rule12Title", textKey: "rule12Text" },
    { icon: "⚖️", titleKey: "rule13Title", textKey: "rule13Text" },
    { icon: "🌱", titleKey: "rule14Title", textKey: "rule14Text" },
  ];

  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <main className="max-w-4xl mx-auto">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold pb-8 mb-6 text-base-content">
            {t('communityRulesFor', language)} {config.appName}
          </h1>

          {rules.map((rule, index) => (
            <section key={index} className="mb-6 p-6 bg-base-200 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{rule.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {t(rule.titleKey, language)}
                  </h2>
                  <p className="text-lg leading-relaxed text-base-content">
                    {t(rule.textKey, language)}
                  </p>
                </div>
              </div>
            </section>
          ))}

          <div className="mt-12 p-6 bg-primary/10 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-4">
              {t('questionsAboutRules', language)}
            </h3>
            <p className="text-base-content mb-4">
              {t('questionsAboutRulesText', language)}
            </p>
            <a 
              href="mailto:ibcmanagement@outlook.com?subject=Community%20Rules%20Question" 
              className="btn btn-primary"
            >
              {t('contactUs', language)}
            </a>
          </div>

          <p className="text-lg opacity-70 text-center mt-12">
            {t('lastUpdated', language)}: December 2024
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Rules;