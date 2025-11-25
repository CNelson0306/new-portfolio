"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  const skillGroups = {
    Frontend: {
      color: "#4F46E5", // Indigo
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "JavaScript",
        "Web Applications",
        "HTML",
        "CSS",
        "Responsive Design",
      ],
    },
    Backend: {
      color: "#10B981", // Emerald
      skills: [
        "Node",
        "Express",
        "Restful APIs",
        "3rd Party APIs",
        "Python",
        "MongoDB",
        "Render",
        "SDLC",
      ],
    },
    Other: {
      color: "#F59E0B", // Amber
      skills: [
        "Hosting",
        "DNS Management",
        "SEO",
        "Performance",
        "Collaboration",
        "Analytical Thinking",
        "Adaptable",
      ],
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center scroll-mt-28"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm Carl Nelson, a Full Stack Developer with experience building
          modern web applications using React, Next.js, and Tailwind CSS. With a
          BSc in Computing & IT, I am passionate about creating scalable,
          user-focused web experiences.
        </p>

        <h2 className="text-4xl font-bold mt-24">Technical Skills</h2>

        <div className="mt-4 space-y-8">
          {Object.entries(skillGroups).map(([groupName, { skills, color }]) => (
            <div key={groupName}>
              <h3 className="text-2xl font-semibold mb-6 mt-20">{groupName}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="inline-flex items-center uppercase font-semibold justify-center px-4 py-2 rounded-full text-sm min-w-[110px] text-center flex-shrink-0 cursor-pointer shadow-md"
                    style={{ backgroundColor: color, color: "white" }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
