
import { useState } from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white/70
      backdrop-blur-xl
      border-b
      border-[#E8F8F3]
      shadow-sm
      "
    >
      <Container>

        <nav className="flex h-20 items-center justify-between">

          <Logo />

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  text-[#2D3748]
                  font-medium
                  transition
                  duration-300
                  hover:text-[#57BA98]
                  "
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

          {/* Desktop Resume */}

          <div className="hidden lg:flex items-center gap-4">

            <a
              href="/resume/Varnaja_Uthayaraj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-2
              px-6
              py-2.5
              rounded-full
              bg-[#57BA98]
              text-white
              shadow-md
              hover:bg-[#65CCB8]
              hover:scale-105
              transition
              duration-300
              "
            >
              <FaDownload />
              Resume
            </a>

          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            lg:hidden
            text-3xl
            text-[#57BA98]
            "
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </nav>

        {/* Mobile Menu */}

        {menuOpen && (

          <div
            className="
            lg:hidden
            mt-2
            rounded-3xl
            bg-white/90
            backdrop-blur-xl
            shadow-lg
            border
            border-[#E8F8F3]
            p-6
            "
          >

            <div className="flex flex-col gap-5">

              {navLinks.map((item) => (

                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="
                  text-[#2D3748]
                  font-medium
                  hover:text-[#57BA98]
                  transition
                  "
                >
                  {item}
                </a>

              ))}

              <a
                href="/resume/Varnaja_Uthayaraj_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                mt-2
                flex
                justify-center
                items-center
                gap-2
                bg-[#57BA98]
                text-white
                py-3
                rounded-full
                hover:bg-[#65CCB8]
                transition
                "
              >
                <FaDownload />
                Resume
              </a>

            </div>

          </div>

        )}

      </Container>
    </header>
  );
}

export default Navbar;

