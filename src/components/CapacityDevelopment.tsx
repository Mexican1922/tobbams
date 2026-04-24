import Image from "next/image";
import LightningList from "./LightningList";

const items = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export default function CapacityDevelopment() {
  return (
    <section
      className="w-full bg-white pb-12 lg:pb-20"
      aria-labelledby="capacity-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Title — mobile only, always first */}
          <h2 className="lg:hidden w-full font-heading font-semibold text-[20px] md:text-[32px] text-main-text leading-tight order-1">
            Capacity Development
          </h2>

          {/* Image — second on mobile, right on desktop */}
          <div className="w-full lg:w-1/2 shrink-0 max-w-[601px] mx-auto order-2 lg:order-2">
            <div className="relative w-full aspect-[601/405] overflow-hidden rounded-2xl lg:rounded-tl-[40px] lg:rounded-tr-[8px] lg:rounded-br-[8px] lg:rounded-bl-[8px] bg-gray-100">
              <Image
                src="/images/capacity.jpg"
                alt="Trainer presenting to a team in a capacity development workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 601px"
              />
            </div>
          </div>

          {/* Text + list — third on mobile, left on desktop */}
          <div className="w-full lg:flex-1 order-3 lg:order-1">
            {/* Desktop title — hidden on mobile */}
            <h2
              id="capacity-heading"
              className="hidden lg:block font-heading font-semibold lg:text-[40px] text-main-text mb-4 leading-tight"
            >
              Capacity Development
            </h2>
            <p className="text-main-text text-[14px] md:text-[16px] font-sans leading-[1.7] mb-6">
              At Tobams Group, we empower individuals and organizations through
              tailored training programs, expert-led workshops, and personalized
              mentorship. We are committed to your success and growth. We are
              dedicated to providing a comprehensive suite of benefits designed
              to foster your development and success:
            </p>
            <LightningList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
