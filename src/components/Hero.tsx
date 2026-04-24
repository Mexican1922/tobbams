import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden min-h-[511px] lg:h-[511px] py-16 md:py-20"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="People working on laptops in a training environment"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* Black overlay at 70% */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
        <div className="flex items-center justify-center w-[193px] h-[45px] rounded-full bg-white/10 mb-6 md:mb-10 backdrop-blur-sm">
          <span className="text-white text-[14px] md:text-[16px] font-semibold font-[Nunito_Sans] tracking-wide">
            WHAT WE DO
          </span>
        </div>

        <h1
          id="hero-heading"
          className="font-[Nunito] font-semibold text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.15] mb-6 max-w-[900px]"
        >
          Training and Development
        </h1>

        <p className="text-white/90 text-[16px] md:text-[18px] font-normal font-[Nunito_Sans] leading-relaxed max-w-[600px] mb-8 md:mb-10">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>

        <Link
          href="#"
          className="flex items-center justify-center w-fit min-w-[214px] h-[48px] bg-primary hover:bg-[#45103A] text-white text-[16px] md:text-[18px] font-semibold font-[Nunito_Sans] px-8 rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}
