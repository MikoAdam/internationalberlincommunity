"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import ThemeSwitch from "./ThemeSwitch";
import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, switchLanguage } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { href: "/about", label: t('aboutUs', language) },
    { href: "/programs", label: t('programs', language) },
    { href: "/team", label: t('team', language) },
    { href: "/rules", label: t('communityRules', language) },
    { href: "/statutes", label: t('legalInfo', language) },
  ];

  return (
    <header className="bg-base-100 border-b border-base-content/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" href="/">
            <Image src={logo} alt={`${config.appName} logo`} className="w-8 h-8 md:w-10 md:h-10" width={40} height={40} priority />
            <span className="font-bold text-sm sm:text-lg md:text-xl text-base-content">
              {config.appName}
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-base-content/80 hover:text-primary font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <div className="flex items-center gap-1 bg-base-200 rounded-full px-3 py-1.5">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 ${
                  language === 'en' ? 'text-primary bg-base-100 shadow-sm' : 'text-base-content/60 hover:text-base-content hover:bg-base-100/50'
                }`}
              >
                EN
              </button>
              <span className="text-base-content/40 text-xs">|</span>
              <button
                onClick={() => switchLanguage('de')}
                className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 ${
                  language === 'de' ? 'text-primary bg-base-100 shadow-sm' : 'text-base-content/60 hover:text-base-content hover:bg-base-100/50'
                }`}
              >
                DE
              </button>
            </div>
            <ThemeSwitch />
            <Link href="mailto:ibcmanagement@outlook.com" className="btn btn-primary text-sm px-4 py-2">
              {t('contactUs', language)}
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex items-center gap-1 bg-base-200 rounded-full px-2 py-1">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-1.5 py-0.5 text-xs font-medium rounded transition-all ${language === 'en' ? 'text-primary bg-base-100' : 'text-base-content/60'}`}
              >
                EN
              </button>
              <span className="text-base-content/40 text-xs">|</span>
              <button
                onClick={() => switchLanguage('de')}
                className={`px-1.5 py-0.5 text-xs font-medium rounded transition-all ${language === 'de' ? 'text-primary bg-base-100' : 'text-base-content/60'}`}
              >
                DE
              </button>
            </div>
            <ThemeSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hamburger-btn p-2 text-base-content hover:text-primary transition-colors rounded-md hover:bg-base-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" style={{ top: '64px' }}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="mobile-menu relative bg-base-100 border-b border-base-content/10 shadow-2xl">
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base-content hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-3 border-t border-base-content/10">
                <Link
                  href="mailto:ibcmanagement@outlook.com"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('contactUs', language)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;