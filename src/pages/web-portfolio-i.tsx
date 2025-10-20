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

export default function WebPortfolioI() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const cards = [
    {
    title: <span className="block text-center text-gray-700 dark:text-white">HOMEPAGES</span>,
    content: (
      <CardContent className="p-0 space-y-4">
        {["/img/portfolio/web1/home1.jpg","/img/portfolio/web1/home2.jpg","/img/portfolio/web1/home3.jpg"].map((src, i) => (
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
            src="/img/portfolio/web1/about.jpg"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">PORTFOLIO</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/web1/portfolio.jpg"
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
            src="/img/portfolio/web1/contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">MOBILE</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/web1/mobile.jpg"
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
              src="/img/portfolio/web1/mainweb.png"
              alt="Clove Dryer App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            PERSONAL PORTFOLIO I 
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
              <a href="https://github.com/itssudana/personal-portfolio-1" className="text-blue-600" target="_blank">
                Website Preview
              </a>
            </span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This project is a personal portfolio website developed using Bootstrap. 
              It is designed with a responsive layout to showcase projects, skills and experiences in a structured and visually appealing way. 
              By utilizing Bootstrap’s grid system and components, the website ensures compatibility across devices and provides a clean, professional presentation for personal branding.
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
              to="/chatbot-n8n"
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
            to="/chatbot-n8n"
            className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
          >
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="sm:text-xl md:text-2xl font-bold">chatbot with n8n</span>
              <span className="sm:text-base md:text-xl font-normal text-muted-foreground">things</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
