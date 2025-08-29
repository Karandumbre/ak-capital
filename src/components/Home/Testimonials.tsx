"use client";

import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Mehta",
    position: "CEO, TechGrowth Ventures",
    content:
      "AK Capital provided exceptional guidance through our Series B funding. Their strategic insights helped us secure the right partners and maximize our valuation.",
  },
  {
    id: 2,
    name: "Priya Singh",
    position: "CFO, Innovate Manufacturing Ltd.",
    content:
      "The debt syndication team at AK Capital structured a complex financing solution that perfectly matched our expansion needs. Their market knowledge is unparalleled.",
  },
  {
    id: 3,
    name: "Vikram Malhotra",
    position: "Director, GreenEnergy Solutions",
    content:
      "Working with AK Capital's investment banking division transformed our M&A strategy. They identified synergies we hadn't considered and negotiated exceptional terms.",
  },
  {
    id: 4,
    name: "Ananya Patel",
    position: "Founder, HealthTech StartUp",
    content:
      "As first-time founders, we needed guidance through the funding process. AK Capital not only helped us secure capital but became true partners in our growth journey.",
  },
  {
    id: 5,
    name: "Sanjay Kumar",
    position: "MD, Infrastructure Developers Inc.",
    content:
      "The retail loan syndication team secured favorable terms that significantly improved our project's financial viability. Their network of lenders is impressive.",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view on resize
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Duplicate testimonials for seamless loop
  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000); // scroll speed
    return () => clearInterval(interval);
  }, []);

  // Handle infinite loop
  useEffect(() => {
    if (!containerRef.current) return;

    const totalOriginal = testimonials.length;
    const transitionDuration = 500; // in ms
    containerRef.current.style.transition = "transform 0.5s ease-in-out";

    const translateX = (currentIndex * 100) / cardsPerView;
    containerRef.current.style.transform = `translateX(-${translateX}%)`;

    // Reset without transition when we reach the middle duplicate
    if (currentIndex >= totalOriginal * 2) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.transition = "none";
          setCurrentIndex(totalOriginal);
          containerRef.current.style.transform = `translateX(-${
            (totalOriginal * 100) / cardsPerView
          }%)`;
        }
      }, transitionDuration);
    }
  }, [currentIndex, cardsPerView]);

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-800 mb-4">
            Clients Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-900 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Container */}
        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div ref={containerRef} className="flex w-[calc(100%)]">
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`flex-shrink-0 md:px-4`}
                style={{ width: `${100 / cardsPerView}%` }}
              >
                <div className="bg-white rounded-lg shadow-lg px-6 py-8 flex flex-col justify-between h-full min-h-[280px] mx-2 transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1">
                  <div className="flex-grow flex items-center justify-center text-center">
                    <p className="text-gray-700 italic text-base leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                  <div className="text-center mt-6 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
