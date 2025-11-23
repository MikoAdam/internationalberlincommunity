"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check URL parameter first
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      
      if (urlLang === 'de' || urlLang === 'en') {
        setLanguage(urlLang);
        localStorage.setItem('language', urlLang);
      } else {
        // Fall back to localStorage
        const saved = localStorage.getItem('language') || 'en';
        setLanguage(saved);
      }
    }
  }, []);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Update URL without page reload
    if (typeof window !== 'undefined') {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('lang', lang);
      window.history.pushState({}, '', newUrl);
    }
  };

  // Don't render children until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};