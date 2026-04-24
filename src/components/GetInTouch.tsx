import Link from "next/link";

export default function GetInTouch() {
  return (
    <section
      className="bg-get-in-touch-bg py-12 md:py-16"
      aria-labelledby="git-heading"
    >
      <div className="max-w-[1312px] mx-auto px-6 md:px-16 flex flex-start md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="text-white/60 text-[14px] md:text-[16px] font-normal font-[Nunito_Sans] mb-2">
            Ready to be a part of something extraordinary?
          </p>
          <h2
            id="git-heading"
            className="font-[Nunito] font-semibold text-white text-[20px] md:text-[28px] lg:text-[32px] leading-tight"
          >
            Let&apos;s work together to create a difference
          </h2>
        </div>
        <Link
          href="#"
          className="shrink-0 bg-primary hover:bg-[#45103A] text-white text-[18px] font-semibold font-[Nunito_Sans] px-6 py-3 rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-get-in-touch-bg"
        >
          Get In Touch
        </Link>
      </div>
    </section>
  );
}
