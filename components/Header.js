"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/icon.png";
import config from "@/config";
import SocialMediaButtons from "./SocialMediaButtons";

const links = [
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/impressum",
    label: "Impressum",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/statutes",
    label: "Statutes",
  },
  {
    href: "/rules",
    label: "Rules",
  },
];


const cta = <SocialMediaButtons />;

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-base-200">
      <div className="max-w-7xl mx-auto px-8">
        <nav
          className="container flex items-center justify-start py-4 mx-auto"
          aria-label="Global"
        >
          {/* Logo Section */}
          <div className="flex items-center lg:flex-1">
            <Link
              className="flex items-center gap-2 shrink-0"
              href="/"
              title={`${config.appName} homepage`}
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg block lg:hidden">{config.appNameShort}</span>
              <span className="font-extrabold text-lg hidden lg:block">{config.appName}</span>
            </Link>
          </div>

          {/* Desktop Links, and CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="link link-hover"
                title={link.label}
              >
                {link.label}
              </Link>
            ))}

            {cta}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-4">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-base-content"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-base-200 sm:max-w-sm sm:ring-1 sm:ring-neutral/10 transform origin-right transition ease-in-out duration-300`}>
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-2 shrink-0"
              title={`${config.appName} homepage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
              />
              <span className="font-extrabold text-lg lg:hidden">{config.appNameShort}</span>
              <span className="font-extrabold text-lg hidden lg:block">{config.appName}</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link link-hover"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col items-center mb-4">{cta}</div>
            <div className="flex justify-center">
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
