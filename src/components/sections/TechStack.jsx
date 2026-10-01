import { motion } from "framer-motion";
import Container from "../common/Container";
import techStack from "../../data/techStack";

function TechStack() {
  return (
    <section
      id="tech"
      className="relative pt-4 sm:pt-6 lg:pt-6 pb-12 sm:pb-16 bg-transparent overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[320px]
          sm:w-[500px]
          lg:w-[650px]
          h-[320px]
          sm:h-[500px]
          lg:h-[650px]
          rounded-full
          bg-[#65CCB8]
          blur-[140px]
          opacity-10
          pointer-events-none
          z-0
        "
      ></div>

      <div className="relative z-10">

        <Container>

          <div className="text-center">

            <div>
              <span className="ios-section-badge">
                Tech Stack
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
              Tools & Technologies
            </h2>

            <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
              Technologies I use to build modern applications.
            </p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mt-6 sm:mt-8">

            {techStack.map((tech) => (

              <motion.div
                key={tech}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
                className="
                  ios-glass-card
                  rounded-2xl
                  p-3.5 sm:p-4
                  text-center
                "
              >

                <h3 className="font-semibold text-xs sm:text-sm md:text-base text-[#2D3748] truncate" title={tech}>
                  {tech}
                </h3>

              </motion.div>

            ))}

          </div>

        </Container>

      </div>

    </section>
  );
}

export default TechStack;