"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { motion } from "framer-motion";

const snippets = [
  {
    title: "Responsive Navbar",
    description: "A responsive Navbar built with React and Tailwind.",
    language: "jsx",
    code: `
<nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
  <h1 className="text-xl font-bold">MySite</h1>
  <ul className="flex space-x-4">
    <li><a href="#home" className="hover:text-blue-400">Home</a></li>
    <li><a href="#about" className="hover:text-blue-400">About</a></li>
    <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
  </ul>
</nav>
    `,
  },
  {
    title: "Contact Form",
    description:
      "A simple contact form built with Tailwind and React Hook Form.",
    language: "jsx",
    code: `
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md space-y-4">
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full p-2 border rounded-md"
        required
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded-md"
        required
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        rows="4"
        className="w-full p-2 border rounded-md"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  );
}
    `,
  },
  {
    title: "Fetch API Data",
    description: "A React hook example for fetching and displaying API data.",
    language: "jsx",
    code: `
import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api_url")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <ul>
      {data.slice(0, 5).map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
    `,
  },
];

export default function Snippets() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section className="py-12 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Code Snippets</h1>

        <div className="grid gap-12">
          {snippets.map((snippet, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{snippet.title}</h2>
                <p className="text-gray-700 mb-4">{snippet.description}</p>

                <div className="relative">
                  <button
                    onClick={() => handleCopy(snippet.code, index)}
                    className="absolute top-2 right-2 text-xs bg-[#BAFF39] text-gray-900 font-semibold px-3 py-1 rounded-md shadow hover:opacity-90 transition"
                  >
                    {copiedIndex === index ? "Copied!" : "Copy Code"}
                  </button>

                  {/* Scrollable syntax highlighter */}
                  <div className="max-h-80 overflow-y-auto rounded-lg">
                    <SyntaxHighlighter
                      language={snippet.language}
                      style={oneDark}
                      wrapLongLines
                      customStyle={{
                        borderRadius: "0.5rem",
                        fontSize: "0.9rem",
                        padding: "1.25rem",
                      }}
                    >
                      {snippet.code.trim()}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
