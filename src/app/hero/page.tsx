"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-22 px-6 max-w-5xl mx-auto gap-12 overflow-hidden">
      {/* TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left md:max-w-lg space-y-6"
      >
        <h1 className="text-6xl font-extrabold">Hi, I'm Carl Nelson</h1>
        <p className="text-2xl text-gray-700 uppercase">
          <strong>Full Stack Developer</strong>
        </p>
        <p className="text-xl text-gray-600">
          Frontend Developer | Web Developer | BSc Computing & IT
        </p>

        {/* CTA + SOCIALS */}
        <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
          {/* Button */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.15, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-r from-[#BAFF39] to-[#9FEA30] hover:from-[#9FEA30] hover:to-[#BAFF39] uppercase text-gray-900 font-semibold px-6 py-3 rounded-md transition shadow-md"
          >
            View Projects
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://linkedin.com/in/carlnelson86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://github.com/CNelson0306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* HERO IMAGE with halo */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative flex-shrink-0"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-full blur-xl"></div>
        <motion.img
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          src="/avatar.webp"
          alt="Carl Nelson"
          className="relative rounded-full w-64 h-64 object-cover shadow-lg mx-auto"
        />
      </motion.div>
    </section>
  );
}
