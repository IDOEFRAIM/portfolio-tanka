"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import SettingsBar from "./SettingsBar";

const NavBar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen 
          ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 shadow-lg" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 text-2xl font-black tracking-tighter text-slate-900 dark:text-white hover:text-primary transition-colors group"
        >
          {t("logo")}
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
          {[
            { href: "/", label: t("home") },
            { href: "/projects", label: t("projects") },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: t("about") },
            { href: "/certifications", label: "Certifications" },
            { href: "/contact", label: t("contact") },
            { href: "/price", label: "Pricing" },
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <SettingsBar />
          {/* CTA */}
          <Link
            href="https://wa.me/+2120782901759"
            target="_blank"
            className="px-6 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-xs rounded hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5"
          >
            {t("cta")}
          </Link>
        </div>

        {/* Mobile Hamburger & Settings */}
        <div className="md:hidden flex items-center gap-4">
          <SettingsBar />
          <button
            className="relative z-50 p-2 text-slate-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 flex flex-col justify-center items-center ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-center">
          {[
            { href: "/", label: t("home") },
            { href: "/projects", label: t("projects") },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: t("about") },
            { href: "/certifications", label: "Certifications" },
            { href: "/contact", label: t("contact") },
            { href: "/price", label: "Pricing" },
          ].map((link, idx) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-3xl font-black uppercase tracking-tighter hover:text-primary transition-all duration-300 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://wa.me/+2120782901759"
            target="_blank"
            className={`mt-8 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded-full shadow-xl shadow-primary/30 transform transition-all duration-300 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
            onClick={() => setIsOpen(false)}
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;