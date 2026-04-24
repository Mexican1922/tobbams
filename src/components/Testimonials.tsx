"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    image: "/images/Aisha.png",
    text: "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    image: "/images/john.png",
    text: "Tobams Group\u2019s Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    image: "/images/chinonso.png",
    text: "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO, Tech Innovations Inc.",
    image: "/images/james.jpg",
    text: "Tobams Group is a true partner in our journey to digital excellence. Their creativity and technical expertise have propelled our projects to new heights.",
  },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPageDesktop = 3;

  return (
    <section
      className="w-full bg-white py-16 md:py-24 lg:py-[100px] border-b border-gray-200"
      aria-labelledby="testimonials-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <h2
          id="testimonials-heading"
          className="font-[Nunito] font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-main-text text-center mb-12"
          style={{ letterSpacing: "3%" }}
        >
          Testimonials
        </h2>

        {/* Scrollable Container */}
        <div className="relative w-full overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(calc(-${page * 100}% - ${page * 24}px))`,
            }}
          >
            {testimonials.map((t) => (
              <article
                key={t.name}
                className={`w-full lg:w-[calc(33.333%-16px)] shrink-0 border ${
                  t.name === "John Davies"
                    ? "border-secondary"
                    : "border-gray-200"
                } rounded-xl p-6 lg:p-8 flex flex-col gap-5 bg-white ${
                  t.name === "John Davies"
                    ? "shadow-md"
                    : "shadow-sm hover:shadow-md"
                } transition-shadow`}
              >
                {/* Avatar Initial + name + role */}
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-main-text text-[15px] md:text-[16px] font-bold font-[Nunito_Sans] leading-tight mb-1">
                      {t.name}
                    </p>
                    <p className="text-gray-500 text-[12px] md:text-[13px] font-[Nunito_Sans]">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-600 text-[14px] md:text-[15px] font-normal font-[Nunito_Sans] leading-[1.65]">
                  {t.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Prev / Next arrows aligned to the right like screenshot */}
        <div className="w-full flex justify-end gap-3 pr-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            aria-label="Previous testimonials"
            className="w-10 h-10 border border-transparent flex items-center justify-center bg-[#FDE8EA] text-secondary hover:bg-[#FCD8DB] rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setPage((p) =>
                Math.min(
                  p + 1,
                  testimonials.length -
                    (typeof window !== "undefined" && window.innerWidth >= 1024
                      ? perPageDesktop
                      : 1),
                ),
              )
            }
            disabled={
              page >=
              testimonials.length -
                (typeof window !== "undefined" && window.innerWidth >= 1024
                  ? perPageDesktop
                  : 1)
            }
            aria-label="Next testimonials"
            className="w-10 h-10 flex items-center justify-center border border-transparent rounded-full bg-[#FDE8EA] text-secondary hover:bg-[#FCD8DB] disabled:opacity-40 disabled:cursor-not-allowed transition-colors outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
