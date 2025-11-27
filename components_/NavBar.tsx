"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SettingsBar from "./SettingsBar";

const NavBar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tighter text-slate-900 dark:text-white hover:text-primary transition-colors"
        >
          {t("logo")}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          <Link href="/" className="hover:text-primary transition-colors">
            {t("home")}
          </Link>
          <Link href="/projects" className="hover:text-primary transition-colors">
            {t("projects")}
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            {t("about")}
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </Link>
        </div>
        <SettingsBar />
        {/* CTA */}
        <Link
          href="https://wa.me/+2120782901759"
          target="_blank"
          className="hidden md:inline px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
        >
          {t("cta")}
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Icône simple */}
          <svg
            className="w-6 h-6 text-slate-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 px-4 py-3 space-y-2">
          <Link href="/" className="block hover:text-primary">
            {t("home")}
          </Link>
          <Link href="/projects" className="block hover:text-primary">
            {t("projects")}
          </Link>
          <Link href="/about" className="block hover:text-primary">
            {t("about")}
          </Link>
          <Link href="/contact" className="block hover:text-primary">
            {t("contact")}
          </Link>
          <Link
            href="https://wa.me/+2120782901759"
            target="_blank"
            className="block px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 shadow-md"
          >
            {t("cta")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;