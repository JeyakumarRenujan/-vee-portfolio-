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
      className="py-16 md:py-24 bg-transparent scroll-mt-20"
    >
      <Container>

        <div className="text-center mb-12 sm:mb-16">

          <div>
            <span className="ios-section-badge">
              Education
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Academic Journey
          </h2>

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            My educational background and academic qualifications.
          </p>

        </div>

        {/* Education */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="flex justify-between items-center mb-6 sm:mb-8">

            <div className="flex items-center gap-3">

              <FaGraduationCap className="text-[#57BA98] text-2xl sm:text-3xl" />

              <h3 className="text-2xl sm:text-3xl font-bold text-[#2D3748]">
                Education
              </h3>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() => scrollLeft(educationRef)}
                aria-label="Previous Education"
                className="
                  ios-glossy-icon-btn
                  w-10 sm:w-11
                  h-10 sm:h-11
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
                  w-10 sm:w-11
                  h-10 sm:h-11
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
              gap-6
              overflow-x-auto
              pb-4
              scroll-smooth
              scrollbar-hide
            "
          >

            {education.map((item, index) => (

              <div
                key={index}
                className="
                  w-[85vw]
                  sm:w-[320px]
                  md:w-[340px]
                  lg:w-[340px]
                  min-h-[240px]
                  flex-shrink-0
                  ios-glass-card
                  p-6 sm:p-8
                  flex
                  flex-col
                  justify-between
                "
              >

                <div>

                  <h4 className="text-xl sm:text-2xl font-bold text-[#2D3748]">
                    {item.degree}
                  </h4>

                  <p className="mt-3 text-[#57BA98] font-semibold text-sm sm:text-base">
                    {item.institution}
                  </p>

                  <p className="mt-1 text-gray-600 text-sm sm:text-base">
                    {item.faculty}
                  </p>

                </div>

                <div className="mt-4">
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