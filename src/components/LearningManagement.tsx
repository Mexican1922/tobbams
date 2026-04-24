import Image from "next/image";
import Link from "next/link";

const courses = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export default function LearningManagement() {
  return (
    <section
      className="w-full bg-[#e9e2e7] py-16 lg:py-20 my-[50px]"
      aria-labelledby="lms-heading"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Circular Image */}
          <div className="w-full max-w-[400px] lg:max-w-[557px] shrink-0">
            <div className="relative w-full aspect-square rounded-full overflow-hidden bg-gray-100 shadow-sm">
              <Image
                src="/images/lms-people.jpg"
                alt="Two professionals smiling — a man in a suit and a woman in business attire"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 400px, 557px"
              />
            </div>
          </div>

          {/* Content block */}
          <div className="w-full max-w-[675px] flex flex-col pt-4">
            <h2
              id="lms-heading"
              className="font-heading font-semibold text-[28px] md:text-[36px] lg:text-[40px] text-primary leading-tight mb-6 tracking-wide"
            >
              Learning Management System
            </h2>

            {/* Single pink card — contains body text + courses */}
            <div className="bg-[#d9ccd6] rounded-[8px] p-6 lg:p-8 mb-6 w-full flex flex-col gap-4">
              {/* Body text inside the card */}
              <p className="text-main-text text-[15px] md:text-[16px] font-sans leading-[1.6]">
                TG Academy is a hub of knowledge and skill-building resources
                designed to empower tech talents on their learning journey. From
                technical courses covering the latest programming languages and
                development frameworks to soft skills training in leadership,
                effective communication and project management, TG Academy
                offers a wide range of courses to cater to diverse learning
                needs. With accessible and interactive learning materials,
                individuals can enhance their skills and stay ahead in
                today&apos;s competitive tech landscape.
              </p>

              {/* Courses label + 3-col grid */}
              <div className="flex flex-col gap-3">
                <p className="text-primary text-[15px] md:text-[16px] font-semibold font-sans">
                  Some of our courses include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                  {courses.map((course) => (
                    <li
                      key={course}
                      className="flex items-center gap-2 text-[14px] md:text-[15px] text-main-text font-sans"
                    >
                      <span
                        className="w-[6px] h-[6px] rounded-full bg-primary shrink-0"
                        aria-hidden="true"
                      />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learn More button */}
            <Link
              href="#"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-[#45103A] text-white text-[16px] md:text-[18px] font-semibold font-sans w-fit px-8 h-[48px] rounded-[4px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
    </section>
  );
}
