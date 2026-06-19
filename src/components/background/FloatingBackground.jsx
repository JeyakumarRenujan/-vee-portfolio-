
import { motion } from "framer-motion";

import leaf from "../../assets/floating/leaf.svg";
import daisy1 from "../../assets/floating/daisy1.svg";
import daisy2 from "../../assets/floating/daisy2.svg";
import miniDaisy from "../../assets/floating/mini_daisy.svg";
import smallDaisy from "../../assets/floating/small_daisy.svg";
import tinyDaisy from "../../assets/floating/tiny_daisy.svg";
import petal from "../../assets/floating/petal.svg";
import sparkle from "../../assets/floating/sparkle.svg";
import butterfly2 from "../../assets/floating/butterfly2.svg";

const assets = [
  leaf,
  leaf,
  

  daisy1,
  daisy2,
  
  miniDaisy,
  
  smallDaisy,
  tinyDaisy,

  petal,
  petal,
  petal,
  petal,
  petal,



  sparkle,
  sparkle,
  

  butterfly2,
];

const floatingItems = Array.from({ length: 55 }, (_, index) => ({
  id: index,

  image: assets[Math.floor(Math.random() * assets.length)],

  left: Math.random() * 100,

  top: Math.random() * 100,

  size: 12 + Math.random() * 18,

  duration: 18 + Math.random() * 18,

  delay: Math.random() * 8,
}));

function FloatingBackground() {
  return (
    <div
      className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      z-0
      "
    >
      {floatingItems.map((item) => (
        <motion.img
          key={item.id}
          src={item.image}
          alt=""
          className="absolute select-none"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: `${item.size}px`,
            opacity: 0.12,
          }}
          animate={{
            x: [-30, 30, -20, 20, -30],
            y: [-25, 25, -35, 20, -25],
            rotate: [-10, 15, -8, 10, -10],
            scale: [0.9, 1.1, 0.95, 1.15, 0.9],
            opacity: [0.10, 0.35, 0.20, 0.40, 0.10],
          }}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            delay: item.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingBackground;
