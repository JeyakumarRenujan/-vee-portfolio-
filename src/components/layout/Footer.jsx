import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../common/Container";
import contactData from "../../data/contactData";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-12">
      <Container>

        <div className="text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Varnaja Uthayaraj
          </h2>

          <p className="text-gray-400 mt-2 sm:mt-3 text-sm sm:text-base">
            AI/ML & Software Engineer | Computer Engineering
          </p>

          <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8 flex-wrap text-sm sm:text-base">

            {["Home", "About", "Research", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#65CCB8] transition duration-300"
              >
                {item}
              </a>
            ))}

          </div>

          <div className="flex justify-center gap-6 text-2xl mt-8 text-gray-300">

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
              aria-label="Email"
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

            <p className="text-gray-400 text-xs sm:text-sm">
              © 2026 Vee. All Rights Reserved.
            </p>

          </div>

        </div>

      </Container>
    </footer>
  );
}

export default Footer;