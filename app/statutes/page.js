"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/translations";

const statutes = [
  { num: 1, icon: "📋" },
  { num: 2, icon: "🎯" },
  { num: 3, icon: "📅" },
  { num: 4, icon: "👤" },
  { num: 5, icon: "🚪" },
  { num: 6, icon: "✓" },
  { num: 7, icon: "👥" },
  { num: 8, icon: "💶" },
  { num: 9, icon: "📝" },
  { num: 10, icon: "⚖️" },
  { num: 11, icon: "👔" },
  { num: 12, icon: "📊" },
  { num: 13, icon: "🗳️" },
  { num: 14, icon: "💼" },
  { num: 15, icon: "📋" },
  { num: 16, icon: "📢" },
  { num: 17, icon: "✅" },
  { num: 18, icon: "🔚" },
];

const Statutes = () => {
  const { language } = useLanguage();
  
  return (
    <>
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <main className="max-w-4xl mx-auto">
        <div className="p-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
              {t('statutesTitle', language)}
            </h1>
            <p className="text-lg text-base-content/80">
              {t('statutesSubtitle', language)}
            </p>
          </div>

          <div className="bg-base-200 rounded-2xl p-8 md:p-10 shadow-lg mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📜</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  {t('legalRegistration', language)}
                </h2>
                <p className="text-base-content/80 mt-1">{t('registeredAssociation', language)}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-base-content/80">
              <div>
                <h3 className="font-bold text-base-content mb-2">{t('officialName', language)}</h3>
                <p className="text-lg">International Berlin Community (IBC) e.V.</p>
              </div>
              
              <div>
                <h3 className="font-bold text-base-content mb-2">{t('registrationNumber', language)}</h3>
                <p className="text-lg">VR 41380 B</p>
              </div>
              
              <div>
                <h3 className="font-bold text-base-content mb-2">{t('registrationCourt', language)}</h3>
                <p className="text-lg">Amtsgericht Charlottenburg</p>
              </div>
              
              <div>
                <h3 className="font-bold text-base-content mb-2">{t('currentLeadership', language)}</h3>
                <p className="text-lg">{t('president', language)}: Lê Phan Thanh Phương<br/>{t('vicePresident', language)}: Adam Miko</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {statutes.map((statute) => (
              <section key={statute.num} className="p-6 md:p-8 bg-base-200 rounded-2xl shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl">{statute.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                      {t(`statute${statute.num}Title`, language)}
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-base-content/80">
                      {t(`statute${statute.num}Text`, language)}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-12 p-8 bg-primary/10 rounded-2xl border border-primary/20">
            <div className="flex items-start gap-4">
              <span className="text-3xl">📧</span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  {t('contactKontakt', language)}
                </h3>
                <div className="space-y-3 text-base-content/80">
                  <p>
                    <span className="font-semibold text-base-content">{t('email', language)}:</span>{' '}
                    <a href="mailto:ibcmanagement@outlook.com" className="text-primary hover:underline">
                      ibcmanagement@outlook.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-base-content">{t('registrationOffice', language)}:</span><br/>
                    Amtsgericht Charlottenburg<br/>
                    Amtsgerichtsplatz 1, 14057 Berlin
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="mailto:ibcmanagement@outlook.com?subject=Satzung%20Question" 
              className="btn btn-primary"
            >
              {t('questionsContact', language)}
            </a>
          </div>

          <p className="text-base text-base-content/60 text-center mt-12">
            {t('lastUpdated', language)}: Oktober 2024
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Statutes;