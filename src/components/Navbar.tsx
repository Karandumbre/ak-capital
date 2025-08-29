"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-md text-foreground">
      <div className="w-full xl:px-32 lg:px-8 px-4">
        <div className=" flex justify-between h-18 items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={120}
                height={120}
                className="object-cover"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="text-[var(--text-gray)] hidden md:flex space-x-20 items-center">
            <Link href="/" className="group">
              <span
                className={`hover:text-[var(--highlight-color)] text-lg tracking-wide ${
                  pathname === "/" ? "text-[var(--highlight-color)]" : ""
                }`}
              >
                Home
              </span>
            </Link>

            <Link href="/about" className="group">
              <span
                className={`hover:text-[var(--highlight-color)] text-lg tracking-wide ${
                  pathname === "/#about" ? "text-[var(--highlight-color)]" : ""
                }`}
              >
                About
              </span>
            </Link>

            <Link href="/growth-services" className="group">
              <span
                className={`hover:text-[var(--highlight-color)] text-lg tracking-wide ${
                  pathname === "/#growth" ? "text-[var(--highlight-color)]" : ""
                }`}
              >
                Growth Services
              </span>
            </Link>

            <Link href="/contact" className="group">
              <span
                className={`hover:text-[var(--highlight-color)] text-lg tracking-wide ${
                  pathname === "/contact" ? "text-[var(--highlight-color)]" : ""
                }`}
              >
                Talk to Us
              </span>
            </Link>

            <Link href="/profile.pdf" className="group">
              <span className="bg-foreground text-background px-6 py-3 rounded-xl shadow hover:bg-secondary transition">
                Download Profile
              </span>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-2">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="hover:text-primary">
              About
            </Link>
            <Link href="/growth-services" className="hover:text-primary">
              Growth Services
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Talk to Us
            </Link>
            <Link
              href="/profile.pdf"
              className="bg-foreground text-background text-center px-4 py-3 rounded-xl shadow hover:bg-secondary transition"
            >
              Download Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
