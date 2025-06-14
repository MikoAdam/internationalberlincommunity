"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import SocialMediaButtons from "./SocialMediaButtons";
import ThemeSwitch from "./ThemeSwitch";

const links = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/programs", 
    label: "Programs",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/rules",
    label: "Community Rules",
  },
  {
    href: "/statutes",
    label: "Legal Info",
  },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="bg-base-100/95 backdrop-blur-sm border-b border-base-300/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20" aria-label="Global">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link
                className="flex items-center gap-3 shrink-0 group"
                href="/"
                title={`${config.appName} homepage`}
              >
                <div className="relative">
                  <Image
                    src={logo}
                    alt={`${config.appName} logo`}
                    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                    placeholder="blur"
                    priority={true}
                    width={40}
                    height={40}
                  />
                  <div className="absolute inset-0 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </div>
                <div className="hidden sm:block">
                  <span className="font-bold text-xl text-base-content group-hover:text-primary transition-colors duration-300 lg:hidden">
                    {config.appNameShort}
                  </span>
                  <span className="font-bold text-xl text-base-content group-hover:text-primary transition-colors duration-300 hidden lg:block">
                    {config.appName}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-2">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="px-4 py-2 rounded-lg text-base-content/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium relative group"
                  title={link.label}
                >
                  {link.label}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </Link>
              ))}
            </div>

            {/* Desktop CTA & Theme */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <ThemeSwitch />
              <div className="w-px h-6 bg-base-300"></div>
              <SocialMediaButtons />
              <Link 
                href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Interest" 
                className="btn btn-primary btn-sm ml-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                Partner with Us
              </Link>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeSwitch />
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-base-200 transition-colors duration-200 relative"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Menu Panel */}
          <div className="mobile-menu-container fixed top-0 right-0 h-full w-full max-w-sm bg-base-100 shadow-2xl transform transition-transform duration-300 ease-out animate-slide-up">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-base-200">
                <Link
                  className="flex items-center gap-3 shrink-0"
                  title={`${config.appName} homepage`}
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src={logo}
                    alt={`${config.appName} logo`}
                    className="w-8 h-8"
                    placeholder="blur"
                    priority={true}
                    width={32}
                    height={32}
                  />
                  <span className="font-bold text-lg text-base-content">{config.appNameShort}</span>
                </Link>
                
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-base-200 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <nav className="space-y-2">
                  {links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-base-content hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium group"
                      title={link.label}
                      onClick={() => setIsOpen(false)}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/0 group-hover:bg-primary transition-colors duration-200"></div>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile Social Section */}
                <div className="mt-8 pt-6 border-t border-base-200">
                  <h3 className="text-sm font-semibold text-base-content/70 uppercase tracking-wide mb-4">
                    Connect with Us
                  </h3>
                  <div className="flex justify-center mb-6">
                    <SocialMediaButtons />
                  </div>
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-base-200 bg-base-50">
                <Link
                  href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Interest"
                  className="btn btn-primary btn-block shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="mr-2">
                    <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/>
                  </svg>
                  Partner with Us
                </Link>
                <p className="text-center text-xs text-base-content/50 mt-3">
                  Building bridges across cultures
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;