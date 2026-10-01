import { motion } from "framer-motion";
import research from "../../data/research";
import Container from "../common/Container";

function Research() {
  return (
    <section id="research" className="py-24 bg-transparent">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#57BA98] font-bold uppercase tracking-wider text-sm">
            Academic & Applied Research
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-[#2D3748]">
            Research Project
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg">
            Investigating state-of-the-art deep learning architectures, multi-task transformers, and natural language processing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {research.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                bg-[#E8F8F3]
                backdrop-blur-xl
                rounded-3xl
                p-8 sm:p-10
                shadow-lg
                border border-[#DCEFE8]
                hover:shadow-[0_15px_35px_rgba(87,186,152,0.22)]
                transition-all
                duration-300
              "
            >
              {/* Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[#388E75] font-semibold text-xs uppercase tracking-wider block mb-1">
                    {item.domain}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#2D3748]">
                    {item.title}
                  </h3>
                </div>

                <div className="bg-white text-[#57BA98] px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm border border-[#57BA98]/30">
                  {item.duration}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 mb-8 pl-4 list-disc text-gray-700">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-sm sm:text-base leading-relaxed pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#57BA98]/20">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-white
                      text-[#388E75]
                      px-3.5
                      py-1.5
                      rounded-full
                      text-xs
                      font-semibold
                      shadow-sm
                      border
                      border-[#57BA98]/30
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
