import Link from "next/link";

const features = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function TrainingConsultant() {
  return (
    <section
      className="w-full bg-[#e9e2e7] py-16 md:py-20"
      aria-labelledby="consultant-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="max-w-[1312px] mx-auto">
          <h2
            id="consultant-heading"
            className="font-heading font-semibold text-[24px] md:text-[36px] lg:text-[40px] text-main-text mb-3"
            style={{ letterSpacing: "3%" }}
          >
            Training The Consultant
          </h2>
          <p className="text-primary text-[16px] md:text-[18px] font-semibold font-sans mb-6">
            Maximise Your Potential as a Certified Trainer:
          </p>
          <p className="text-main-text text-[14px] md:text-[18px] font-normal font-sans leading-[1.6] mb-10">
            With the help of our Training Consultants program, take a
            revolutionary step toward becoming a distinguished certified
            training consultant. Learn from professionals in the field, immerse
            yourself in a thorough curriculum, and hone your training methods
            through interactive workshops. Participating in our program will
            enable you to gain expertise in diverse courses while also
            developing the abilities to mentor and encourage others in their
            career advancement.
          </p>

          <div className="bg-primary rounded-[8px] overflow-hidden mb-10 w-full shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className={`p-8 lg:p-10 ${
                    i < 2 ? "border-b border-primary" : ""
                  } ${i % 2 === 0 ? "md:border-r border-primary" : ""}`}
                >
                  <h3 className="text-white font-semibold font-sans text-[16px] md:text-[18px] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-[14px] md:text-[18px] font-normal font-sans leading-[1.65]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#45103A] text-white text-[16px] md:text-[18px] font-semibold font-sans px-8 h-[48px] rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary w-fit"
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
    </section>
  );
}
