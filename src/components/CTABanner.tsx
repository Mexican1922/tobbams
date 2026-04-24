import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="w-full bg-white py-12 md:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="bg-primary rounded-[8px] px-8 md:px-16 py-10 md:py-12 w-full max-w-[1134px] mx-auto flex flex-col items-center justify-center gap-6 shadow-lg">
          <div className="text-center flex flex-col items-center gap-2">
            {/* Desktop text */}
            <p className="hidden md:block text-white text-[16px] md:text-[18px] font-sans leading-relaxed max-w-[600px]">
              Want to accelerate professional growth and development at your
              organisation?
            </p>
            {/* Mobile text */}
            <p className="md:hidden text-white text-[15px] font-sans leading-relaxed max-w-[320px]">
              Don&apos;t just dream it—let&apos;s build it! Click now and start
              your project with Tobams Group. Your journey to digital excellence
              begins here.
            </p>
            <h2
              id="cta-heading"
              className="hidden md:block font-heading font-semibold text-white text-[20px] md:text-[24px]"
            >
              See how we can help.
            </h2>
          </div>

          <Link
            href="#"
            className="flex items-center justify-center w-full md:w-auto md:min-w-[214px] h-[48px] bg-white hover:bg-gray-100 text-primary text-[16px] md:text-[18px] font-semibold font-sans px-8 rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary shrink-0 mt-2"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
