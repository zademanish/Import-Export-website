import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/logo3.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "#home" },
  { id: 2, title: "Services", path: "#services" },
  { id: 3, title: "About Us", path: "#about" },
  { id: 4, title: "Our Team", path: "#team" },
  { id: 5, title: "Contact Us", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container flex justify-between md:py-0"
      >
        <div className="relative w-40 h-40">
          <img
            src={logo}
            className="top-[-26px] left-12 scale-150 absolute w-full h-full object-cover z-999"
            alt="logo"
          />
        </div>
        <div className="mt-8">
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className="inline-block py-2 px-3 font-bold hover:text-secondary relative group"
                  >
                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    {menu.title}
                  </a>
                </li>
              ))}
              <button className="primary-btn">Sign In</button>
            </ul>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <IoMdMenu className="text-4xl" onClick={toggleMenu} />
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-60 bg-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <IoMdClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="flex flex-col items-start p-5 space-y-4">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.path}
                className="text-lg font-medium hover:text-secondary"
                onClick={toggleMenu} // Close menu after click
              >
                {menu.title}
              </a>
            </li>
          ))}
          <button className="secondary-btn w-full mt-4">Sign In</button>
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
