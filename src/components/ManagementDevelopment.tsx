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
      className="w-full bg-white pb-16 md:pb-24 lg:pb-[120px]"
      aria-labelledby="management-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div
          className="bg-purple-80 rounded-[20px] p-8 md:p-10 w-full max-w-[1312px] mx-auto overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
        >
          {/* Image */}
          <div className="w-full lg:w-5/12 shrink-0 max-w-[592px]">
            <div
              className="relative w-full aspect-[592/639] overflow-hidden"
              style={{
                borderRadius: "8px",
              }}
            >
              <Image
                src="/images/management.jpg"
                alt="Group of professionals collaborating in a management development session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 592px"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:flex-1 flex flex-col justify-center">
            <h2
              id="management-heading"
              className="font-[Nunito] font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-white mb-6"
              style={{ letterSpacing: "3%" }}
            >
              Management Development Program
            </h2>
            <div className="text-white text-[16px] md:text-[18px] font-normal font-[Nunito_Sans] leading-[1.6] mb-8 space-y-6">
              <p>
                Tobams Group offers a comprehensive Management Development
                Program designed to equip corporate organisations with the high -
                performing leaders they need to thrive.
              </p>
              <p>
                Our program includes workshops, seminars, coaching sessions, online
                courses, and experiential learning opportunities designed to improve
                leadership, strategic thinking, communication, and other essential
                managerial competencies for corporate organisations.
              </p>
            </div>

            {/* Benefit pills */}
            <div className="flex flex-col gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 bg-purple-40 rounded-[8px] px-4 py-2 h-auto min-h-[40px] w-full max-w-[560px]"
                >
                  <svg
                    width="19"
                    height="24"
                    viewBox="0 0 20 26"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path
                      d="M12.5 1L3 14h7.5L7 25l10-14H9.5L12.5 1Z"
                      fill="#FFFFFF"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[16px] md:text-[18px] font-normal font-[Nunito_Sans]">
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
