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
      className="w-full bg-white pb-12 lg:pb-20"
      aria-labelledby="personalised-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Title — mobile only, always first */}
          <h2 className="lg:hidden w-full font-heading font-semibold text-[20px] md:text-[32px] text-main-text leading-tight order-1">
            Personalised Individual Training
          </h2>

          {/* Image — second on mobile, left on desktop */}
          <div className="w-full lg:w-1/2 shrink-0 max-w-[599px] mx-auto order-2 lg:order-1">
            <div className="relative w-full aspect-[599/378] overflow-hidden rounded-2xl lg:rounded-tl-[33px] lg:rounded-tr-[8px] lg:rounded-br-[8px] lg:rounded-bl-[8px] bg-gray-100">
              <Image
                src="/images/individual.jpg"
                alt="Woman in a training session taking notes attentively"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 599px"
              />
            </div>
          </div>

          {/* Text + list — third on mobile, right on desktop */}
          <div className="w-full lg:flex-1 order-3 lg:order-2">
            {/* Desktop title — hidden on mobile */}
            <h2
              id="personalised-heading"
              className="hidden lg:block font-heading font-semibold lg:text-[40px] text-main-text mb-4 leading-tight"
            >
              Personalised Individual Training
            </h2>
            <p className="text-main-text text-[14px] md:text-[16px] font-sans leading-[1.7] mb-6">
              Begin a journey of lifelong learning and professional development
              with Tobams Group&apos;s diverse range of training programs for
              individuals. From technical skills mastery to soft skills
              enhancement, our courses cover a wide spectrum of topics to meet
              the evolving needs of today&apos;s professionals.
            </p>
            <LightningList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
