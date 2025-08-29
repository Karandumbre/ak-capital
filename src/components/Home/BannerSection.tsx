"use client";

import React from "react";
import Image from "next/image";
import bannerImage from "@/assets/images/slide3.jpg";

const BannerSection = () => {
  return (
    <section className="relative w-full h-[80vh] lg:h-[70vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bannerImage}
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Right Side Text Box */}
      <div className="relative z-10 flex justify-end items-center h-full px-6 lg:px-56">
        <div className="bg-white/50 backdrop-blur-md p-8 max-w-md rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-black)] mb-4">
            Your Next Big Opportunity
          </h2>
          <p className="text-[var(--text-black)] mb-6">
            We help businesses unlock their full potential with innovative
            strategies, expert advice, and the right capital solutions.
          </p>

          {/* Bullet Points */}
          <ul className="space-y-3 text-lg text-[var(--text-black)] font-medium">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[var( --color-black)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Expert financial advisory for all sectors
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[var( --color-black)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Access to wide network of investors & lenders
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[var( --color-black)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Tailored capital solutions for growth
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-[var( --color-black)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Decades of proven industry expertise
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
