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

  const links = [
  { href: "/about", label: t('aboutUs', language) },
  { href: "/programs", label: t('programs', language) },
  { href: "/team", label: t('team', language) },
  { href: "/rules", label: t('communityRules', language) },
  { href: "/statutes", label: t('legalInfo', language) },
];

  return (
    <header className="bg-base-100 border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link className="flex items-center gap-2 md:gap-3" href="/">
            <Image src={logo} alt={`${config.appName} logo`} className="w-8 h-8 md:w-10 md:h-10" width={40} height={40} />
            <span className="font-bold text-sm sm:text-lg md:text-xl text-base-content">
              {config.appName}
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-base-content/80 hover:text-primary font-medium text-sm">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded ${language === 'en' ? 'text-primary' : 'text-base-content/60'}`}
              >
                EN
              </button>
              <span className="text-base-content/40">|</span>
              <button
                onClick={() => switchLanguage('de')}
                className={`px-2 py-1 text-xs font-medium rounded ${language === 'de' ? 'text-primary' : 'text-base-content/60'}`}
              >
                DE
              </button>
            </div>
            <ThemeSwitch />
            <Link href="mailto:ibcmanagement@outlook.com" className="btn btn-primary text-sm px-4 py-2">
              {t('contactUs', language)}
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <div className="flex items-center gap-1">
              <button
                onClick={() => switchLanguage('en')}
                className={`px-1 text-xs ${language === 'en' ? 'text-primary' : 'text-base-content/60'}`}
              >
                EN
              </button>
              <span className="text-base-content/40">|</span>
              <button
                onClick={() => switchLanguage('de')}
                className={`px-1 text-xs ${language === 'de' ? 'text-primary' : 'text-base-content/60'}`}
              >
                DE
              </button>
            </div>
            <ThemeSwitch />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-base-content hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-content/10">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-base-content hover:text-primary hover:bg-primary/5 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-base-content/10">
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
      )}
    </header>
  );
};

export default Header;