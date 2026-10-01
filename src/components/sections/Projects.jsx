
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
      className="py-24 bg-transparent"
    >
      <Container>

        <div className="text-center">

          <p className="text-[#57BA98] font-bold uppercase">
            My Works
          </p>

          <h2 className="text-5xl font-bold mt-2 text-[#2D3748]">
            Featured Projects
          </h2>

          <p className="text-gray-500 mt-4">
            Some of my projects that demonstrate my technical skills and practical
            experience.
          </p>

        </div>

        {/* Arrow Buttons */}

        <div className="flex justify-end gap-3 mt-10 mb-6">

          <button
            onClick={scrollLeft}
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
            "
          >
            <FaChevronLeft className="mx-auto" />
          </button>

          <button
            onClick={scrollRight}
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
            "
          >
            <FaChevronRight className="mx-auto" />
          </button>

        </div>

        {/* Horizontal Scroll */}

        <div
          ref={sliderRef}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            pb-4
            scrollbar-hide
          "
        >

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{
                y: -10,
              }}
              className="
w-[90vw]
sm:w-[340px]
md:w-[360px]
lg:w-[380px]
flex-shrink-0
bg-[#E8F8F3]
backdrop-blur-xl
rounded-3xl
overflow-hidden
shadow-lg
border
border-[#E8F8F3]
hover:shadow-[0_15px_35px_rgba(87,186,152,0.18)]
hover:-translate-y-2
transition-all
duration-300
"
            >

              <img
                src={project.image}
                alt={project.title}
                className="
    w-full
    aspect-[16/9]
    object-cover
    object-top
    transition
    duration-500
  "
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#2D3748]">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        bg-white
                        text-[#57BA98]
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      bg-[#57BA98]
                      text-white
                      py-3
                      rounded-xl
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

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1
                      border
                      border-[#57BA98]
                      py-3
                      rounded-xl
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

