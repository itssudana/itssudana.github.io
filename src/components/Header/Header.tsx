"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { BorderBeam } from "../lightswind/border-beam";
import { useNavigate } from "react-router-dom";
import lightLogo from "../Header/logo-light.svg";
import darkLogo from "../Header/logo-dark.svg";
import lgLight from "../Header/lg-light.svg";
import lgDark from "../Header/lg-dark.svg";
import { ToggleTheme } from "../lightswind/toggle-theme";

// List navigation items
const navItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "CAREER", href: "#career" },
  { name: "WORKS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export function LogoButton({ theme, handleLogoClick }: any) {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onClick={handleLogoClick}
      className="relative w-10 h-10 cursor-pointer select-none"
    >
      <motion.img
        src={theme === "light" ? lightLogo : darkLogo}
        alt="Main Logo"
        className="absolute inset-0 w-full h-full object-contain z-10"
        animate={{
          opacity: isHover ? 0 : 1,
          x: isHover ? 40 : 0,
          y: isHover ? -30 : 0,
          scale: isHover ? 0.8 : 1,
          rotate: isHover ? -15 : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.img
        src={theme === "light" ? lgLight : lgDark}
        alt="Hover Logo"
        className="absolute inset-0 w-full h-full object-contain z-0"
        animate={{
          opacity: isHover ? 1 : 0,
          scale: isHover ? 1.3 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </motion.div>
  );
}

// ✅ Komponen utama Header
export default function Header() {
  const [theme, setTheme] = useState<string>(
  () => localStorage.getItem("theme") || "light"
);

useEffect(() => {
  const updateTheme = () => {
    const newTheme = localStorage.getItem("theme") || "light";
    setTheme(newTheme);
  };

  // Jalankan langsung waktu mount
  updateTheme();

  // Pantau perubahan di localStorage
  window.addEventListener("storage", updateTheme);

  // Pantau perubahan langsung di class html (biar lebih responsif)
  const observer = new MutationObserver(updateTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  return () => {
    window.removeEventListener("storage", updateTheme);
    observer.disconnect();
  };
}, []);

  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollYRef = useRef(0);
  const lenis = useLenis();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(!(currentScrollY > lastScrollYRef.current && currentScrollY > 80));
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400);
    } else if (lenis) lenis.scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => handleScrollTo("#home");

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

            <LogoButton theme={theme} handleLogoClick={handleLogoClick} />

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

            {/* ✅ Ganti tombol theme lama dengan komponen baru */}
            <div className="hidden md:block">
              <ToggleTheme
                animationType="circle-spread"
                className="text-gray-800 dark:text-white"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-800 dark:text-white"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* ✅ Mobile Sidebar */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="fixed inset-0 z-40 w-full bg-background dark:bg-background-dark md:hidden flex flex-col items-start justify-center overflow-hidden px-8"
              >
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-gray-800 dark:text-white"
                >
                  <X size={32} />
                </motion.button>

                {/* ✅ Ganti tombol theme mobile juga */}
                <div className="absolute top-8 left-8">
                  <ToggleTheme
                    animationType="circle-spread"
                    className="text-gray-800 dark:text-white"
                  />
                </div>

                <motion.ul className="flex flex-col space-y-8">
                  {navItems.map((item, index) => (
                    <motion.li key={item.name}>
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

                <div className="flex justify-center w-full mt-12 space-x-6">
                  <a
                    href="https://github.com/itssudana"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={28} className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rainnathapro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={28} className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com/everydynormalguy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={28} className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
