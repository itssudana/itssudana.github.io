"use client";

import { useEffect, useState, useRef } from "react";
import type { TouchEvent } from "react";
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

interface CarouselItem {
  src: string;
  title: string;
  desc: string;
}

export default function CloveApp() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // --- Custom Carousel Component ---
  function Carousel({ items }: { items: CarouselItem[] }) {
    const [index, setIndex] = useState<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    const next = () => setIndex((i) => (i + 1) % items.length);
    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const goTo = (i: number) => setIndex(i);

    // Auto-slide
    useEffect(() => {
      timeoutRef.current = setTimeout(next, 4000);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, [index]);

    // Swipe handling
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
      setTouchStartX(e.touches[0].clientX);
    };
    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
      setTouchEndX(e.touches[0].clientX);
    };
    const handleTouchEnd = () => {
      if (touchStartX !== null && touchEndX !== null) {
        const diff = touchStartX - touchEndX;
        if (diff > 50) next();
        else if (diff < -50) prev();
      }
      setTouchStartX(null);
      setTouchEndX(null);
    };

    return (
      <div className="w-full flex flex-col items-center">
        {/* Main Image */}
        <div
          className="w-full md:w-full max-w-[900px] h-auto overflow-hidden rounded-xl shadow-lg mb-4 flex justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={items[index].src}
            alt={items[index].title}
            className="w-auto max-w-full h-auto max-h-[450px] transition-all duration-200"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2">
          {items.map((img: CarouselItem, i: number) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-16 h-16 rounded-md overflow-hidden border ${
                i === index
                  ? "border-blue-500"
                  : "border-gray-300 dark:border-gray-600 filter grayscale opacity-50"
              }`}
            >
              <img src={img.src} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  const cards = [
    {
      title: <span className="text-gray-700 dark:text-white">PROJECT OVERVIEW</span>,
      content: (
        <CardContent className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Gambar */}
          <div className="md:col-span-1">
            <img
              src="/img/portfolio/pawspective/tapp.jpg"
              alt="Clove App"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Deskripsi */}
          <div className="md:col-span-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p>
              PawSpective is a lightweight mobile application designed to deliver curated dog facts through a clean, modern and visually consistent interface. The app focuses on simplicity and aesthetics, combining smooth typography, subtle animations and optimized image handling to create an enjoyable daily-experience for dog enthusiasts. 
              Users can refresh a new fact instantly, save their favorite facts and generate beautifully formatted shareable quote cards directly from the app. Built with a modular architecture, PawSpective leverages the React Native ecosystem powered by Expo, TypeScript for safer development and custom UI components tailored for performance and clarity.
              Image optimization, skeleton loading states, animated interactions and local data persistence enhance both functionality and user experience. 
            </p>
          </div>

          {/* Lanjutan deskripsi di bawah gambar (full width) */}
          <div className="md:col-span-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed mt-1">
            <p>
              This project demonstrates practical mobile engineering practices such as API abstraction, reusable hooks, efficient rendering, and native device capability integrations such as sharing and media library access. The app is designed to scale easily, allowing new features or integrations to be added with minimal effort. 
              Its polished UI and thoughtful interaction patterns ensure that users enjoy a smooth, intuitive and engaging experience every time they open the app.
            </p>
          </div>
        </CardContent>
      ),
    },
    {
      title: <span className="text-gray-700 dark:text-white">UI/UX</span>,
      content: (
        <CardContent className="flex flex-col">
          {/* Carousel */}
          <Carousel
            items={[
              { src: "/img/portfolio/pawspective/1.png", title: "UI/UX", desc: "Welcome" },
              { src: "/img/portfolio/pawspective/2.png", title: "UI/UX", desc: "Overview" },
              { src: "/img/portfolio/pawspective/3.png", title: "UI/UX", desc: "App Features" },
              { src: "/img/portfolio/pawspective/4.png", title: "UI/UX", desc: "Favorite Screen" },
            ]}
          />

          {/* Deskripsi di bawah carousel */}
          <div className="mt-4 text-gray-700 dark:text-gray-300 text-base px-2 md:px-0">
            The main user interface is structured into several focused screens. The <strong>splash screen </strong>appears briefly on launch, presenting the app’s identity through a clean visual and custom typography before transitioning into the user environment. The <strong>home screen </strong>serves as the core interaction point, displaying a randomly generated dog fact paired with an accompanying dog image. Users can refresh the content, generate a shareable quote card, or save the current fact to their favorites all through clearly arranged, accessible controls.
            The <strong>favorites screen </strong>provides an organized collection of previously saved dog facts, each displayed in a compact card layout for easy browsing. Users can review their saved items or remove entries seamlessly. The about screen offers a minimal overview of the app, its purpose and the technologies behind it. Navigation remains consistent across the UI, with simple gestures, clear hierarchy and a lightweight visual style to ensure comfort and clarity throughout the user journey.
          </div>
        </CardContent>
      )
    }
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
              src="/img/portfolio/pawspective/main.jpg"
              alt="Clove Dryer App"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            PAWSPECTIVE APPLICATION
          </h1>
          <hr className="border-t-3 border-gray-300 dark:border-gray-700 my-6" />
        </header>

        {/* Info & Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-x-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">CATEGORY</span>
            <span>App <br />
            UI/UX Design<br />
            Entertainment</span>

            <span className="font-semibold">YEAR</span>
            <span>2025</span>

            <span className="font-semibold">CLIENT</span>
            <span>-</span>

            <span className="font-semibold">PROJECT URL</span>
            <span>
              <a href="https://everydynormalguy.gumroad.com/l/pawspectiveapp" className="text-blue-600" target="_blank">
                App Demo
              </a>
            </span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              PawSpective is a minimalist mobile experience designed to deliver delightful dog facts in a clean, visually crafted interface. 
              The app focuses on simplicity and readability combining custom typography, soft card components and smooth animations to create a lightweight but expressive user experience. 
              Each interaction is designed to feel intuitive, from refreshing new facts to generating aesthetically framed quote cards.
            </p>
          </div>
        </div>

        {/* Render Cards dengan nomor halaman otomatis */}
        {cards.map((card, index) => (
        <Card key={index} className="mb-3 hoverable bordered relative flex flex-col">
            <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            {/* Garis di bawah judul */}
            <hr className="mt-4 w-full flex justify-center border-gray-300 dark:border-gray-700 w-11/12 mx-auto" />
            </CardHeader>

            {/* Konten card */}
            <div className="flex-1">
            {card.content}
            </div>

            {/* Garis di atas nomor halaman */}
            <div className="mt-4 w-full flex justify-center">
            <hr className="border-gray-300 dark:border-gray-700 w-11/12 mx-auto pt-2" />
            </div>

            {/* Nomor halaman di pojok kanan bawah */}
            <div className="mt-1 mb-5 text-right text-gray-500 text-sm pr-10">
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
              to="/clove-dryer"
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
            to="/clove-dryer"
            className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
          >
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="sm:text-xl md:text-2xl font-bold">clove dryer machine</span>
              <span className="sm:text-base md:text-xl font-normal text-muted-foreground">things</span>
            </div>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
