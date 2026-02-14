import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo2 from '../../Assets/logo-2.png'
export function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // On home page, scrolled = after hero
      if (location.pathname === "/" || location.pathname === "/about" || location.pathname === "/contactUs" || location.pathname === "/tours" || location.pathname === "/experiences") {
        // setScrolled(window.scrollY >= window.innerHeight);
        setScrolled(window.scrollY >= 100);
      } else {
        // On all other pages, consider like nav is always "scrolled", so giving white
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Experiences in Sri Lanka", path: "/experiences" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contactUs" },
  ];

  return (
    <Navbar
      fluid
      className={`fixed top-0 left-0 z-50 w-full  transition-all duration-300 ${scrolled ? "bg-[#172671]! shadow-sky-500/50  shadow-xl/20!" : "bg-transparent"} sm:px-10 lg:px-16! sm:py-5!`}
      theme={{
        root: {
          base: ` ${scrolled ? 'border-0' : '  md:border-b  border-gray-300/30!'} bg-transparent dark:bg-transparent`,
        },
        link: {
          base: "text-lg font-medium transition-colors duration-300",
          active: {
            on: "text-blue-500!",
            off: "text-white hover:text-blue-500",
          },
        },
      }}
    >
      <NavbarBrand href="/">
        <img
          src={logo2}
          className="pointer-events-auto mr-3 h-12! sm:h-9"
          alt="Logo"
        />
      </NavbarBrand>

      <div className="pointer-events-auto flex gap-2 md:order-2">

        <a href="/contactUs">
          <Button
            color="blue"
            className="h-8 cursor-pointer rounded-2xl px-3 text-xs transition-colors duration-300 outline-none! bg-blue-800/90! hover:bg-blue-900! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-10 md:px-5 md:text-sm lg:px-5 lg:text-base!"
          >
            Book Now
          </Button>
        </a>
        <NavbarToggle className=" text-white dark:text-gray-300!" />
      </div>

      <NavbarCollapse className="pointer-events-auto">
        {navItems.map((item) => {
          return (
            <NavbarLink
              key={item.path}
              href={item.path}
              className={` text-sm lg:text-base! text-white!  hover:text-[#FFC000]!`}
            >
              {item.name}
            </NavbarLink>
          );
        })}


      </NavbarCollapse>
    </Navbar>
  );
}
