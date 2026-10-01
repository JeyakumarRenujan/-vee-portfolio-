
import { motion } from "framer-motion";

import skills from "../../data/skills";
import Container from "../common/Container";

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-transparent"
    >
      <Container>

        <div className="text-center">

          <p className="text-[#57BA98] font-bold uppercase text-sm sm:text-base">
            My Skills
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Technologies I Work With
          </h2>

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Modern technologies used for building full stack applications and AI/ML solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">

          {skills.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                bg-white/65
                backdrop-blur-xl
                rounded-3xl
                p-6 sm:p-8
                shadow-lg
                border
                border-[#E8F8F3]
                hover:shadow-[0_15px_35px_rgba(87,186,152,0.18)]
                transition-all
                duration-300
              "
            >

              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-[#2D3748]">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5 sm:gap-3.5">

                {group.items.map((item) => (

                  <span
                    key={item}
                    className="
                      bg-[#E8F8F3]
                      text-[#57BA98]
                      px-3.5 sm:px-5
                      py-1.5 sm:py-2
                      rounded-full
                      text-xs sm:text-sm
                      font-medium
                      shadow-sm
                      cursor-default
                      hover:bg-[#57BA98]
                      hover:text-white
                      hover:shadow-md
                      transition-all
                      duration-300
                    "
                  >
                    {item}
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

export default Skills;

