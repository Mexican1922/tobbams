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
      className="w-full bg-white py-16 md:py-24 lg:py-[120px]"
      aria-labelledby="corporate-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text left */}
          <div className="w-full lg:flex-1">
            <h2
              id="corporate-heading"
              className="font-[Nunito] font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-main-text mb-6"
              style={{ letterSpacing: "3%" }}
            >
              Corporate Trainings
            </h2>
            <p className="text-main-text text-[16px] md:text-[18px] font-normal font-[Nunito_Sans] leading-[1.6] mb-8">
              Empower your team with our customised Corporate Training programs
              designed to address the unique needs and objectives of your
              organisation. Our expert facilitators work closely with your team
              to deliver tailored learning experiences that align with your
              company&apos;s goals and values.
            </p>
            <LightningList items={items} />
          </div>

          {/* Image right */}
          <div className="w-full lg:w-1/2 shrink-0 max-w-[602px]">
            <div
              className="relative w-full aspect-[602/346] overflow-hidden rounded-t-[56px] rounded-br-[23px] rounded-bl-[12px] shadow-sm bg-gray-100"
              style={{ borderRadius: "56px 24px 23px 12px" }}
            >
              <Image
                src="/images/corporate.jpg"
                alt="Corporate training session with presenter and team around a table"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 602px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
