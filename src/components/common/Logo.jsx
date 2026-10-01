import { FaLeaf } from "react-icons/fa";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 group"
    >
      <FaLeaf className="text-[#57BA98] text-2xl sm:text-3xl flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" />

      <div className="flex flex-col leading-none">
        <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-[#57BA98] group-hover:text-[#65CCB8] transition">
          Vee
        </span>

        <span
          className="text-[10px] sm:text-xs italic text-[#57BA98]/80 tracking-wide hidden sm:inline"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Growing Ideas. Building Impact.
        </span>
      </div>
    </a>
  );
}

export default Logo;
