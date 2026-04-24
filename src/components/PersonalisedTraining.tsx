import Image from "next/image";
import LightningList from "./LightningList";

const items = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export default function PersonalisedTraining() {
  return (
    <section
      className="w-full bg-white pb-16 md:pb-24 lg:pb-[120px]"
      aria-labelledby="personalised-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image left */}
          <div className="w-full lg:w-1/2 shrink-0 max-w-[599px] order-2 lg:order-1">
            <div
              className="relative w-full aspect-[599/378] overflow-hidden rounded-tl-[33px] rounded-tr-[8px] rounded-b-[8px] shadow-sm bg-gray-100"
              style={{ borderRadius: "33px 8px 8px 8px" }}
            >
              <Image
                src="/images/individual.jpg"
                alt="Woman in a training session taking notes attentively"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 599px"
              />
            </div>
          </div>

          {/* Text right */}
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <h2
              id="personalised-heading"
              className="font-[Nunito] font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-main-text mb-6"
              style={{ letterSpacing: "3%" }}
            >
              Personalised Individual Training
            </h2>
            <p className="text-main-text text-[16px] md:text-[18px] font-normal font-[Nunito_Sans] leading-[1.6] mb-8">
              Begin a journey of lifelong learning and professional development with
              Tobams Group&apos;s diverse range of training programs for individuals. From
              technical skills mastery to soft skills enhancement, our courses cover a
              wide spectrum of topics to meet the evolving needs of today&apos;s
              professionals.
            </p>
            <LightningList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
