// Main app layout page

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Carl Nelson | Portfolio",
  description: "Developer portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/">
              <img
                src="logo.png"
                alt="Carl Nelson Logo"
                className="w-18 h-auto"
              />
            </Link>
            <ul className="flex gap-6 text-sm">
              <li>
                <a href="#about" className="hover:text-blue-600">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>

        <footer className="border-t border-gray-200 text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Carl Nelson. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
