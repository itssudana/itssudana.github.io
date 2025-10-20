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

export default function N8N() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const cards = [
  {
    title: <span className="block text-center text-gray-700 dark:text-white">WORKFLOW</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/n8n/workflow.jpg"
            alt="Workflow"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">AI AGENT PROMPT</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/n8n/prompt.jpg"
            alt="Prompt"
            className="w-full h-full object-cover"
          />
        </div>
      </CardContent>
    ),
  },
  {
    title: <span className="block text-center text-gray-700 dark:text-white">OUTPUT</span>,
    content: (
      <CardContent className="p-0">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <img
            src="/img/portfolio/n8n/output.jpg"
            alt="Output"
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
              src="/img/portfolio/n8n/hero.jpg"
              alt="N8N"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Header Project */}
        <header className="mb-12 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-gray-700 dark:text-white">
            AI AGENT TELEGRAM WITH N8N
          </h1>
          <hr className="border-t-3 border-gray-300 dark:border-gray-700 my-6" />
        </header>

        {/* Info & Deskripsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-x-4 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">CATEGORY</span>
            <span>Things <br />
            Automated<br />
            AI Chatbot</span>

            <span className="font-semibold">YEAR</span>
            <span>2025</span>

            <span className="font-semibold">CLIENT</span>
            <span>-</span>

            <span className="font-semibold">PROJECT URL</span>
            <span>
              <a href="https://t.me/heartofsteel43_bot" className="text-blue-600" target="_blank">
                Ask Chatbot
              </a>
            </span>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              The AI Chatbot for Telegram using n8n is an automated system that responds intelligently to user messages through workflows handling logic, data and AI-generated replies.
              Built with n8n’s visual interface, it requires minimal coding and can be customized for customer service, virtual assistants or efficient notification automation. 
              The purpose of this project is to explore workflow automation, integrate AI into real-world applications and create a practical solution that improves efficiency and user interaction on the Telegram platform.
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
              to="/cr-fanspage"
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
            to="/cr-fanspage"
            className="ml-4 text-gray-700 dark:text-white truncate md:truncate-none"
          >
            <div className="flex flex-col items-end text-right leading-tight">
              <span className="sm:text-xl md:text-2xl font-bold">cr7 fanspage</span>
              <span className="sm:text-base md:text-xl font-normal text-muted-foreground">web</span>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
