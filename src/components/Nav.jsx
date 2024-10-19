import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";

import logo from "../assets/icon.jpg";
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  const navItems = [
    {
      title: "من نحن",
      // link: "#",
      path: "/about",
    },

    {
      title: "الفئات",
      path: "/categories",
    },

    {
      title: "الرئيسية",
      path: "/",
    },
    {
      title: "الأسئلة الشائعة",
      path: "/faq",
    },
  ];
  return (
    <>
      <header className="w-full md:bg-transparent fixed top-0 left-0 right-0 shadow-md z-50">
        <nav
          className={`py-4 lg:px-14 px-4 ${
            isSticky
              ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
              : ""
          }`}
        >
          <div className="flex justify-evenly items-center text-base font-semibold gap-8">
            {/* nav items for large screen  */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ path, title }) => (
                <Link
                  key={path}
                  to={path}
                  spy="true"
                  smooth="true"
                  className="block text-base text-amenah_blue hover:text-amenah_pink "
                >
                  {title}
                </Link>
              ))}
            </ul>

            <Link to="/">
              <div className="text-2xl font-bold flex items-center space-x-3 ">
                {" "}
                <span className="text-amenah_blue pt-2 hover:text-amenah_pink">
                  آمِنَة
                </span>
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 inline-block items-center"
                />
              </div>
            </Link>
            {/* mobile menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className=" text-amenah_blue focus:outline-none focus:text-amenah_mint"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-6 w-6 text-amenah_blue" />
                ) : (
                  <FaBars className="h-6 w-6 text-amenah_blue" />
                )}
              </button>
            </div>
          </div>

          {/* mobile menu items  */}
          <div
            className={`space-y-4 px-9 mt-16 py-7 font-semibold bg-amenah_mint text-right ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            }`}
          >
            {navItems.map(({ path, title }) => (
              <Link
                key={path}
                to={path}
                spy="true"
                smooth="true"
                // offset={-100}
                className="block text-base text-amenah_blue hover:text-amenah_pink "
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
