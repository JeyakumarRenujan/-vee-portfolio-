import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../../assets/images/profile.jpeg";
import heroData from "../../data/heroData";

import Container from "../common/Container";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#57BA98] font-bold text-lg">
              {heroData.greeting}
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-2 leading-tight text-[#2D3748]">
              {heroData.name}
            </h1>
            
            <TypeAnimation
              sequence={[
                "Computer Engineer",
                1500,
                "Cybersecurity Enthusiast",
                1500,
                "Full Stack Developer",
                1500,
                "Technology Explorer",
                1500,
                "AI/ML Enthusiast",
                1500,
                "UI Designer",
                1500,
              ]}
              speed={40}
              repeat={Infinity}
              className="text-2xl md:text-3xl text-[#57BA98] font-bold mt-6 block"
            />

            <p className="text-gray-600 mt-6 leading-8 max-w-xl">
              {heroData.description}
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
  href="#contact"
  className="
    bg-[#57BA98]
    text-white
    px-7
    py-3
    rounded-xl
    shadow-lg
    hover:bg-[#65CCB8]
    hover:scale-105
    transition
    duration-300
    inline-flex
    items-center
    justify-center
  "
>
  Hire Me
</a>

              <a
  href="#projects"
  className="
    border-2
    border-[#57BA98]
    px-7
    py-3
    rounded-xl
    hover:bg-[#E8F8F3]
    hover:scale-105
    transition
    duration-300
    inline-flex
    items-center
    justify-center
  "
>
  View Projects
</a>

            </div>

            <div className="flex gap-6 text-2xl mt-10 text-gray-700">

              <a
                href={heroData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#57BA98] hover:scale-125 transition"
              >
                <FaGithub />
              </a>

              <a
                href={heroData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#57BA98] hover:scale-125 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={heroData.email}
                className="hover:text-[#57BA98] hover:scale-125 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative flex justify-center items-center">

              {/* Background Glow */}

              <div
                className="
                absolute
                w-[320px]
                h-[320px]
                md:w-[380px]
                md:h-[380px]
                bg-[#65CCB8]
                rounded-full
                blur-3xl
                opacity-25
                "
              ></div>

              {/* Profile Image */}

              <img
                src={profile}
                alt="Profile"
                className="
                relative
                w-[280px]
                h-[280px]
                md:w-[340px]
                md:h-[340px]
                lg:w-[400px]
                lg:h-[400px]
                rounded-full
                object-cover
                border-4
                border-white
                shadow-2xl
                hover:scale-105
                transition
                duration-500
                "
              />

            </div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll Down */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-3xl text-[#57BA98]">

        <a href="#stats">
          ↓
        </a>

      </div>
    </section>
  );
}

export default Hero;