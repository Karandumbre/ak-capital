"use client";

import React from "react";
import {
  Briefcase,
  Truck,
  TrendingUp,
  Rocket,
  Star,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    slug: "corporate-finance",
    title: "Corporate Finance & Debt Syndication",
    icon: <Briefcase size={32} />,
  },
  {
    id: 2,
    slug: "supply-chain-finance",
    title: "Supply Chain / Working Capital Finance",
    icon: <Truck size={32} />,
  },
  {
    id: 3,
    slug: "investment-banking",
    title: "Investment Banking & Private Equity",
    icon: <TrendingUp size={32} />,
  },
  {
    id: 4,
    slug: "startup-funding",
    title: "Startup Funding Essentials",
    icon: <Rocket size={32} />,
  },
  {
    id: 5,
    slug: "credit-rating",
    title: "Credit Rating Advisory",
    icon: <Star size={32} />,
  },
  {
    id: 6,
    slug: "retail-loans",
    title: "Retail Loan Syndication",
    icon: <CreditCard size={32} />,
  },
];

const GrowthServices = () => {
  return (
    <section className="w-full py-16 md:py-20 xl:px-56 lg:px-16 px-6 bg-background">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-normal text-[var(--text-black)] text-center mb-12 md:mb-16">
        Growth Services
        <span className="block w-24 h-1 bg-gradient-to-r from-orange-500 to-purple-900 mx-auto mt-4 rounded-full"></span>
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/growth-services/${service.slug}`}
            className="w-full"
          >
            <div
              key={service.id}
              className="group shadow-lg flex flex-col items-center text-center p-6 bg-white border border-gray-200 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl max-w-sm mx-auto w-full h-full min-h-[220px] justify-center relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              {/* Border highlight on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 z-10"></div>

              {/* Content */}
              <div className="relative z-20 text-center">
                <div className="flex justify-center items-center text-[var(--text-light-gray)] mb-4 p-3 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-gray-900 leading-tight px-2">
                  {service.title}
                </h3>

                {/* Subtle hover indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block w-6 h-0.5 bg-blue-500 rounded-full"></span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Optional: Call to action */}
      <div className="text-center mt-12 md:mt-16">
        <Link href="/growth-services">
          <button className="cursor-pointer px-8 py-3 bg-foreground text-white font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Explore All Services
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GrowthServices;
