import Image from "next/image";
import Link from "next/link";

const skills = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export default function TransformationHub() {
  return (
    <section
      className="w-full bg-white pb-16 lg:pb-20"
      aria-labelledby="transformation-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="bg-[#fcd9dd] rounded-[16px] p-8 md:p-10 lg:p-12 w-full max-w-[1312px] mx-auto">
          <div className="flex flex-col gap-10">
            {/* Header section */}
            <div>
              <p className="font-heading font-semibold italic text-[14px] md:text-[18px] text-pending-main leading-[1.3] mb-2">
                Learning With Our CEO:
              </p>
              <h2
                id="transformation-heading"
                className="font-heading font-semibold italic text-[20px] md:text-[32px] text-primary leading-[1.3] mb-5"
              >
                Transformation Hub With Jite Newton
              </h2>
              <p className="text-main-text text-[14px] md:text-[16px] font-sans leading-[1.7]">
                Transformation Hub with Jite Newton is a flagship webinar series
                curated by the CEO, Dr. Jite Newton. Designed to elevate career
                trajectories and leadership capabilities, this exclusive event
                offers invaluable insights and strategies for personal and
                professional growth. Whether you&apos;re seeking to advance your
                career or enhance your leadership skills, the Transformation Hub
                provides a transformative learning experience to unlock your
                full potential and drive success in your endeavours.
              </p>
            </div>

            {/* Image + skills grid row */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Image */}
              <div className="w-full lg:w-5/12 shrink-0 max-w-[560px]">
                <div className="relative w-full aspect-[560/340] rounded-[8px] overflow-hidden bg-gray-100">
                  <Image
                    src="/images/transformation.jpg"
                    alt="CEO Dr. Jite Newton speaking at the Transformation Hub webinar"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </div>

              {/* Skills grid 2x3 + CTA */}
              <div className="w-full lg:flex-1 flex flex-col justify-between gap-6">
                <div className="bg-[#fde4e7] rounded-[8px] p-4 h-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills.map((label) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 bg-white border border-gray-200 rounded-[8px] p-4"
                      >
                        <svg
                          width="12"
                          height="16"
                          viewBox="0 0 12 16"
                          fill="none"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path
                            d="M7 0L0 9h5.5L4 16l8-9H7V0z"
                            stroke="#571244"
                            fill="#DDD0DA"
                          />
                        </svg>
                        <span className="text-main-text text-[14px] md:text-[16px] font-semibold font-sans">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#45103A] text-white text-[15px] md:text-[16px] font-semibold font-sans px-8 h-[48px] rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit mt-6"
                  >
                    Learn More
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
