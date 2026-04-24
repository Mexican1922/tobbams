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
        {/* ── Top row: Logo + Buttons ── */}
        <div className="flex items-center justify-between h-[80px] md:h-[103px] px-6 lg:px-16">
          {/* Logo — icon only, no text */}
          <Link
            href="/"
            aria-label="Tobams Group Home"
            className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-[#571244] rounded-sm"
          >
            <Image
              src="/images/logo.png"
              alt="Tobams Group"
              width={165.71}
              height={64}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Account — outlined with separated icon background */}
            <button className="flex items-center gap-0 bg-[#571244] text-[#DDD0DA] border-2 border-[#571244] rounded-[4px] h-[48px] font-semibold font-sans transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#571244]">
              {/* Icon circle — centered with padding so it doesn't touch edges */}
              <span className="flex items-center justify-center pl-3">
                <span className="flex items-center justify-center bg-[#DDD0DA] h-[32px] w-[32px] rounded-full shrink-0">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 16 18"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="5"
                      r="3.5"
                      stroke="#571244"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1 17c0-3.866 3.134-6 7-6s7 2.134 7 6"
                      stroke="#571244"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>

              {/* Text + chevron */}
              <span className="flex items-center gap-2 px-4 text-[16px]">
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
              </span>
            </button>

            {/* Take Assessment — filled red */}
            <Link
              href="#"
              className="bg-[#ef4353] text-white rounded-[4px] px-5 h-[48px] flex items-center justify-center text-[16px] font-semibold font-sans hover:bg-[#d93a49] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#ef4353]"
            >
              Take Assessment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-[#571244] outline-none focus-visible:ring-2 focus-visible:ring-[#571244]"
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

        {/* ── Desktop nav links row ── */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center justify-center h-[69px] border-t border-gray-100"
        >
          <ul className="flex items-center justify-between w-full max-w-[1080px] px-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label} className="relative">
                <Link
                  href={link.href}
                  className="group flex items-center gap-1 text-[15px] xl:text-[16px] whitespace-nowrap font-semibold font-sans text-[#151515] hover:text-[#571244] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#571244] py-2"
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 transition-transform duration-200 group-hover:rotate-180"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  {/* Hover underline — sits at bottom of the <li> */}
                  <span className="absolute -bottom-[-8px] left-0 w-full h-[2px] bg-[#571244] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Mobile menu ── */}
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
                  className="px-3 py-3 text-[16px] font-semibold font-sans text-[#151515] hover:text-[#571244] hover:bg-[#5712440d] rounded-md transition-colors flex items-center justify-between"
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
                <button className="flex items-center justify-center gap-2 bg-white text-[#571244] border-2 border-[#571244] rounded-[4px] px-4 h-[48px] text-[16px] font-semibold font-sans w-full">
                  Account
                </button>
                <Link
                  href="#"
                  className="flex items-center justify-center bg-[#ef4353] text-white rounded-[4px] px-4 h-[48px] text-[16px] font-semibold font-sans w-full hover:bg-[#d93a49] transition-colors"
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
