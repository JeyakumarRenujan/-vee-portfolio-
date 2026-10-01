
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
      className="relative py-16 md:py-24 bg-transparent overflow-hidden scroll-mt-20"
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

          <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
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

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                ios-glass-card
                p-6 sm:p-8
                text-center
              "
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/80 border border-[#57BA98]/30 shadow-[inset_0_1px_1.5px_rgba(255,255,255,1),0_4px_12px_rgba(87,186,152,0.12)] text-2xl sm:text-3xl text-[#57BA98] mb-5 sm:mb-6 flex items-center justify-center">
                {icons[index]}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#2D3748]">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7">
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

