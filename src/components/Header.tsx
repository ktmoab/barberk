"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <header className="fixed w-full left-0 top-0 z-50 bg-transparent">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/cropped-thebarberk-logo-2.png"
              alt="The Barber K Logo"
              width={140}
              height={46}
              className="h-[46px] w-auto"
              priority
            />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white font-montserrat hover:text-[#bfa164] uppercase tracking-wider transition">Om oss</a>
            <a href="#gallery" className="text-white font-montserrat hover:text-[#bfa164] uppercase tracking-wider transition">Galleri</a>
            <a href="#contact" className="text-white font-montserrat hover:text-[#bfa164] uppercase tracking-wider transition">Kontakt</a>
            <a
              href="https://www.bokadirekt.se/places/the-barber-kalmar-ab-35121"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-[#bfa164] hover:bg-[#a3873d] text-white rounded-full font-bold text-sm"
            >
              BOKA TID
            </a>
          </div>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col items-end z-50"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Öppna meny"
          >
            <span className="block w-7 h-1 bg-white mb-1 rounded transition-all" />
            <span className="block w-5 h-1 bg-white mb-1 rounded transition-all" />
            <span className="block w-3 h-1 bg-white rounded transition-all" />
          </button>
        </nav>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#222] z-50 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col pt-24 pb-8 px-8 gap-6">
            <a
              href="#about"
              className="text-white font-montserrat uppercase tracking-wider text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Om oss
            </a>
            <a
              href="#gallery"
              className="text-white font-montserrat uppercase tracking-wider text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Galleri
            </a>
            <a
              href="#contact"
              className="text-white font-montserrat uppercase tracking-wider text-lg py-2"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="https://www.bokadirekt.se/places/the-barber-kalmar-ab-35121"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 bg-[#bfa164] hover:bg-[#a3873d] text-white rounded-full font-bold text-base text-center transition"
              onClick={() => setMenuOpen(false)}
            >
              BOKA TID
            </a>
          </div>
        </div>
      </header>
      {/* Spacer for fixed header  and fix the size of the header*/}
      <div className="h-[80px] md:h-[72px]" />
    </>
  );
}