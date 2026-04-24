"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#", hasDropdown: true },
  { label: "What We Do", href: "#", hasDropdown: true },
  { label: "Jobs", href: "#", hasDropdown: true },
  { label: "Projects", href: "#", hasDropdown: false },
  { label: "TG Academy", href: "#", hasDropdown: false },
  { label: "Strategic Partnership", href: "#", hasDropdown: false },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Book a Consultation", href: "#", hasDropdown: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Top row: Logo + Buttons */}
        <div className="flex items-center justify-between h-auto py-4 md:h-[103px] px-6 lg:px-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Tobams Group Home"
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          >
            <Image
              src="/images/logo.png"
              alt="Tobams Group Logo"
              width={40}
              height={40}
              className="shrink-0 w-8 h-8 md:w-10 md:h-10"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-[11px] md:text-[13px] font-semibold tracking-[0.15em] text-primary uppercase font-[Nunito_Sans]">
                TOBAMS
              </span>
              <span className="text-[8px] md:text-[10px] font-semibold tracking-[0.15em] text-primary uppercase mt-[1px] font-[Nunito_Sans]">
                GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Account button - Outlined with visible icon */}
            <button className="flex items-center justify-center gap-2 bg-transparent text-primary border border-primary rounded-[4px] px-6 h-[48px] text-[18px] font-semibold font-[Nunito_Sans] hover:bg-primary/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 shrink-0">
              <div className="flex items-center justify-center shrink-0 text-primary">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  aria-hidden="true"
                  className="text-primary"
                >
                  <circle
                    cx="8"
                    cy="5"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M1 17c0-3.866 3.134-6 7-6s7 2.134 7 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              Account
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Take Assessment */}
            <Link
              href="#"
              className="bg-secondary text-white rounded-[4px] px-6 h-[48px] flex items-center justify-center text-[18px] font-semibold font-[Nunito_Sans] hover:bg-[#D93A49] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 shrink-0"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-primary outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Bottom nav links row */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center justify-center h-[69px] border-t border-gray-100"
        >
          <div className="w-full max-w-[1045px] px-4 flex justify-between items-center gap-6 overflow-x-auto hide-scrollbar">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex items-center gap-1 text-[16px] xl:text-[18px] whitespace-nowrap font-semibold font-[Nunito_Sans] text-main-text hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary relative"
              >
                <span>{link.label}</span>
                {link.hasDropdown && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:rotate-180"
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
                {/* Underline effect on hover */}
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="lg:hidden pb-6 pt-2 border-t border-gray-100 px-6"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-3 text-[16px] font-semibold font-[Nunito_Sans] text-main-text hover:text-primary hover:bg-primary/5 rounded-md transition-colors flex items-center justify-between"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4.5 3L7.5 6L4.5 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 mt-2">
                <button className="flex items-center justify-center gap-2 bg-transparent text-primary border border-primary rounded-[4px] px-4 h-[48px] text-[16px] font-semibold font-[Nunito_Sans] w-full">
                  Account
                </button>
                <Link
                  href="#"
                  className="flex items-center justify-center bg-secondary text-white rounded-[4px] px-4 h-[48px] text-[16px] font-semibold font-[Nunito_Sans] text-center w-full"
                >
                  Take Assessment
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
