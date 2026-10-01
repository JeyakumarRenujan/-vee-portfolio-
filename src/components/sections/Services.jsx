
import { motion } from "framer-motion";
import {
  FaBrain,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";

import Container from "../common/Container";
import services from "../../data/services";

const icons = [
  <FaBrain />,
  <FaLaptopCode />,
  <FaServer />,
  <FaDatabase />,
  <FaRobot />,
  <FaMobileAlt />,
];

function Services() {
  return (
    <section
      id="services"
      className="relative pt-4 sm:pt-6 lg:pt-6 pb-12 sm:pb-16 bg-transparent overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <Container>

        <div className="text-center">

          <div>
            <span className="ios-section-badge">
              What I Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2D3748]">
            Areas of Expertise
          </h2>

          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base max-w-2xl mx-auto">
            Technologies and solutions I enjoy building.
          </p>

        </div>

        {/* Mint Glow */}

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
            opacity-15
            pointer-events-none
            -z-10
          "
        ></div>

        {/* Cards */}

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="
                ios-glass-card
                p-5 sm:p-6
                text-center
              "
            >

              <div className="w-13 h-13 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-white/80 border border-[#57BA98]/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_4px_12px_rgba(87,186,152,0.12)] text-2xl sm:text-3xl text-[#57BA98] mb-3.5 sm:mb-4 flex items-center justify-center">
                {icons[index]}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#2D3748]">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed sm:leading-6">
                {service.description}
              </p>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Services;

