import { motion } from "framer-motion";
import Container from "../common/Container";
import techStack from "../../data/techStack";

function TechStack() {
  return (
    <section
      id="tech"
      className="relative py-24 bg-transparent overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[650px]
          h-[650px]
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

            <p className="text-[#57BA98] font-bold uppercase">
              Tech Stack
            </p>

            <h2 className="text-5xl font-bold mt-2 text-[#2D3748]">
              Tools & Technologies
            </h2>

            <p className="text-gray-500 mt-4">
              Technologies I use to build modern applications.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-16">

            {techStack.map((tech) => (

              <motion.div
                key={tech}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="
                  bg-white/65
                  backdrop-blur-xl
                  rounded-2xl
                  shadow-lg
                  border
                  border-[#E8F8F3]
                  p-6
                  text-center
                  hover:shadow-[0_15px_35px_rgba(87,186,152,0.18)]
                  transition-all
                  duration-300
                "
              >

                <h3 className="font-semibold text-[#2D3748]">
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