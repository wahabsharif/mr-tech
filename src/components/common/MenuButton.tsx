"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./LogoutButton";

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 bg-thRed text-white dark:text-gray-900 rounded-md focus:outline-none"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isOpen && ( // Render the menu only when isOpen is true
        <div
          className={`absolute left-0 w-full transition-transform duration-300 transform ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } z-10`}
          style={{ bottom: "100%" }}
        >
          <ul className="flex flex-col items-center p-4 space-y-2">
            <li className="transition">
              <ThemeToggle />
            </li>
            <li className="transition">
              <LogoutButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
