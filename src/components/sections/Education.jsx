import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCertificate,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useRef } from "react";

import education from "../../data/education";
import certificates from "../../data/certificates";
import Container from "../common/Container";

function Education() {
  const educationRef = useRef(null);
  const certificateRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="education"
      className="py-24 bg-transparent"
    >
      <Container>

        <div className="text-center mb-16">

          <p className="text-[#57BA98] font-bold uppercase">
            Education & Certifications
          </p>

          <h2 className="text-5xl font-bold mt-2 text-[#2D3748]">
            Learning Journey
          </h2>

        </div>

        {/* Education */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <div className="flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">

              <FaGraduationCap className="text-[#57BA98] text-3xl" />

              <h3 className="text-3xl font-bold text-[#2D3748]">
                Education
              </h3>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() => scrollLeft(educationRef)}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#EDF8F5]
                  text-[#57BA98]
                  shadow
                  hover:bg-[#57BA98]
                  hover:text-white
                  transition
                "
              >
                <FaChevronLeft className="mx-auto" />
              </button>

              <button
                onClick={() => scrollRight(educationRef)}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#EDF8F5]
                  text-[#57BA98]
                  shadow
                  hover:bg-[#57BA98]
                  hover:text-white
                  transition
                "
              >
                <FaChevronRight className="mx-auto" />
              </button>

            </div>

          </div>

          <div
            ref={educationRef}
            className="
              flex
              gap-6
              overflow-x-auto
              pb-4
              scroll-smooth
              scrollbar-hide
            "
          >

            {education.map((item, index) => (

              <div
                key={index}
                className="
  w-[90vw]
sm:w-[320px]
md:w-[340px]
lg:w-[340px]
  h-[250px]
  flex-shrink-0
  bg-[#EDF8F5]
  rounded-3xl
  shadow-[0_10px_30px_rgba(87,186,152,0.12)]
  border
  border-[#DCEFE8]
  transition-all
  duration-300
  p-8
"
              >

                <h4 className="text-2xl font-bold text-[#2D3748]">
                  {item.degree}
                </h4>

                <p className="mt-3">
                  {item.institution}
                </p>

                <p>
                  {item.faculty}
                </p>

                <p className="mt-3 text-gray-500">
                  {item.duration}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Certificates */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">

              <FaCertificate className="text-[#57BA98] text-3xl" />

              <h3 className="text-3xl font-bold text-[#2D3748]">
                Certifications
              </h3>

            </div>

            <div className="flex gap-3">

              <button
                onClick={() => scrollLeft(certificateRef)}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#EDF8F5]
                  text-[#57BA98]
                  shadow
                  hover:bg-[#57BA98]
                  hover:text-white
                  transition
                "
              >
                <FaChevronLeft className="mx-auto" />
              </button>

              <button
                onClick={() => scrollRight(certificateRef)}
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#EDF8F5]
                  text-[#57BA98]
                  shadow
                  hover:bg-[#57BA98]
                  hover:text-white
                  transition
                "
              >
                <FaChevronRight className="mx-auto" />
              </button>

            </div>

          </div>

          <div
            ref={certificateRef}
            className="
              flex
              gap-6
              overflow-x-auto
              pb-4
              scroll-smooth
              scrollbar-hide
            "
          >

            {certificates.map((item, index) => (

              <div
                key={index}
                className="
                  w-[90vw]
sm:w-[300px]
md:w-[320px]
lg:w-[320px]
flex-shrink-0
                  bg-[#EDF8F5]
                  rounded-3xl
                  shadow-[0_10px_30px_rgba(87,186,152,0.12)]
                  border
                  border-[#DCEFE8]
                  transition-all
                  duration-300
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-40
                    object-cover
                    rounded-t-3xl
                  "
                />

                <div className="p-5">

                  <h4 className="font-bold text-[#2D3748]">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 mt-1">
                    {item.issuer}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-block
                      mt-4
                      text-[#57BA98]
                      font-semibold
                      hover:text-[#65CCB8]
                      transition
                    "
                  >
                    View Certificate →
                  </a>

                </div>

              </div>

            ))}

          </div>

        </motion.div>

      </Container>
    </section>
  );
}

export default Education;