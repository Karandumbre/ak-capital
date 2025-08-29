"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import slide2 from "@/assets/images/slide2.jpg";
import { AnimatedCounterProps, UseCountAnimationProps } from "@/types/About";

// Custom hook for counting animation
const useCountAnimation = ({
  end,
  duration = 2000,
  startOnView = false,
  threshold = 0.1,
}: UseCountAnimationProps): [
  number,
  React.RefObject<HTMLSpanElement | null>
] => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let animationFrame: number | null = null;

    const animate = (startTime: number | null, timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easing function
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame((t) => animate(startTime, t));
      }
    };

    if (!startOnView) {
      animationFrame = requestAnimationFrame((t) => animate(null, t));
    } else if (ref.current && !hasStarted) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            animationFrame = requestAnimationFrame((t) => animate(null, t));
          }
        },
        { threshold }
      );

      observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
        observer.disconnect();
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startOnView, hasStarted, threshold]);

  return [count, ref];
};

// Component for animated counter
const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) => {
  const [count, ref] = useCountAnimation({ end, duration, startOnView: true });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Custom hook for scroll animations
const useScrollAnimation = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [isVisible, ref] as const;
};

const AboutSection = () => {
  const [textVisible, textRef] = useScrollAnimation();
  const [imageVisible, imageRef] = useScrollAnimation();
  const [statsVisible, statsRef] = useScrollAnimation();

  return (
    <section className="w-full py-12 md:py-20 px-4 lg:px-16 xl:px-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content with Image */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Text Content - Slides in from left */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={`lg:max-w-2xl space-y-4 lg:order-1 order-2 transition-all duration-700 ease-out ${
              textVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[var(--text-black)] leading-tight">
              AK Capital Advisors
            </h2>
            <h3 className="text-lg md:text-xl font-normal text-[var(--text-light-gray)]">
              Bridging Ambition with Capital
            </h3>
            <p className="text-md md:text-lg text-[var(--text-gray)] leading-relaxed">
              At{" "}
              <span className="font-semibold text-[var(--text-black)]">
                AK Capital Advisors
              </span>
              , we go beyond finance — we fuel growth.
            </p>
            <p className="text-md text-[var(--text-gray)] leading-relaxed">
              As an agile financial partner, we bring capital solutions that
              empower <span className="font-medium">large corporates</span>,{" "}
              <span className="font-medium">mid-sized businesses</span>,{" "}
              <span className="font-medium">MSMEs</span>, and{" "}
              <span className="font-medium">startups</span> to achieve their
              ambitions.
            </p>
            <p className="text-md md:text-lg text-[var(--text-gray)] leading-relaxed">
              With deep market insight, innovative structuring, and transparent
              execution, we deliver results with precision.
            </p>
            <button className="mt-6 bg-foreground text-background hover:text-foreground px-8 py-3 rounded-xl shadow hover:bg-secondary transition transform hover:scale-105 cursor-pointer">
              Learn More
            </button>
          </div>

          {/* Image - Slides in from right */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`lg:order-2 order-1 w-full lg:w-auto flex justify-center transition-all duration-700 ease-out ${
              imageVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
              <Image
                src={slide2}
                alt="AK Capital Advisors"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Section - Slides up from bottom */}
        <div
          ref={statsRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 ease-out ${
            statsVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white shadow-lg border border-gray-100 rounded-lg flex flex-col items-center justify-center p-6 transition-transform hover:scale-105">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--text-black)]">
              <AnimatedCounter end={600} suffix="+" duration={2000} />
            </h4>
            <p className="text-lg text-center text-[var(--text-black)] mt-2">
              Units Sold
            </p>
          </div>
          <div className="bg-white shadow-lg border border-gray-100 rounded-lg flex flex-col items-center justify-center p-6 transition-transform hover:scale-105">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--text-black)]">
              <AnimatedCounter end={700000} suffix="+" duration={2500} />
            </h4>
            <p className="text-lg text-center text-[var(--text-black)] mt-2">
              Sq. ft. Area Sold
            </p>
          </div>
          <div className="bg-white shadow-lg border border-gray-100 rounded-lg flex flex-col items-center justify-center p-6 transition-transform hover:scale-105">
            <h4 className="text-3xl md:text-4xl font-bold text-[var(--text-black)]">
              ₹ <AnimatedCounter end={410} suffix=" CR.+" duration={3000} />
            </h4>
            <p className="text-lg text-center text-[var(--text-black)] mt-2">
              Revenue Generated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
