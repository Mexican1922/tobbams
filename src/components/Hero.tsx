import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden min-h-[511px] lg:h-[511px]"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="People working on laptops in a training environment"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Overlay — 60% black */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center text-center gap-6">
        {/* "WHAT WE DO" pill */}
        <div className="flex items-center justify-center px-6 h-[40px] rounded-full bg-white/15 backdrop-blur-sm">
          <span className="text-white text-[13px] font-semibold font-sans tracking-[0.12em] uppercase">
            WHAT WE DO
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="font-heading font-semibold text-white text-[36px] md:text-[52px] lg:text-[60px] leading-[1.1] max-w-[800px]"
        >
          {/* Mobile text — hidden from md up */}
          <span className="md:hidden w-full font-bold text-[25px]">
            Learning and Development
          </span>
          {/* Desktop text — hidden below md */}
          <span className="hidden md:inline">Training and Development</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/85 text-[15px] md:text-[18px] font-sans font-normal leading-relaxed max-w-[1077px]">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <Link
          href="#"
          className="flex items-center justify-center h-[50px] px-10 bg-[#571244] hover:bg-[#45103A] text-white text-[16px] font-semibold font-sans rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white mt-2"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
