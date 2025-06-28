import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 transition"
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 transition"
      >
        About
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 transition"
      >
        Projects
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 transition"
      >
        Contact
      </Link>
    </>
  );

  return (
    <div className="relative ">
      {/* Fixed navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#1c1f26]  text-[#C4CFDE] shadow-md main-font">
        <div className="  container xl:w-9/12 mx-auto flex justify-between items-center px-6 py-6">
          {/* Logo */}
          <img src="/logo.png" alt="" className="w-15" />
         

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6">{links}</nav>

          <button className= " text-[18px] border text-pink-600 bg-[#24272e] px-6 py-3 rounded-xl shadow-lg  hidden md:flex">Resume</button>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(true)} className="md:hidden">
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Overlay when mobile drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-black">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4 text-black">{links}</div>
      </div>
    </div>
  );
};

export default Navbar;
