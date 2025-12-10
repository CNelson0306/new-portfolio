"use client";

import React from "react";
import { motion } from "framer-motion";
import { title } from "process";

const projects = [
  {
    /*
    {
    title: "Superhero Stats",
    description:
      "A Python Flask application that integrates external APIs, implements server-side caching, and presents superhero data through a responsive, styled interface.",
    image: "comic_thumbnail.jpg",
    url: "https://superhero-stats.onrender.com/",
    github: "",
  },
  */
  },
  {
    title: "AI Resume Analyser",
    description:
      "AI powered resume analyser allowing users to upload their resume and compare against a job description. Detailed feedback, score and missing keywords will be returned to the user and an option to rewrite their current resume to match the job description they wish to apply for. OpenAI, AWS, Next.js, deployed on netlify.",
    image: "AI_resume_analyser.png",
    url: "",
    github: "https://github.com/CNelson0306/ai-resume-checker",
  },
  {
    title: "My Portfolio",
    description:
      "My personal porfolio website built using Next.js, Tailwind CSS, TypeScript and Formspree",
    image: "/logo.png",
    url: "",
    github: "https://github.com/CNelson0306/new-portfolio",
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
      "A full stack fixture app for my son's rugby team. Built using React, Express, Mongoose and CORS. Keep up-to-date with fixtures, results and point scorers.",
    image: "/bont-logo.jpg",
    url: "https://bontrfc.netlify.app/",
    github: "",
  },
  {
    title: "React UI Templates",
    description:
      "React UI Templates available for purchase and download.  Built with React and Stripe, hosted on render.",
    image: "/reactify.png",
    url: "https://reactify-ui.netlify.app/",
    github: "",
  },
  {
    title: "Task Manager",
    description: "Task Manager app created with React frontend and C# backend.",
    image: "/task_manager.jpg",
    url: "",
    github: "https://github.com/CNelson0306/task-manager",
  },
  {
    title: "Workout Generator App",
    description:
      "A workout app that creates personalised workouts based on your target or goals.  Built using React, JavaScript and CSS.",
    image: "/gym.png",
    url: "",
    github: "https://github.com/CNelson0306/gym_app",
  },
  {
    title: "Input Form",
    description:
      "An input form created using React on the frontend, Python & Flask on the backend.",
    image: "/form.jpg",
    url: "",
    github: "https://github.com/CNelson0306/BasicForm_Front_Backend/tree/main",
  },
  {
    title: "RPG Battle Game",
    description:
      "Take part in a Head-to-Head Battle Game built with Python & Pygame.",
    image: "/rpgBattle.png",
    url: "",
    github: "https://github.com/CNelson0306/rpg_battle/tree/main/rpg_battle",
  },
  {
    title: "Flappy Bird Game",
    description: "Retro flappy bird game created using Python.",
    image: "/flappy.png",
    url: "",
    github: "https://github.com/CNelson0306/flappy_bird/tree/main/FlappyBird",
  },
  {
    title: "Python Mini Games",
    description: "Classic Mini Games created using Python.",
    image: "/pythonGames.jpg",
    url: "",
    github:
      "https://github.com/CNelson0306/Python_Mini_Games/tree/main/MiniGames",
  },
  {
    title: "Pong Game",
    description: "Classic pong game created using Python.",
    image: "/pong.png",
    url: "",
    github: "https://github.com/CNelson0306/Pong_with_python/tree/main/Pong",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-24 px-6 bg-white mt-12 scroll-mt-12"
    >
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
