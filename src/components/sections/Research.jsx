import { motion } from "framer-motion";
import research from "../../data/research";
import Container from "../common/Container";

function Research() {
  return (
    <section id="research" className="pt-4 sm:pt-6 lg:pt-6 pb-12 sm:pb-16 bg-transparent scroll-mt-20 sm:scroll-mt-24">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-5 sm:mb-6">
          <div>
            <span className="ios-section-badge">
              Research
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Research Project
          </h2>

          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Academic research in natural language processing and deep learning.
          </p>
        </div>

        {/* Research Card matching iOS glass theme */}
        <div className="max-w-4xl mx-auto">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="
                ios-glass-card
                p-5 sm:p-6 md:p-7
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#57BA98]/20 pb-3.5 mb-4 sm:mb-5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748]">
                  {item.title}
                </h3>

                <span className="ios-pill-tag px-3.5 py-1 text-xs sm:text-sm font-semibold">
                  {item.duration}
                </span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3 text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#57BA98] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-[#57BA98]/20">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      ios-pill-tag
                      px-3.5 sm:px-4
                      py-1 sm:py-1.5
                      text-xs sm:text-sm
                    "
                  >
                    {tech}
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

export default Research;
