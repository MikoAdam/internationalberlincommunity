"use client";

import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";
import { useLanguage } from "./LanguageContext";
import { t } from "@/lib/translations";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex gap-2 items-center mb-4">
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base">
                {config.appName}
              </strong>
            </Link>
            <p className="text-sm text-base-content/80 mb-3">
              {config.appDescription}
            </p>
            <p className="text-xs text-base-content/60">
              © 2023 - {new Date().getFullYear()} <br />
              {t("allRightsReserved", language)}
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold text-base-content text-sm mb-3">
              {t("links", language).toUpperCase()}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/programs"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                {t("programs", language)}
              </Link>
              <Link
                href="/about"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                {t("aboutUs", language)}
              </Link>
              <Link
                href="/team"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                {t("team", language)}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <div className="font-semibold text-base-content text-sm mb-3">
              {t("legal", language).toUpperCase()}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/rules"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                {t("communityRules", language)}
              </Link>
              <Link
                href="/statutes"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                {t("legalInfo", language)}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-base-content text-sm mb-3">
              {t("contact", language).toUpperCase()}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://www.facebook.com/groups/internationalberlinhiking"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 256 256"
                  className="flex-shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M128 24a104 104 0 1 0 104 104A104.1 104.1 0 0 0 128 24m8 191.63V152h24a8 8 0 0 0 0-16h-24v-24a16 16 0 0 1 16-16h16a8 8 0 0 0 0-16h-16a32 32 0 0 0-32 32v24H96a8 8 0 0 0 0 16h24v63.63a88 88 0 1 1 16 0"
                  />
                </svg>
                Facebook
              </a>

              <a
                href="https://www.instagram.com/internationalberlincommunity/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
                Instagram
              </a>

              <a
                href="https://chat.whatsapp.com/KvFKTUWcWrd6lhff5YlIow"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                  />
                </svg>
                WhatsApp
              </a>

              <a
                href="mailto:ibcmanagement@outlook.com"
                className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                  />
                </svg>
                {t("email", language)}
              </a>

              <a
                href="https://t.me/+-k5Vkm-SxkE0ZDFl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 link link-hover text-base-content/80 hover:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="flex-shrink-0"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
