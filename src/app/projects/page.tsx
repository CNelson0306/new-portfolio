"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My Portfolio",
    description:
      "My personal porfolio website built using Next.js, Tailwind CSS and Formspree",
    image: "/logo.png",
    url: "",
    github: "",
  },
  {
    title: "TCW Training",
    description:
      "Transport Consultancy Wales LTD, Full Stack web application built with React, Node, Express and 3rd party APIs.",
    image: "/tcw_logo_update.png",
    url: "https://tcwtraining.com",
    github: "",
  },
  {
    title: "Fuschia Hive Hair & Beauty",
    description:
      "Fuschia Hive Hair & Beauty, a local salon web application built with React and Formspree. Hosted on Firebase and assigned personal domain name.",
    image: "/fuschia.png",
    url: "https://fuschia-hive.co.uk",
    github: "",
  },
  {
    title: "Pontardulais RFC Fixtures",
    description:
      "A fixture app for my son's rugby team. Add, update and delete fixtures. Record points scorers and man of the match results.",
    image: "/bont-logo.jpg",
    url: "https://bontrfc.netlify.app/",
    github: "",
  },
  {
    title: "Task Manager",
    description: "Task Manager app created with React frontend and C# backend.",
    image: "/task_manager.jpg",
    url: "",
    github: "https://github.com/CNelson0306/task-manager",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="relative bg-gray-50 rounded-lg overflow-hidden shadow-lg flex flex-col h-full transition-transform duration-200 hover:scale-105 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              {/* Image */}
              <div className="relative w-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-40 w-auto object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                {(project.url || project.github) && (
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <h3 className="text-white text-lg font-semibold mb-2">
                        {project.title}
                      </h3>

                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-[#BAFF39] text-black rounded-md font-medium hover:bg-lime-300 transition"
                        >
                          View Project →
                        </a>
                      ) : (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition"
                        >
                          GitHub Repo →
                        </a>
                      )}
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
