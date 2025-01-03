import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

export default function Darkmode() {
  // Retrieve the theme from local storage, or default to "dark"
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  useEffect(() => {
    // Update the class on the root element
    document.documentElement.classList.toggle("light", theme === "light");

    // Save the current theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={switchTheme}
      className="text-gray-500 dark:text-gray-50 hover:text-gray-900 transition duration-300 dark:hover:text-yellow-500"
      style={{ position: "absolute", right: "0", paddingRight: "5px" }}
    >
      {theme === "dark" ? <BsSunFill /> : <FaMoon />}
    </button>
  );
}
