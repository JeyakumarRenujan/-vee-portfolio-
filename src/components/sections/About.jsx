
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import developer from "../../assets/images/developer.png";
import aboutData from "../../data/aboutData";

import Container from "../common/Container";

function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-28 bg-transparent"
    >
      <Container>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="relative flex justify-center">

              <div
                className="
                absolute
                w-60
                h-60
                sm:w-72
                sm:h-72
                bg-[#E8F8F3]
                rounded-full
                blur-3xl
                opacity-40
                "
              ></div>

              <img
                src={developer}
                alt="Developer Illustration"
                className="relative max-w-[260px] sm:max-w-sm md:max-w-md w-full"
              />

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h5 className="text-[#57BA98] font-bold text-sm sm:text-base">
              ABOUT ME
            </h5>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 text-[#2D3748]">
              {aboutData.subtitle}
            </h2>

            <p className="text-gray-600 mt-4 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
              {aboutData.description}
            </p>

            <div className="mt-8 space-y-4">

              {aboutData.points.map((item, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base text-gray-700"
                >

                  <FaCheckCircle className="text-[#57BA98] mt-1 flex-shrink-0" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            
<a
  href="/resume/Varnaja_Uthayaraj_CV.pdf"
  download
  className="
    inline-block
    mt-8 sm:mt-10
    bg-[#57BA98]
    text-white
    px-6 sm:px-8
    py-2.5 sm:py-3
    text-sm sm:text-base
    font-medium
    rounded-xl
    hover:bg-[#65CCB8]
    transition
    duration-300
    shadow-md
  "
>
  Download CV
</a>



          </motion.div>

        </div>

      </Container>
    </section>
  );
}

export default About;

