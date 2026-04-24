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
      className="w-full bg-white pb-16 md:pb-24 lg:pb-[120px]"
      aria-labelledby="capacity-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text left */}
          <div className="w-full lg:flex-1">
            <h2
              id="capacity-heading"
              className="font-[Nunito] font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-main-text mb-6"
              style={{ letterSpacing: "3%" }}
            >
              Capacity Development
            </h2>
            <p className="text-main-text text-[16px] md:text-[18px] font-normal font-[Nunito_Sans] leading-[1.6] mb-8">
              At Tobams Group, we empower individuals and organizations through tailored
              training programs, expert-led workshops, and personalized mentorship. We are
              committed to your success and growth. We are dedicated to providing a
              comprehensive suite of benefits designed to foster your development and
              success:
            </p>
            <LightningList items={items} />
          </div>

          {/* Image right */}
          <div className="w-full lg:w-1/2 shrink-0 max-w-[601px]">
            <div
              className="relative w-full aspect-[601/405] overflow-hidden rounded-tl-[40px] rounded-tr-[8px] rounded-b-[8px] shadow-sm bg-gray-100"
              style={{ borderRadius: "40px 8px 8px 8px" }}
            >
              <Image
                src="/images/capacity.jpg"
                alt="Trainer presenting to a team in a capacity development workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 601px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
