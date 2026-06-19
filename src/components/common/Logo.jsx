
import { FaLeaf } from "react-icons/fa";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2"
    >
      <FaLeaf className="text-[#57BA98] text-3xl flex-shrink-0" />

      <div className="flex flex-col leading-none">

        <span className="text-3xl font-extrabold tracking-wide text-[#57BA98] hover:text-[#65CCB8] transition">
          Vee
        </span>

        <span
          className="text-2x italic text-[#57BA98]/80 tracking-wide"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Growing Ideas. Building Impact.
        </span>

      </div>
    </a>
  );
}

export default Logo;

