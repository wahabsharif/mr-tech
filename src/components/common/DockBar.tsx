"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link"; // Import Link from next/link
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";
import MenuButton from "./MenuButton";

const dockItems = [
  { icon: <GoHomeFill />, title: "Home", href: "/" },
  { icon: <TiDocumentText />, title: "Quotation", href: "/quotation" },
  { icon: <FaFileInvoiceDollar />, title: "Invoice", href: "/invoice" },
  { icon: <MenuButton /> },
];

const DockBar: React.FC = () => {
  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white dark:bg-black flex justify-around rounded-full items-center p-2
        w-80 md:w-96 lg:w-112 xl:w-128"
    >
      {dockItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.4 }}
        >
          {item.href ? ( // Check if href exists
            <Link href={item.href} className="flex flex-col items-center">
              <div className="text-xl md:text-2xl lg:text-3xl">{item.icon}</div>
              <span className="text-xs md:text-sm lg:text-base capitalize">
                {item.title}
              </span>
            </Link>
          ) : (
            <div className="flex flex-col items-center">
              <div className="text-xl md:text-2xl lg:text-3xl">{item.icon}</div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default DockBar;
