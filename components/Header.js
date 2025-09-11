"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  });

  return (
    <header className="bg-base-100 border-b border-base-content/10 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20" aria-label="Global">
          <div className="flex items-center">
            <Link
              className="flex items-center gap-3 shrink-0 group"
              href="/"
              title={`${config.appName} homepage`}
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                placeholder="blur"
                priority={true}
                width={40}
                height={40}
              />
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

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="px-4 py-2 rounded-lg text-base-content/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                title={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <ThemeSwitch />
            <div className="w-px h-6 bg-base-content/20"></div>
            <Link 
              href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Interest" 
              className="btn btn-primary btn-sm font-medium"
            >
              Partner with Us
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitch />
            <button
              type="button"
              className="p-2 rounded-lg hover:bg-base-content/10 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block h-0.5 w-6 bg-base-content transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                <span className={`block h-0.5 w-6 bg-base-content transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-base-content transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-content/10">
          <div className="px-6 py-4 space-y-4">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="block px-4 py-2 text-base-content hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                title={link.label}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-base-content/10">
              <Link
                href="mailto:ibcmanagement@outlook.com?subject=Partnership%20Interest"
                className="btn btn-primary btn-block"
                onClick={() => setIsOpen(false)}
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;