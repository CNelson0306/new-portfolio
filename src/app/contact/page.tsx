"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/movvrwkz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        e.currentTarget.reset();
      } else {
        setStatus("Something went wrong. Please try again!");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center"
    >
      <motion.div
        className="max-w-xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-700 mb-8">
          Have a question, opportunity, or just want to say hello? Fill out the
          form below and I'll get back to you soon.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BAFF36]"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BAFF36]"
          />

          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#BAFF36]"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#BAFF39] to-[#9FEA30] hover:from-[#9FEA30] hover:to-[#BAFF39] uppercase text-gray-900 font-semibold px-6 py-3 rounded-md transition shadow-md"
          >
            Send Message
          </motion.button>

          {status && <p className="text-gray-600 mt-4">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
}
