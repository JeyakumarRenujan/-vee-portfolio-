import { useState, useEffect } from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    "Home",
    "About",
    "Research",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.toLowerCase());
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 pointer-events-none">
      <Container>
        {/* Floating Glossy iOS Pill aligned with content */}
        <nav
          className="
            pointer-events-auto
            w-full
            h-14 sm:h-16
            px-4 sm:px-6
            flex items-center justify-between
            rounded-full
            bg-white/75
            backdrop-blur-2xl
            border
            border-white/80
            shadow-[0_12px_36px_rgba(87,186,152,0.12),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.95)]
            transition-all
            duration-300
          "
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Menu with iOS Active Pill */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-xs xl:text-sm">
            {navLinks.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <li key={item}>
                  <a
                    href={`#${id}`}
                    onClick={() => setActiveSection(id)}
                    className={`
                      px-3 xl:px-3.5
                      py-1.5
                      rounded-full
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[#57BA98]/20 text-[#57BA98] font-semibold shadow-xs"
                          : "text-[#2D3748] hover:text-[#57BA98] hover:bg-white/60"
                      }
                    `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Glossy Resume Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/resume/Varnaja_Uthayaraj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5
                px-4 xl:px-5
                py-2
                text-xs xl:text-sm
                font-semibold
                rounded-full
                bg-gradient-to-r from-[#57BA98] to-[#489F82]
                text-white
                shadow-[0_4px_14px_rgba(87,186,152,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)]
                hover:shadow-[0_6px_20px_rgba(87,186,152,0.45)]
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
              "
            >
              <FaDownload className="text-xs" />
              Resume
            </a>
          </div>

          {/* Mobile Actions: Resume + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/resume/Varnaja_Uthayaraj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5
                px-3 py-1.5
                text-xs font-semibold
                rounded-full
                bg-gradient-to-r from-[#57BA98] to-[#489F82]
                text-white
                shadow-sm
              "
            >
              <FaDownload className="text-[10px]" />
              Resume
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation Menu"
              className="
                w-9 h-9
                rounded-full
                bg-[#EDF8F5]
                text-[#57BA98]
                hover:bg-[#57BA98]
                hover:text-white
                transition-colors
                flex items-center justify-center
                text-base
              "
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div
            className="
              pointer-events-auto
              mt-2
              w-full max-w-sm
              mx-auto
              rounded-3xl
              bg-white/90
              backdrop-blur-2xl
              shadow-[0_15px_40px_rgba(87,186,152,0.15),inset_0_1px_1px_rgba(255,255,255,0.95)]
              border border-white/80
              p-5
            "
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => {
                const id = item.toLowerCase();
                const isActive = activeSection === id;

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    onClick={() => {
                      setActiveSection(id);
                      setMenuOpen(false);
                    }}
                    className={`
                      px-4 py-2
                      rounded-2xl
                      text-sm font-medium
                      transition-all
                      ${
                        isActive
                          ? "bg-[#57BA98]/20 text-[#57BA98] font-semibold"
                          : "text-[#2D3748] hover:text-[#57BA98] hover:bg-white/60"
                      }
                    `}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
