"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import slide1 from "@/assets/images/slide1.jpg";
import slide2 from "@/assets/images/slide2.jpg";
import slide3 from "@/assets/images/slide3.jpg";
import slide4 from "@/assets/images/slide4.jpg";
import slide5 from "@/assets/images/slide5.jpg";

const slides = [
  { id: 1, image: slide1, title: "We go beyond finance we fuel growth." },
  { id: 2, image: slide2, title: "Financing the Future, Today." },
  { id: 3, image: slide3, title: "Advising Today, Accelerating Tomorrow." },
  { id: 4, image: slide4, title: "Capital Solutions, Tailored for You." },
  { id: 5, image: slide5, title: "Capitalizing on Opportunities, Together." },
  { id: 6, image: slide2, title: "We go beyond structuring we unlock growth." },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  // Auto-slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(0);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Function to split text into lines with max 4 words each
  const formatTitle = (title: string) => {
    const words = title.split(" ");
    const lines = [];

    for (let i = 0; i < words.length; i += 4) {
      lines.push(words.slice(i, i + 4).join(" "));
    }

    return lines;
  };

  // Variants for animation based on direction
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction === 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction === 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <div
      className="relative w-full md:h-[100vh] h-[70vh] overflow-hidden bg-black"
      ref={containerRef}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center z-10 px-6 text-center">
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
              {formatTitle(slides[current].title).map((line, index) => (
                <div key={index} className="my-1 md:my-2">
                  {line}
                </div>
              ))}
            </h1>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
