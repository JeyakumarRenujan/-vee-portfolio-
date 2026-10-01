import { motion } from "framer-motion";
import { FaFlask, FaCheckCircle, FaCalendarAlt } from "react-icons/fa";
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
            Research Projects
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
              {/* Top Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#57BA98] text-white flex items-center justify-center text-xl shadow-md">
                    <FaFlask />
                  </div>
                  <div>
                    <span className="text-[#388E75] font-semibold text-xs uppercase tracking-wider">
                      {item.domain}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#2D3748] mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-white text-[#57BA98] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm border border-[#57BA98]/30">
                  <FaCalendarAlt />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Subtitle / Overview */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Key Highlights / Bullets */}
              <div className="space-y-3 mb-8 bg-white/70 rounded-2xl p-6 border border-[#57BA98]/20">
                <h4 className="text-sm font-bold text-[#2D3748] uppercase tracking-wider mb-3">
                  Key Research Contributions
                </h4>
                {item.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#57BA98] text-base mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-3">
                  Research Technologies & Frameworks
                </span>
                <div className="flex flex-wrap gap-2">
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
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Research;
