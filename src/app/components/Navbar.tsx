"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Observe visible sections only on the homepage
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(""); // clear highlights when not on homepage
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  const getLinkStyle = (id: string) => {
    // Only highlight sections when on homepage
    if (pathname !== "/") return "text-gray-900 hover:text-[blue] transition";

    const isActive = activeSection === id;
    return isActive
      ? "text-[blue] font-semibold underline"
      : "text-gray-900 hover:text-[blue] transition";
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50 w-full">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <img src="/logo.png" alt="Carl Nelson Logo" className="w-18 h-auto" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li>
            <Link href="/#about" className={getLinkStyle("about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={getLinkStyle("projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/snippets"
              className={`hover:text-[blue] transition ${
                pathname === "/snippets"
                  ? "text-[blue] underline font-semibold"
                  : "text-gray-900"
              }`}
            >
              Snippets
            </Link>
          </li>
          <li>
            <Link href="/#contact" className={getLinkStyle("contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-gray-800 hover:text-[blue] transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col items-center gap-4 py-6 text-sm">
            <li>
              <Link
                href="/#about"
                onClick={closeMenu}
                className={getLinkStyle("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={closeMenu}
                className={getLinkStyle("projects")}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/snippets"
                onClick={closeMenu}
                className={`hover:text-[blue] transition ${
                  pathname === "/snippets"
                    ? "text-[blue] underline font-semibold"
                    : "text-gray-900"
                }`}
              >
                Snippets
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                onClick={closeMenu}
                className={getLinkStyle("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
