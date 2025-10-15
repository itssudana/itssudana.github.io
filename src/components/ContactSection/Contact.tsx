"use client";

import { motion } from "framer-motion";
import { Input } from "../lightswind/Input";
import { Textarea } from "../lightswind/textarea";
import { Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import RippleButton from "../lightswind/RippleButton";
import emailjs from "@emailjs/browser";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setSent(false);
  setError(false);

  const form = e.target as HTMLFormElement;

  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const reply_to = (form.elements.namedItem("reply_to") as HTMLInputElement).value;
  const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
  const time = new Date().toLocaleString();

  //  Kirim notifikasi ke kamu
  emailjs
    .send(
      "service_0ujdr6o", // Service ID
      "template_jl3ie2c", // Template ID (notifikasi ke kamu)
      { name, reply_to, subject, message, time },
      "E-Y7QfPTrdkZahLI_" // Public Key
    )
    .then(() => {
      // Kirim auto-reply ke pengirim
      return emailjs.send(
        "service_0ujdr6o", // Service ID
        "template_zts5and", // template auto-reply di EmailJS
        { name, title: subject, to_email: reply_to }, // `to_email` HARUS ada di template
        "E-Y7QfPTrdkZahLI_"
      );
    })
    .then(() => {
      setLoading(false);
      setSent(true);
      form.reset(); //  kosongkan form hanya kalau berhasil
    })
    .catch(() => {
      setLoading(false);
      setError(true);
      //  jangan reset kalau error
    });
};


  return (
    <motion.section
      id="contact"
      className="py-16 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact</h2>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          Feel free to reach out by email or phone for more information or collaboration opportunities.
        </p>

        {/* Sosial Media Icons - CENTER */}
        <motion.div
          className="flex justify-center w-full mt-8 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/itssudana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Github
              size={28}
              className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
            />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/rainnathapro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Linkedin
              size={28}
              className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
            />
          </motion.a>

          <motion.a
            href="https://instagram.com/everydynormalguy"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Instagram
              size={28}
              className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* Contact Info */}
        <motion.div
          className="h-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-card p-6 rounded-lg shadow space-y-6 h-full flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold">Location:</h4>
              <p className="text-sm text-muted-foreground">
                North Nangka Street, Denpasar City, Denpasar 80239
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Email:</h4>
              <p className="text-sm text-muted-foreground">sudana.works@gmail.com</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d965.0361894885489!2d115.22485512418211!3d-8.627626785889746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1714199468875!5m2!1sen!2sid"
              className="w-full h-64 rounded-md flex-grow"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-card p-6 rounded-lg shadow space-y-5 h-full flex flex-col"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="name" type="text" placeholder="Your Name" required />
            <Input name="reply_to" type="email" placeholder="Your Email" required />
          </div>
          <Input name="subject" type="text" placeholder="How can I help you?" required />
          <Textarea
            name="message"
            rows={6}
            placeholder="Enter your message here..."
            required
            className="flex-grow"
          />

          {/* Feedback Messages */}
          <div className="text-sm text-center h-6">
            {loading && <p className="text-blue-500">Loading...</p>}
            {sent && (
              <p className="text-blue-500">
                I'll be in touch with you soon!
              </p>
            )}
            {error && (
              <p className="text-red-500">
                There was an error. Please try again later.
              </p>
            )}
          </div>
          <div className="mt-auto flex justify-center items-center w-full">
            <RippleButton
              text={loading ? "Sending..." : "Send Message"}
              circleColor="#0062ffff"
              disabled={loading}
              type="submit" // langsung submit form
              width="150px" // optional
              height="40px"
            />
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
