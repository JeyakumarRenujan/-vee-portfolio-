
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
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <Container>

        <div className="text-center">

          <p className="text-[#57BA98] font-semibold uppercase text-sm sm:text-base">
            What I Do
          </p>

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
                y: -10,
                scale: 1.02,
              }}
              className="
                bg-white/65
                backdrop-blur-xl
                p-6 sm:p-8
                rounded-3xl
                shadow-lg
                text-center
                border
                border-[#E8F8F3]
                hover:shadow-[0_15px_35px_rgba(87,186,152,0.18)]
                transition-all
                duration-300
              "
            >

              <div className="text-4xl sm:text-5xl text-[#57BA98] mb-5 sm:mb-6 flex justify-center">
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

