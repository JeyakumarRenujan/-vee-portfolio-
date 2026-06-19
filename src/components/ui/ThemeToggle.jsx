
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {

  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem("theme") === "dark";

  });

  useEffect(() => {

    if (darkMode) {

      document.documentElement.classList.add("dark");

      localStorage.setItem("theme", "dark");

    }

    else {

      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");

    }

  }, [darkMode]);

  return (

    <button

      onClick={() => setDarkMode(!darkMode)}

      className="
        p-2
        rounded-lg
        border
        hover:bg-orange-50
        transition
      "

    >

      {darkMode ? <FaSun /> : <FaMoon />}

    </button>

  );

}

export default ThemeToggle;

