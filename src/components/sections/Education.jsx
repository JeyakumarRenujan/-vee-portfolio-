import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useRef } from "react";

import education from "../../data/education";
import Container from "../common/Container";

function Education() {
  const educationRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = (ref) => {
    ref.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="education"
      className="pt-4 sm:pt-6 lg:pt-6 pb-12 sm:pb-16 bg-transparent scroll-mt-20 sm:scroll-mt-24"
    >
      <Container>

        <div className="text-center mb-5 sm:mb-6">

          <div>
            <span className="ios-section-badge">
              Education
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Academic Journey
          </h2>

          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            My educational background and academic qualifications.
          </p>

        </div>

        {/* Education */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="flex justify-between items-center mb-4 sm:mb-5">

            <div className="flex items-center gap-2.5">

              <FaGraduationCap className="text-[#57BA98] text-xl sm:text-2xl" />

              <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748]">
                Education
              </h3>

            </div>

            <div className="flex gap-2.5">

              <button
                onClick={() => scrollLeft(educationRef)}
                aria-label="Previous Education"
                className="
                  ios-glossy-icon-btn
                  w-9 sm:w-10
                  h-9 sm:h-10
                  rounded-full
                "
              >
                <FaChevronLeft className="relative z-10" />
              </button>

              <button
                onClick={() => scrollRight(educationRef)}
                aria-label="Next Education"
                className="
                  ios-glossy-icon-btn
                  w-9 sm:w-10
                  h-9 sm:h-10
                  rounded-full
                "
              >
                <FaChevronRight className="relative z-10" />
              </button>

            </div>

          </div>

          <div
            ref={educationRef}
            className="
              flex
              gap-5 sm:gap-6
              overflow-x-auto
              pb-3
              scroll-smooth
              scrollbar-hide
            "
          >

            {education.map((item, index) => (

              <div
                key={index}
                className="
                  w-[85vw]
                  sm:w-[310px]
                  md:w-[330px]
                  lg:w-[340px]
                  min-h-[190px]
                  flex-shrink-0
                  ios-glass-card
                  p-5 sm:p-6
                  flex
                  flex-col
                  justify-between
                "
              >

                <div>

                  <h4 className="text-lg sm:text-xl font-bold text-[#2D3748]">
                    {item.degree}
                  </h4>

                  <p className="mt-2 text-[#57BA98] font-semibold text-xs sm:text-sm">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-gray-600 text-xs sm:text-sm">
                    {item.faculty}
                  </p>

                </div>

                <div className="mt-3.5">
                  <span className="ios-pill-tag px-3 py-1 text-xs font-semibold">
                    {item.duration}
                  </span>
                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </Container>
    </section>
  );
}

export default Education;