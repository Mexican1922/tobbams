import Link from "next/link";
import Image from "next/image";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solution = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-16 md:pt-20 pb-8">
      <div className="max-w-[1312px] mx-auto px-6 md:px-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:pr-4">
            {/* Logo: 3 overlapping circles + wordmark */}
            <Link
              href="/"
              aria-label="Tobams Group Home"
              className="inline-flex items-center gap-2 mb-6 outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              <Image
                src="/images/footer-logo.png"
                alt="Tobams Group Logo"
                width={40}
                height={40}
                className="shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-semibold tracking-[0.15em] text-white uppercase font-[Nunito_Sans]">
                  TOBAMS
                </span>
                <span className="text-[10px] font-semibold tracking-[0.15em] text-white uppercase mt-[1px] font-[Nunito_Sans]">
                  GROUP
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-[14px] md:text-[16px] font-normal font-[Nunito_Sans] leading-[1.65] mb-8">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            {/* Social icons: 36px circles, border white/20 */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="X (Twitter)"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* What We Do */}
          <nav aria-label="What We Do links">
            <h3 className="text-white text-[16px] font-semibold font-[Nunito_Sans] mb-6">
              What We Do
            </h3>
            <ul className="flex flex-col gap-3">
              {whatWeDo.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 text-[14px] font-normal font-[Nunito_Sans] hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-white text-[16px] font-semibold font-[Nunito_Sans] mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 text-[14px] font-normal font-[Nunito_Sans] hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Solution */}
          <nav aria-label="Solution links">
            <h3 className="text-white text-[16px] font-semibold font-[Nunito_Sans] mb-6">
              Solution
            </h3>
            <ul className="flex flex-col gap-3">
              {solution.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-white/60 text-[14px] font-normal font-[Nunito_Sans] hover:text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Offices + Contact */}
        <div className="pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-10">
          <div>
            <h3 className="text-white text-[16px] font-semibold font-[Nunito_Sans] mb-5">
              Registered Offices
            </h3>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <p className="text-[#E879F9] text-[13px] font-semibold font-[Nunito_Sans] mb-2">
                  United Kingdom
                </p>
                <p className="text-white/60 text-[13px] font-normal font-[Nunito_Sans] leading-[1.8]">
                  07451196 (Registered by Company House)
                  <br />
                  Vine Cottages, 215 North Street, Romford,
                  <br />
                  Essex, United Kingdom, RM1 4QA
                </p>
              </div>
              <div>
                <p className="text-[#E879F9] text-[13px] font-semibold font-[Nunito_Sans] mb-2">
                  Nigeria
                </p>
                <p className="text-white/60 text-[13px] font-normal font-[Nunito_Sans] leading-[1.8]">
                  RC 1048722 (Registered by the Corporate Affairs Commission)
                  <br />
                  4, Muaz Close, Angwar-Rimi
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-white text-[16px] font-semibold font-[Nunito_Sans] mb-5">
              Contact Information
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-white/60 text-[14px] font-normal font-[Nunito_Sans]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                theteam@tobamsgroup.com
              </li>
              <li className="flex items-center gap-3 text-white/60 text-[14px] font-normal font-[Nunito_Sans]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-5.68-5.68A19.79 19.79 0 012.44 4.51 2 2 0 014.62 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 10.91a16.06 16.06 0 006 6l1.77-1.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z" />
                </svg>
                +447886600748
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-[13px] font-normal font-[Nunito_Sans]">
            Copyright © Tobams Group, 2024. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="#"
              className="text-white/50 text-[13px] font-normal font-[Nunito_Sans] hover:text-white/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              Terms and Conditions
            </Link>
            <Link
              href="#"
              className="text-white/50 text-[13px] font-normal font-[Nunito_Sans] hover:text-white/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/50 text-[13px] font-normal font-[Nunito_Sans] hover:text-white/80 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
