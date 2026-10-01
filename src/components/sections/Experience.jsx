import { motion } from "framer-motion";
import experience from "../../data/experience";
import Container from "../common/Container";

function Experience() {
  return (
    <section
      id="experience"
      className="pt-4 sm:pt-6 lg:pt-6 pb-12 sm:pb-16 bg-transparent scroll-mt-20 sm:scroll-mt-24"
    >
      <Container>

        {/* Section Heading */}

        <div className="text-center mb-5 sm:mb-6">

          <div>
            <span className="ios-section-badge">
              Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Professional Journey
          </h2>

          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            My internship and professional development experience.
          </p>

        </div>

        {/* Cards - Centered 2-Column Grid */}

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-5 sm:gap-6">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -6,
              }}
              className="
                ios-glass-card
                p-5 sm:p-6
                flex
                flex-col
                justify-between
              "
            >

              <div>

                {/* Duration with timeline badge */}

                <div className="flex items-center gap-2 mb-2.5">

                  <span className="ios-pill-tag px-3 py-1 text-xs sm:text-sm font-semibold">
                    {item.duration}
                  </span>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748]">
                  {item.position}
                </h3>

                <h4 className="text-sm sm:text-base text-gray-600 mt-1 font-medium">
                  {item.company}
                </h4>

                <p className="text-gray-500 mt-2.5 sm:mt-3 leading-relaxed sm:leading-7 text-sm sm:text-base">
                  {item.description}
                </p>

              </div>

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#57BA98]/15">

                {item.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      ios-pill-tag
                      px-3
                      py-1
                      text-xs sm:text-sm
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
