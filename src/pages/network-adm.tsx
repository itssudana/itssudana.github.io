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


export default function NetworkAdmin() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const cards = [
  // --- CARD 1 : OVERVIEW ---
  {
    title: <span className="text-gray-700 dark:text-white text-center block">ROLE HIGHLIGHTS</span>,
    content: (
        <CardContent className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Gambar */}
        <div className="flex justify-center">
            <img
            src="/img/portfolio/net-adm/hero.jpg"
            alt="Network Overview"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
        </div>

        {/* Deskripsi */}
        <div className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            <p>
            In the day-to-day life of a Network Administrator, <strong>configuring</strong> routers, switches and servers forms the foundation of the organization’s IT infrastructure. Continuous <strong>monitoring</strong> ensures optimal performance, tracking uptime, bandwidth and critical system metrics. Maintaining <strong>security</strong> is vital, as implementing firewall rules and access policies protects sensitive data. Whenever challenges arise, <strong>troubleshooting</strong> allows for rapid resolution of network issues. This careful orchestration of setup, vigilance, protection and problem solving ensures that the network operates reliably, securely and efficiently, empowering every team within the organization to perform at their best.
            </p>
        </div>
        </CardContent>
    ),
    },
  // --- CARD 2 : JOURNEY ---
  {
    title: <span className="text-gray-700 dark:text-white text-center block">DAILY WORKFLOW</span>,
    content: (
        <CardContent className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
            { step: "01", title: "Setup", desc: "Configure devices & servers", src: "/img/portfolio/net-adm/1.jpg" },
            { step: "02", title: "Monitor", desc: "Ensure performance & uptime", src: "/img/portfolio/net-adm/2.jpg" },
            { step: "03", title: "Troubleshoot", desc: "Identify & fix network issues", src: "/img/portfolio/net-adm/3.jpg" },
            { step: "04", title: "Report", desc: "Document & optimize usage", src: "/img/portfolio/net-adm/4.jpg" },
            ].map((item, idx) => (
            <div key={idx} className="relative w-full h-56 md:h-60 rounded-xl overflow-hidden group">
                {/* Gambar */}
                <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay untuk hover desktop */}
                <div className="absolute inset-0 bg-black/80 opacity-0 md:group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Text muncul saat hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm md:text-base text-white mt-1">{item.desc}</p>
                </div>

                {/* Mobile: tampilkan title & desc di bawah gambar */}
                <div className="md:hidden absolute bottom-2 left-0 w-full text-center px-2">
                <h3 className="text-sm font-bold text-gray-700 dark:text-white">{item.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </CardContent>
    ),
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
              src="/img/portfolio/net-adm/main-net.jpg"
              alt="Networking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            NETWORK ADMINISTRATOR
          </h1>
          <hr className="border-t-3 border-gray-300 dark:border-gray-700 my-6" />
        </header>

        {/* Info & Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-x-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">CATEGORY</span>
            <span>Things <br />
            Networking<br />
            Troubleshooting</span>

            <span className="font-semibold">YEAR</span>
            <span>2025</span>

            <span className="font-semibold">CLIENT</span>
            <span>-</span>

            <span className="font-semibold">PROJECT URL</span>
            <span>-</span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              This Network Administration workflow ensures reliable IT infrastructure by monitoring performance, maintaining security and swiftly resolving issues supporting smooth and efficient operations across the organization.
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
              to="/pawspective"
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
            to="/pawspective"
            className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
          >
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="sm:text-xl md:text-2xl font-bold">pawspective app</span>
              <span className="sm:text-base md:text-xl font-normal text-muted-foreground">app</span>
            </div>
          </Link>
        </div>

      </div>
    </motion.div>
  );
}
