
import { motion } from "framer-motion";

import skills from "../../data/skills";
import Container from "../common/Container";

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-transparent scroll-mt-20"
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
                y: -6,
                scale: 1.01,
              }}
              className="
                ios-glass-card
                p-6 sm:p-8
              "
            >

              <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-[#2D3748] flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#57BA98]"></span>
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">

                {group.items.map((item) => (

                  <span
                    key={item}
                    className="
                      ios-pill-tag
                      px-3.5 sm:px-4.5
                      py-1.5 sm:py-2
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

