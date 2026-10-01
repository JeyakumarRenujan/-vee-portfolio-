import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Container from "../common/Container";
import contactData from "../../data/contactData";

function Footer() {
  return (
    <footer className="ios-glass-footer py-12 text-[#2D3748] mt-12">
      <Container>

        <div className="text-center">

          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3748]">
            Varnaja Uthayaraj
          </h2>

          <p className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">
            AI/ML & Software Engineer | Computer Engineering
          </p>

          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 flex-wrap text-xs sm:text-sm">

            {["Home", "About", "Research", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3.5 py-1.5 rounded-full text-gray-600 hover:text-[#57BA98] hover:bg-white/80 transition-all font-medium"
              >
                {item}
              </a>
            ))}

          </div>

          <div className="flex justify-center gap-4 text-xl mt-8">

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="ios-glossy-icon-btn w-10 h-10 rounded-full text-lg"
            >
              <FaGithub className="relative z-10" />
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="ios-glossy-icon-btn w-10 h-10 rounded-full text-lg"
            >
              <FaLinkedin className="relative z-10" />
            </a>

            <a
              href={`mailto:${contactData.email}`}
              aria-label="Email"
              className="ios-glossy-icon-btn w-10 h-10 rounded-full text-lg"
            >
              <FaEnvelope className="relative z-10" />
            </a>

          </div>

          <div className="border-t border-[#57BA98]/15 mt-10 pt-6">

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