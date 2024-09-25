"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center justify-center p-2 text-lg bg-gray-800 rounded text-gray-200 dark:bg-gray-200 dark:text-gray-800"
    >
      {theme === "light" ? (
        <>
          <FaMoon />
        </>
      ) : (
        <>
          <IoSunny className="text-xl" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
