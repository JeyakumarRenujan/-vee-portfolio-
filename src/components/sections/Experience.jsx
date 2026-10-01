
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import experience from "../../data/experience";
import Container from "../common/Container";

function Experience() {

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -340,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-transparent"
    >
      <Container>

        {/* Section Heading */}

        <div className="text-center mb-12 sm:mb-16">

          <p className="text-[#57BA98] font-bold uppercase text-sm sm:text-base">
            Experience
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Professional Journey
          </h2>

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            My internship and professional development experience.
          </p>

        </div>

        {/* Arrow Buttons */}

        <div className="flex justify-end gap-3 mb-6">

          <button
            onClick={scrollLeft}
            aria-label="Previous Experience"
            className="
              w-10 sm:w-11
              h-10 sm:h-11
              rounded-full
              bg-[#E8F8F3]
              text-[#57BA98]
              hover:bg-[#57BA98]
              hover:text-white
              transition
              duration-300
              flex
              items-center
              justify-center
            "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next Experience"
            className="
              w-10 sm:w-11
              h-10 sm:h-11
              rounded-full
              bg-[#E8F8F3]
              text-[#57BA98]
              hover:bg-[#57BA98]
              hover:text-white
              transition
              duration-300
              flex
              items-center
              justify-center
            "
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Cards */}

        <div
          ref={sliderRef}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            pb-4
            scrollbar-hide
          "
        >

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
              }}
              className="
                relative
                w-[85vw]
                sm:w-[340px]
                md:w-[360px]
                lg:w-[380px]

                min-h-[300px]
                bg-white/70
                backdrop-blur-md
                rounded-3xl
                shadow-lg
                p-6 sm:p-7
                border-l-4
                border-[#57BA98]
                border
                border-white/40
                flex-shrink-0
              "
            >

              <span
                className="
                  absolute
                  -left-3
                  top-8
                  w-5
                  h-5
                  rounded-full
                  bg-[#57BA98]
                "
              ></span>

              <p className="text-[#57BA98] font-semibold">
                {item.duration}
              </p>

              <h3 className="text-xl font-bold mt-2 text-[#2D3748]">
                {item.position}
              </h3>

              <h4 className="text-base text-gray-600 mt-1">
                {item.company}
              </h4>

              <p className="text-gray-500 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base text-justify">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">

                {item.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      bg-[#E8F8F3]
                      text-[#57BA98]
                      px-3
                      py-1
                      rounded-full
                      text-xs sm:text-sm
                      font-medium
                      transition
                      duration-300
                      hover:bg-[#57BA98]
                      hover:text-white
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Experience;

