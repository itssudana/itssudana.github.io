"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, MotionProps } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { BorderBeam } from "../lightswind/border-beam";
import { useNavigate } from "react-router-dom";
import lightLogo from "../Header/logo-light.svg";
import darkLogo from "../Header/logo-dark.svg";

// List navigation items
const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "CAREER", href: "#career" },
  { name: "WORKS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const handleLenisScroll = () => {};
    lenis.on("scroll", handleLenisScroll);
    return () => {
      lenis.off("scroll", handleLenisScroll);
    };
  }, [lenis]);

  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const handleScrollTo = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    } else {
      if (lenis) lenis.scrollTo(id);
    }
    setIsMobileMenuOpen(false);
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1200px at 90% 5%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(20px at 90% 5%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { y: { stiffness: 1000, velocity: -100 } },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { y: { stiffness: 1000 } },
    },
  };

  // ✨ Variants untuk animasi ikon sosial
  const socialVariants: Variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.6 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const iconVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
    },
  };

  const handleLogoClick = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector("#home");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    } else {
      if (lenis) lenis.scrollTo("#home");
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div
            className="border border-gray-100 dark:border-gray-900 backdrop-blur-xl
              w-full xl:max-w-6xl rounded-full
              flex items-center justify-between px-6 py-3
              transition-all duration-300"
          >
            <BorderBeam />

            {/* Logo */}
            <a
              onClick={handleLogoClick}
              className="cursor-pointer font-bold text-lg w-8 h-8 inline-block"
            >
              <img
                src={lightLogo}
                alt="Logo Light"
                className="block dark:hidden w-full h-full"
              />
              <img
                src={darkLogo}
                alt="Logo Dark"
                className="hidden dark:block w-full h-full"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    className="relative group text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors"
                  >
                    <a
                      onClick={() => handleScrollTo(item.href)}
                      className="cursor-pointer hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      {item.name}
                    </a>
                    <motion.span
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle (desktop) */}
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-sm font-semibold hover:bg-blue-400 dark:hover:bg-blue-800 transition-colors hidden md:block"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} className="text-gray-800 dark:text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} className="text-gray-800 dark:text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-800 dark:text-white"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: menuVariants,
                } as MotionProps)}
                className="fixed inset-0 z-40 w-full max-w-full bg-background dark:bg-background-dark md:hidden flex flex-col items-start justify-center overflow-hidden px-8"
              >
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-gray-800 dark:text-white"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <X size={32} />
                </motion.button>

                <motion.button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="absolute top-8 left-8 p-2 rounded-full text-gray-800 dark:text-white"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                <motion.ul
                  {...({ variants: listVariants } as MotionProps)}
                  className="flex flex-col space-y-8"
                >
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      {...({ variants: itemVariants } as MotionProps)}
                    >
                      <a
                        onClick={() => handleScrollTo(item.href)}
                        className="flex items-center text-4xl font-bold text-gray-800 dark:text-white cursor-pointer space-x-3"
                      >
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {`0${index + 1}`}
                        </span>
                        <span>{item.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* 🔹 Animated Social Icons */}
                <motion.div
                  variants={socialVariants}
                  className="flex justify-center w-full mt-12 space-x-6"
                >
                  <motion.a
                    variants={iconVariants}
                    href="https://github.com/itssudana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github
                      size={28}
                      className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                    />
                  </motion.a>
                  <motion.a
                    variants={iconVariants}
                    href="https://linkedin.com/in/rainnathapro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin
                      size={28}
                      className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                    />
                  </motion.a>
                  <motion.a
                    variants={iconVariants}
                    href="https://instagram.com/everydynormalguy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram
                      size={28}
                      className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
