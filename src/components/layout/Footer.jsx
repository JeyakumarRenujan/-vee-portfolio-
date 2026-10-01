import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../common/Container";
import contactData from "../../data/contactData";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>

        <div className="text-center">

          <h2 className="text-2xl sm:text-3xl font-bold">
            Varnaja Uthayaraj
          </h2>

          <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
            AI/ML & Software Engineer | Computer Engineering
          </p>

          <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 flex-wrap text-sm sm:text-base">

            <a
              href="#home"
              className="hover:text-[#65CCB8] transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-[#65CCB8] transition duration-300"
            >
              About
            </a>

            <a
              href="#research"
              className="hover:text-[#65CCB8] transition duration-300"
            >
              Research
            </a>

            <a
              href="#skills"
              className="hover:text-[#65CCB8] transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-[#65CCB8] transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-[#65CCB8] transition duration-300"
            >
              Contact
            </a>

          </div>

          <div className="flex justify-center gap-6 text-2xl mt-8">

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="
                hover:text-[#65CCB8]
                hover:scale-110
                transition
                duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="
                hover:text-[#65CCB8]
                hover:scale-110
                transition
                duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href={`mailto:${contactData.email}`}
              className="
                hover:text-[#65CCB8]
                hover:scale-110
                transition
                duration-300
              "
            >
              <FaEnvelope />
            </a>

          </div>

          <div className="border-t border-[#57BA98]/20 mt-10 pt-6">

            <p className="text-gray-400">
              © 2026 Vee. All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;