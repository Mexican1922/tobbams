// CorporateTrainings.tsx
import Image from "next/image";
import LightningList from "./LightningList";

const items = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export default function CorporateTrainings() {
  return (
    <section
      className="w-full bg-white py-12 lg:py-20"
      aria-labelledby="corporate-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
          {/* Title — always first on mobile, hidden on desktop (desktop shows it inside text block) */}
          <h2
            id="corporate-heading"
            className="lg:hidden w-full font-heading font-semibold text-[20px] md:text-[32px] text-main-text leading-tight order-1"
          >
            Corporate Trainings
          </h2>

          {/* Image — second on mobile, right on desktop */}
          <div className="w-full lg:w-1/2 shrink-0 max-w-[602px] mx-auto order-2 lg:order-2">
            <div className="relative w-full aspect-[602/346] overflow-hidden rounded-2xl lg:rounded-tl-[56px] lg:rounded-tr-[24px] lg:rounded-br-[23px] lg:rounded-bl-[12px] bg-gray-100">
              <Image
                src="/images/corporate.jpg"
                alt="Corporate training session with presenter and team around a table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 602px"
              />
            </div>
          </div>

          {/* Text + list — third on mobile, left on desktop */}
          <div className="w-full lg:flex-1 order-3 lg:order-1">
            {/* Desktop title — hidden on mobile */}
            <h2
              id="corporate-heading-desktop"
              className="hidden lg:block font-heading font-semibold lg:text-[40px] text-main-text mb-4 leading-tight"
            >
              Corporate Trainings
            </h2>
            <p className="text-main-text text-[14px] md:text-[16px] font-sans leading-[1.7] mb-6">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>
            <LightningList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
