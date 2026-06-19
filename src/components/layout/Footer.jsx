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

          <h2 className="text-3xl font-bold">
            Varnaja Uthayaraj
          </h2>

          <p className="text-gray-400 mt-3">
            Cybersecurity Enthusiast | Computer Engineer
          </p>

          <div className="flex justify-center gap-8 mt-8">

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