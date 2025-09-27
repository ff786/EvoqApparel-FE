import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RiUser3Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import evoqLogo from "../assets/evoq-brown.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-12 lg:px-20 py-4  shadow-md z-30">
        {/* Navigation Menu */}
        <div onClick={toggleSidebar} className="p-2">
          <HiOutlineMenuAlt4 size={30} className="cursor-pointer" />
        </div>

        {/* Logo & Name */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src={evoqLogo} alt="Evoq Logo" className="w-12" />
          <p className="text-xl font-semibold hidden sm:block">Evoq Apparel</p>
        </div>

        {/* Cart and Profile */}
        <div className="flex items-center gap-4">
          <FaShoppingBag size={25} className="cursor-pointer" />
          <RiUser3Fill size={25} className="cursor-pointer" />
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sideBar && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-background/20 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] sm:w-[500px] lg:w-[600px] bg-primary text-white z-30 transform transition-transform duration-300 ${
          sideBar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-8">
          <button onClick={toggleSidebar} className="text-4xl">
            ✕
          </button>
        </div>

        {/* Sidebar content */}
        <ul className="flex flex-col gap-6 text-lg mt-8 items-center">
          <li
            className="cursor-pointer hover:underline text-2xl"
            onClick={() => {
              navigate("/");
              toggleSidebar();
            }}
          >
            Home
          </li>
          <li onClick={toggleSidebar} className="cursor-pointer hover:underline text-2xl">Shop</li>
          <li onClick={toggleSidebar} className="cursor-pointer hover:underline text-2xl">About</li>
          <li onClick={toggleSidebar} className="cursor-pointer hover:underline text-2xl">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
