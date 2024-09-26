import * as React from "react";
import { FaCog } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { TiDocumentText } from "react-icons/ti";

const menuItems = [
  {
    icon: React.createElement(GoHomeFill),
    label: "Dashboard",
    link: "/admin",
  },
  {
    icon: React.createElement(TiDocumentText),
    label: "Quotation",
    link: "/admin/quotation",
  },
  {
    icon: React.createElement(FaBook),
    label: "Invoice",
    link: "/admin/invoice",
  },
];

const botMenuItems = [
  {
    icon: React.createElement(FaCog),
    label: "Settings",
    link: "#",
  },
];

export { botMenuItems, menuItems };
