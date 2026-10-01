import { motion } from "framer-motion";
import research from "../../data/research";
import Container from "../common/Container";

function Research() {
  return (
    <section id="research" className="scroll-mt-20 sm:scroll-mt-24 py-16 md:py-24 bg-transparent">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#57BA98] font-bold uppercase text-sm sm:text-base">
            Research
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Research Project
          </h2>

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Academic research in natural language processing and deep learning.
          </p>
        </div>

        {/* Research Card matching site theme */}
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
                bg-[#E8F8F3]
                backdrop-blur-xl
                rounded-3xl
                shadow-lg
                p-6 sm:p-8 md:p-10
                border
                border-[#E8F8F3]
                hover:shadow-[0_15px_35px_rgba(87,186,152,0.18)]
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#57BA98]/20 pb-5 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748]">
                  {item.title}
                </h3>

                <span className="text-[#57BA98] font-semibold text-xs sm:text-sm">
                  {item.duration}
                </span>
              </div>

              <ul className="space-y-4 text-gray-600 text-sm sm:text-base leading-7 sm:leading-8">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#57BA98] font-bold text-lg leading-none mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[#57BA98]/20">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-white
                      text-[#57BA98]
                      px-3 sm:px-4
                      py-1 sm:py-1.5
                      rounded-full
                      text-xs sm:text-sm
                      font-medium
                      shadow-sm
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
