
import { motion } from "framer-motion";

import skills from "../../data/skills";
import Container from "../common/Container";

function Skills() {
  return (
    <section
      id="skills"
      className="pt-4 sm:pt-6 lg:pt-6 pb-12 sm:pb-16 bg-transparent scroll-mt-20 sm:scroll-mt-24"
    >
      <Container>

        <div className="text-center">

          <div>
            <span className="ios-section-badge">
              My Skills
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Technologies I Work With
          </h2>

          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Modern technologies used for building full stack applications and AI/ML solutions.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 mt-5 sm:mt-6">

          {skills.map((group, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="
                ios-glass-card
                p-4.5 sm:p-5 lg:p-6
              "
            >

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#2D3748] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#57BA98]"></span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-2.5">

                {group.items.map((item) => (

                  <span
                    key={item}
                    className="
                      ios-pill-tag
                      px-3 sm:px-3.5
                      py-1 sm:py-1.5
                      text-xs sm:text-sm
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

