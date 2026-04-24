import Image from "next/image";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function ManagementDevelopment() {
  return (
    <section
      className="w-full bg-white pb-16 lg:pb-20"
      aria-labelledby="management-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="bg-purple-80 rounded-[20px] p-4 md:p-8 w-full max-w-[1232px] mx-auto overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Title — mobile only */}
          <h2 className="lg:hidden w-full font-heading font-semibold text-[16px] md:text-[26px] text-white leading-tight order-1">
            Management Development Program
          </h2>

          {/* Image — second on mobile, left on desktop */}
          <div className="w-full lg:w-5/12 shrink-0 max-w-[500px] order-2 lg:order-1">
            <div className="relative w-full aspect-[592/639] overflow-hidden rounded-[12px]">
              <Image
                src="/images/management.jpg"
                alt="Group of professionals collaborating in a management development session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 592px"
              />
            </div>
          </div>

          {/* Content — third on mobile, right on desktop */}
          <div className="w-full lg:flex-1 flex flex-col justify-center order-3 lg:order-2">
            <h2
              id="management-heading"
              className="hidden lg:block font-heading font-semibold lg:text-[40px] text-white mb-6 leading-tight"
            >
              Management Development Program
            </h2>
            <div className="text-white/90 text-[14px] md:text-[16px] font-sans leading-[1.7] mb-8 space-y-4">
              <p>
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the high
                - performing leaders they need to thrive.
              </p>
              <p>
                Our program includes workshops, seminars, coaching sessions,
                online courses, and experiential learning opportunities designed
                to improve leadership, strategic thinking, communication, and
                other essential managerial competencies for corporate
                organisations.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-purple-40 rounded-[8px] px-4 py-3 w-full max-w-[560px]"
                >
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M7 0L0 9h5.5L4 16l8-9H7V0z" fill="#FFFFFF" />
                  </svg>
                  <span className="text-white text-[15px] md:text-[16px] font-sans font-normal">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
