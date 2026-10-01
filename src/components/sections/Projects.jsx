import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import projects from "../../data/projects";
import Container from "../common/Container";

function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -370,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 370,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      style={{ scrollMarginTop: "6.5rem" }}
      className="scroll-mt-28 md:scroll-mt-32 py-8 sm:py-10 md:py-12 bg-transparent"
    >
      <Container>

        {/* Section Header */}
        <div className="relative text-center mb-5 sm:mb-6">

          <p className="text-[#57BA98] font-bold uppercase text-xs sm:text-sm tracking-wider">
            My Works
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-[#2D3748]">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-1.5 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
            Some of my projects that demonstrate my technical skills and practical
            experience.
          </p>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-end sm:absolute sm:right-0 sm:bottom-0 items-center gap-2 mt-3 sm:mt-0">

            <button
              onClick={scrollLeft}
              aria-label="Previous Project"
              className="
                w-9 sm:w-10
                h-9 sm:h-10
                rounded-full
                bg-white
                text-[#57BA98]
                border
                border-[#57BA98]/30
                shadow-xs
                hover:bg-[#57BA98]
                hover:text-white
                hover:border-[#57BA98]
                hover:shadow-md
                hover:scale-105
                active:scale-95
                transition-all
                duration-200
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              <FaChevronLeft className="text-xs sm:text-sm" />
            </button>

            <button
              onClick={scrollRight}
              aria-label="Next Project"
              className="
                w-9 sm:w-10
                h-9 sm:h-10
                rounded-full
                bg-white
                text-[#57BA98]
                border
                border-[#57BA98]/30
                shadow-xs
                hover:bg-[#57BA98]
                hover:text-white
                hover:border-[#57BA98]
                hover:shadow-md
                hover:scale-105
                active:scale-95
                transition-all
                duration-200
                flex
                items-center
                justify-center
                cursor-pointer
              "
            >
              <FaChevronRight className="text-xs sm:text-sm" />
            </button>

          </div>

        </div>

        {/* Horizontal Scroll (No Images) */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-5 sm:gap-6
            overflow-x-auto
            scroll-smooth
            pt-1
            pb-3 sm:pb-4
            scrollbar-hide
          "
        >

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                y: -6,
              }}
              className="
                w-[85vw]
                sm:w-[330px]
                md:w-[350px]
                lg:w-[360px]
                flex-shrink-0
                bg-[#E8F8F3]
                backdrop-blur-xl
                rounded-2xl sm:rounded-3xl
                shadow-md
                border
                border-[#E8F8F3]
                hover:shadow-[0_12px_28px_rgba(87,186,152,0.18)]
                hover:-translate-y-1.5
                transition-all
                duration-300
                flex
                flex-col
                justify-between
                p-5 sm:p-6
              "
            >

              <div>

                <h3 className="text-lg sm:text-xl font-bold text-[#2D3748] tracking-tight min-h-[3rem] sm:min-h-[3.5rem] flex items-start">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2 text-xs sm:text-sm leading-relaxed text-left">
                  {project.description}
                </p>

              </div>

              <div>

                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4 min-h-[44px] content-start">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        bg-white
                        text-[#57BA98]
                        border
                        border-[#57BA98]/20
                        px-2.5
                        py-0.5
                        rounded-full
                        text-xs
                        font-medium
                        shadow-xs
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-2.5 mt-4 sm:mt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      bg-[#57BA98]
                      text-white
                      py-2 sm:py-2.5
                      rounded-xl
                      text-xs sm:text-sm
                      font-medium
                      flex
                      justify-center
                      items-center
                      gap-2
                      hover:bg-[#489F82]
                      hover:shadow-md
                      active:scale-[0.98]
                      transition-all
                      duration-200
                    "
                  >
                    <FaGithub className="text-sm" />
                    GitHub
                  </a>

                  {project.demo && project.demo !== "#" && project.demo !== project.github && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
                        bg-white
                        text-[#57BA98]
                        border
                        border-[#57BA98]
                        py-2 sm:py-2.5
                        rounded-xl
                        text-xs sm:text-sm
                        font-medium
                        flex
                        justify-center
                        items-center
                        gap-2
                        hover:bg-[#E8F8F3]
                        hover:shadow-md
                        active:scale-[0.98]
                        transition-all
                        duration-200
                      "
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Projects;
