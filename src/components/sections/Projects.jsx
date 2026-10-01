import { motion } from "framer-motion";
import { useRef } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaFolderOpen,
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
    <section id="projects" className="py-24 bg-transparent">
      <Container>
        <div className="text-center">
          <p className="text-[#57BA98] font-bold uppercase tracking-wider text-sm">
            My Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-[#2D3748]">
            Featured Projects & Research
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A comprehensive list of my research work, full-stack web applications, AI/ML models, and IoT systems.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-3 mt-10 mb-6">
          <button
            onClick={scrollLeft}
            aria-label="Previous Projects"
            className="
              w-11
              h-11
              rounded-full
              bg-[#EDF8F5]
              text-[#57BA98]
              shadow
              hover:bg-[#57BA98]
              hover:text-white
              transition
              flex
              items-center
              justify-center
            "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next Projects"
            className="
              w-11
              h-11
              rounded-full
              bg-[#EDF8F5]
              text-[#57BA98]
              shadow
              hover:bg-[#57BA98]
              hover:text-white
              transition
              flex
              items-center
              justify-center
            "
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Horizontal Scrollable Slider of Cards (No Images) */}
        <div
          ref={sliderRef}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            pb-6
            pt-2
            scrollbar-hide
          "
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="
                w-[90vw]
                sm:w-[340px]
                md:w-[360px]
                lg:w-[380px]
                flex-shrink-0
                flex flex-col justify-between
                bg-[#E8F8F3]
                backdrop-blur-xl
                rounded-3xl
                p-7
                shadow-md
                border border-[#DCEFE8]
                hover:shadow-[0_15px_35px_rgba(87,186,152,0.22)]
                hover:border-[#57BA98]
                transition-all
                duration-300
              "
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#57BA98]/15 text-[#57BA98] flex items-center justify-center text-lg">
                    <FaFolderOpen />
                  </div>
                  {project.type && (
                    <span className="bg-white text-[#388E75] text-xs font-semibold px-3 py-1 rounded-full border border-[#57BA98]/30">
                      {project.type}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748] leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-white
                        text-[#388E75]
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-medium
                        shadow-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#57BA98]/20">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      bg-[#57BA98]
                      text-white
                      py-2.5
                      px-4
                      rounded-xl
                      flex
                      justify-center
                      items-center
                      gap-2
                      font-semibold
                      text-sm
                      hover:bg-[#489e80]
                      transition-all
                      shadow-sm
                    "
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </a>

                  {project.demo && project.demo !== "#" && project.demo !== project.github && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        border
                        border-[#57BA98]
                        text-[#57BA98]
                        py-2.5
                        px-4
                        rounded-xl
                        flex
                        justify-center
                        items-center
                        gap-2
                        font-semibold
                        text-sm
                        hover:bg-white
                        transition-all
                      "
                    >
                      <FaExternalLinkAlt className="text-xs" />
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
