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
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-8 sm:py-10 md:py-12 bg-transparent"
    >
      <Container>

        <div className="relative text-center mb-4 sm:mb-5">

          <p className="text-[#57BA98] font-bold uppercase text-xs sm:text-sm tracking-wider">
            My Works
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 text-[#2D3748]">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-1 sm:mt-2 text-xs sm:text-sm max-w-2xl mx-auto">
            Some of my projects that demonstrate my technical skills and practical
            experience.
          </p>

          {/* Arrow Buttons - absolute on the right for sm+, inline on mobile */}
          <div className="flex justify-center sm:justify-end sm:absolute sm:right-0 sm:bottom-0 gap-2.5 mt-3 sm:mt-0">

            <button
              onClick={scrollLeft}
              aria-label="Previous Project"
              className="
                w-9 sm:w-10
                h-9 sm:h-10
                rounded-full
                bg-[#EDF8F5]
                text-[#57BA98]
                shadow-sm
                hover:bg-[#57BA98]
                hover:text-white
                transition
                flex
                items-center
                justify-center
              "
            >
              <FaChevronLeft className="mx-auto text-sm" />
            </button>

            <button
              onClick={scrollRight}
              aria-label="Next Project"
              className="
                w-9 sm:w-10
                h-9 sm:h-10
                rounded-full
                bg-[#EDF8F5]
                text-[#57BA98]
                shadow-sm
                hover:bg-[#57BA98]
                hover:text-white
                transition
                flex
                items-center
                justify-center
              "
            >
              <FaChevronRight className="mx-auto text-sm" />
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

                <h3 className="text-lg sm:text-xl font-bold text-[#2D3748]">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-left">
                  {project.description}
                </p>

              </div>

              <div>

                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        bg-white
                        text-[#57BA98]
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

                <div className="flex gap-3 mt-4 sm:mt-5">

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
                      hover:bg-[#65CCB8]
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.demo && project.demo !== "#" && project.demo !== project.github && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
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
                        hover:bg-white
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Demo
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

