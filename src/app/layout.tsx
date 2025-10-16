import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Carl Nelson | Portfolio",
  description: "Developer portfolio built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900 font-sans scroll-smooth leading-relaxed">
        <Navbar />
        <main
          className="
            mx-auto 
            w-full 
            max-w-5xl 
            px-4 
            sm:px-6 
            md:px-8 
            py-10 
            sm:py-12 
            md:py-16 
            min-h-[calc(100vh-180px)]
          "
        >
          {children}
        </main>
        <footer
          className="
            border-t border-gray-200 
            text-center 
            py-6 
            text-xs sm:text-sm 
            text-gray-500 
            px-4
          "
        >
          {" "}
          © {new Date().getFullYear()} Carl Nelson. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
