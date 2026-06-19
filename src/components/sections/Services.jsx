
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";

import Container from "../common/Container";
import services from "../../data/services";

const icons = [
  <FaShieldAlt />,
  <FaLaptopCode />,
  <FaServer />,
  <FaDatabase />,
  <FaMobileAlt />,
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-transparent overflow-hidden"
    >
      <Container>

        <div className="text-center">

          <p className="text-[#57BA98] font-semibold uppercase">
            What I Do
          </p>

          <h2 className="text-5xl font-bold mt-2 text-[#2D3748]">
            Areas of Expertise
          </h2>

          <p className="text-gray-500 mt-4">
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
            w-[650px]
            h-[650px]
            rounded-full
            bg-[#65CCB8]
            blur-[140px]
            opacity-15
            pointer-events-none
            -z-10
          "
        ></div>

        {/* Cards */}

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

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
                p-8
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

              <div className="text-5xl text-[#57BA98] mb-6 flex justify-center">
                {icons[index]}
              </div>

              <h3 className="text-xl font-bold text-[#2D3748]">
                {service.title}
              </h3>

              <p className="text-gray-500 mt-4 leading-7">
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

