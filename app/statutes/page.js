"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { t } from "@/lib/translations";

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
            {/* § 1 */}
            <section className="p-6 md:p-8 bg-base-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl md:text-4xl">📋</span>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">{t('statute1Title', language)}</h2>
                  <div className="space-y-3">
                    <p className="text-base md:text-lg leading-relaxed text-base-content/80">{t('statute1Para1', language)}</p>
                    <p className="text-base md:text-lg leading-relaxed text-base-content/80">{t('statute1Para2', language)}</p>
                    <p className="text-base md:text-lg leading-relaxed text-base-content/80">{t('statute1Para3', language)}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* § 2 */}
            <section className="p-6 md:p-8 bg-base-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl md:text-4xl">🎯</span>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">{t('statute2Title', language)}</h2>
                  <div className="space-y-3">
                    {[1,2,3,4,5,6,7,8].map(i => (
                      <p key={i} className="text-base md:text-lg leading-relaxed text-base-content/80">{t(`statute2Para${i}`, language)}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* § 3 - COMPLETE VERSION WITH ALL SUBSECTIONS */}
            <section className="p-6 md:p-8 bg-base-200 rounded-2xl shadow-md">
              <div className="flex items-start gap-4">
                <span className="text-3xl md:text-4xl">📅</span>
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">{t('statute3Title', language)}</h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-base-content/80">{t('statute3Para1', language)}</p>
                    
                    <p className="text-base md:text-lg leading-relaxed text-base-content/80 font-semibold mt-4">{t('statute3Intro', language)}</p>
                    
                    {/* Section 1 */}
                    <div className="ml-4 space-y-3 mt-4">
                      <h3 className="text-lg font-bold text-primary">{t('statute3Section1Title', language)}</h3>
                      
                      <div className="ml-4 space-y-2">
                        <p className="font-semibold text-base-content">{t('statute3Section1Sub1Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section1Sub1Point1', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section1Sub1Point2', language)}</p>
                        <p className="text-base-content/70 italic text-sm">{t('statute3Section1Sub1Point3', language)}</p>
                        
                        <p className="font-semibold text-base-content mt-3">{t('statute3Section1Sub2Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section1Sub2Point1', language)}</p>
                        
                        <p className="font-semibold text-base-content mt-3">{t('statute3Section1Sub3Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section1Sub3Point1', language)}</p>
                      </div>
                    </div>
                    
                    {/* Section 2 */}
                    <div className="ml-4 space-y-3 mt-4">
                      <h3 className="text-lg font-bold text-primary">{t('statute3Section2Title', language)}</h3>
                      
                      <div className="ml-4 space-y-2">
                        <p className="font-semibold text-base-content">{t('statute3Section2Sub1Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section2Sub1Point1', language)}</p>
                        <p className="text-base-content/70 italic text-sm">{t('statute3Section2Sub1Point2', language)}</p>
                        
                        <p className="font-semibold text-base-content mt-3">{t('statute3Section2Sub2Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section2Sub2Point1', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section2Sub2Point2', language)}</p>
                        <p className="text-base-content/70 italic text-sm">{t('statute3Section2Sub2Point3', language)}</p>
                      </div>
                    </div>
                    
                    {/* Section 3 */}
                    <div className="ml-4 space-y-3 mt-4">
                      <h3 className="text-lg font-bold text-primary">{t('statute3Section3Title', language)}</h3>
                      
                      <div className="ml-4 space-y-2">
                        <p className="font-semibold text-base-content">{t('statute3Section3Sub1Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section3Sub1Point1', language)}</p>
                        <p className="text-base-content/70 italic text-sm">{t('statute3Section3Sub1Point2', language)}</p>
                        
                        <p className="font-semibold text-base-content mt-3">{t('statute3Section3Sub2Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section3Sub2Point1', language)}</p>
                        <p className="text-base-content/70 italic text-sm">{t('statute3Section3Sub2Point2', language)}</p>
                      </div>
                    </div>
                    
                    {/* Section 4 */}
                    <div className="ml-4 space-y-3 mt-4">
                      <h3 className="text-lg font-bold text-primary">{t('statute3Section4Title', language)}</h3>
                      
                      <div className="ml-4 space-y-2">
                        <p className="font-semibold text-base-content">{t('statute3Section4Sub1Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section4Sub1Point1', language)}</p>
                        <ul className="list-disc ml-6 space-y-1">
                          <li className="text-base-content/80">{t('statute3Section4Sub1Point2', language)}</li>
                          <li className="text-base-content/80">{t('statute3Section4Sub1Point3', language)}</li>
                          <li className="text-base-content/80">{t('statute3Section4Sub1Point4', language)}</li>
                        </ul>
                        
                        <p className="font-semibold text-base-content mt-3">{t('statute3Section4Sub2Title', language)}</p>
                        <p className="text-base-content/80">{t('statute3Section4Sub2Point1', language)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* § 4-18 */}
            {[
              { num: 4, icon: "👤", paras: 2 },
              { num: 5, icon: "🚪", paras: 2 },
              { num: 6, icon: "✓", paras: 3 },
              { num: 7, icon: "👥", paras: 4 },
              { num: 8, icon: "💶", paras: 3 },
              { num: 9, icon: "📝", paras: 1 },
              { num: 10, icon: "⚖️", paras: 2 },
              { num: 11, icon: "👔", paras: 3 },
              { num: 12, icon: "📊", paras: 5 },
              { num: 13, icon: "🗳️", paras: 2 },
              { num: 14, icon: "💼", paras: 2 },
              { num: 15, icon: "📋", paras: 6 },
              { num: 16, icon: "📢", paras: 3 },
              { num: 17, icon: "✅", paras: 4 },
              { num: 18, icon: "🔚", paras: 4 },
            ].map((statute) => (
              <section key={statute.num} className="p-6 md:p-8 bg-base-200 rounded-2xl shadow-md">
                <div className="flex items-start gap-4">
                  <span className="text-3xl md:text-4xl">{statute.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                      {t(`statute${statute.num}Title`, language)}
                    </h2>
                    <div className="space-y-3">
                      {Array.from({ length: statute.paras }, (_, i) => (
                        <p key={i} className="text-base md:text-lg leading-relaxed text-base-content/80">
                          {t(`statute${statute.num}Para${i + 1}`, language)}
                        </p>
                      ))}
                    </div>
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