"use client";
import { botMenuItems, menuItems } from "@/data/sideBarData";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";

const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("fullName");
    sessionStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <aside className="flex flex-col justify-center rounded-r-xl h-screen">
      <div
        className={`relative  bg-cyan-950 rounded-r-xl transition-all duration-300 ${
          isOpen ? "w-48" : "w-14"
        } flex flex-col justify-between`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 -right-3 bg-gray-800 text-white p-2 rounded-full border-white border-2"
        >
          {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>

        {/* Centered Top Menu */}
        <div className="flex-1 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center space-x-4 text-white cursor-pointer p-4 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          ))}
        </div>

        {/* Bottom Menu */}
        <div className="border-t border-slate-400">
          {botMenuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="flex items-center space-x-4 text-white cursor-pointer p-4 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && (
                <span className="whitespace-nowrap">{item.label}</span>
              )}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-4 w-full text-white cursor-pointer p-4 rounded-xl hover:bg-gray-700 transition-all duration-300"
          >
            <span className="text-xl">
              <FaSignOutAlt />
            </span>
            {isOpen && <span className="whitespace-nowrap">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
