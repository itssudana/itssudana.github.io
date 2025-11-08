"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header/Header";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "../components/lightswind/card";

export default function CR7() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const cards = [
    {
    title: <span className="block text-center text-gray-700 dark:text-white">HOMEPAGES</span>,
    content: (
      <CardContent className="p-0 space-y-4">
        {["/img/portfolio/web2/home1.jpg","/img/portfolio/web2/home2.jpg"].map((src, i) => (
          <div key={i} className="aspect-video w-full rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`Homepage ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">ABOUT</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/web2/about.jpg"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">WORKS</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/web2/works.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">CONTACT</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/web2/contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">DARK THEME</span>,
    content: (
      <CardContent className="p-0 space-y-4">
        {["/img/portfolio/web2/d-home1.jpg","/img/portfolio/web2/d-works.jpg","/img/portfolio/web2/d-about.jpg"].map((src, i) => (
          <div key={i} className="aspect-video w-full rounded-lg overflow-hidden">
            <img
              src={src}
              alt={`DarkMode ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">MOBILE</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/web2/mobile.jpg"
            alt="Mobile"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },

  ];

  return (
    <motion.div
      className="min-h-screen bg-background"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <Header />

      <div className="px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto pb-32 md:pb-16">

        {/* Foto Utama */}
        <div className="w-full mb-8">
          <div className="aspect-[1.91/1] w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/portfolio/web2/maincr7.jpg"
              alt="CR7"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            CRISTIANO RONALDO FANSPAGE
          </h1>
          <hr className="border-t-3 border-gray-300 dark:border-gray-700 my-6" />
        </header>

        {/* Info & Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-x-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">CATEGORY</span>
            <span>Web <br />
            Personal Portfolio<br />
            Web Design</span>

            <span className="font-semibold">YEAR</span>
            <span>2025</span>

            <span className="font-semibold">CLIENT</span>
            <span>-</span>

            <span className="font-semibold">PROJECT URL</span>
            <span>
              <a href="https://rainnathasudana.github.io/cr7fanspage.github.io/index.html" className="text-blue-600" target="_blank">
                Website Demo
              </a>
            </span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This project is a responsive fan website for Cristiano Ronaldo, showcasing his career, achievements and global impact through curated content such as biography, highlights, statistics and image galleries. 
              Built with HTML, CSS and JavaScript, it delivers a clean design, user-friendly navigation and cross-device accessibility while reflecting both technical web development skills and passion for one of football’s greatest icons.
            </p>
          </div>
        </div>

        {/* Render Cards dengan nomor halaman otomatis */}
        {cards.map((card, index) => (
          <Card 
            key={index} 
            className="mb-4 hoverable bordered relative flex flex-col"
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>

            {/* Konten card */}
            <div className="flex-1">
              {card.content}
            </div>

            {/* Nomor halaman di pojok kanan bawah */}
            <div className="mt-4 mb-4 text-right text-sm pr-10 text-gray-500 dark:text-gray-400">
              {index + 1} / {cards.length}
            </div>
          </Card>
        ))}


        {/* Next Project + Judul Selanjutnya */}
        <div className="flex justify-between items-baseline mt-16 pb-16 md:pb-0">
          {/* Next Project */}
          <motion.div
            className="relative"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <Link
              to="/network-adm"
              className="flex items-center gap-2 relative -translate-x-6"
            >
              <motion.span
                className="flex items-center gap-2 absolute left-0 opacity-0 font-bold text-gray-700 dark:text-white"
                variants={{
                  rest: { x: -12, opacity: 0 },
                  hover: { x: 0, opacity: 1 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <ArrowRight size={24} strokeWidth={3} className="w-6 h-6" />
              </motion.span>

              <motion.span
                className="pl-6 text-gray-700 dark:text-white sm:text-xl md:text-2xl font-bold leading-tight"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 12 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12
                }}
              >
                next project
              </motion.span>
            </Link>
          </motion.div>

          {/* Judul Project Selanjutnya */}
          <Link
            to="/network-adm"
            className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
          >
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="sm:text-xl md:text-2xl font-bold">network administrator</span>
              <span className="sm:text-base md:text-xl font-normal text-muted-foreground">things</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
