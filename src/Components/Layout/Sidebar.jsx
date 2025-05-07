// src/components/Sidebar.js
import React, { useState } from "react";
import {
  FiGrid,
  FiActivity,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiUser,
} from "react-icons/fi";
import { FaDiscord, FaTwitter, FaRedditAlien, FaTelegramPlane } from "react-icons/fa";
import { Tooltip } from "react-tooltip";

const menuItems = [
  { label: "Dashboard", icon: <FiGrid /> },
  { label: "Add Liquidity", icon: <FiActivity /> },
  { label: "Your Wallet", icon: <FiUser /> },
  { label: "Settings", icon: <FiSettings /> },
];

const socialLinks = [
  { icon: <FaTelegramPlane />, label: "Telegram" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaDiscord />, label: "Discord" },
  { icon: <FaRedditAlien />, label: "Reddit" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } bg-gradient-to-b from-[#0a0f1c] to-[#121c2f] h-screen text-white p-4 duration-300 flex flex-col justify-between`}
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <div className="bg-[#1e2b4d] p-2 rounded-full">
            <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
          </div>
          {!collapsed && <h1 className="text-xl font-bold">Thor</h1>}
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              data-tooltip-id={`tooltip-${index}`}
              data-tooltip-content={item.label}
              data-tooltip-place="right"
              className="flex items-center gap-3 hover:bg-[#2a3552] p-2 rounded-md cursor-pointer group relative"
            >
              <span className="text-xl">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
              {collapsed && <Tooltip id={`tooltip-${index}`} />}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        {/* Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 hover:bg-[#2a3552] p-2 rounded-md"
        >
          {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
          {!collapsed && <span>Collapse Sidebar</span>}
        </button>

        {/* Social Icons */}
        <div className="flex justify-center gap-3">
          {socialLinks.map((social, i) => (
            <div
              key={i}
              data-tooltip-id={`social-tooltip-${i}`}
              data-tooltip-content={social.label}
              data-tooltip-place="top"
              className="text-xl cursor-pointer hover:text-blue-400"
            >
              {social.icon}
              <Tooltip id={`social-tooltip-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
