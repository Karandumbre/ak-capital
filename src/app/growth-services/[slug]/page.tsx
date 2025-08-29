"use client";

import { servicesData } from "@/constant/services";
import Image from "next/image";
import { useParams } from "next/navigation";
import heroBg from "@/assets/images/slide3.jpg";
import {
  ChevronDown,
  ChevronUp,
  Building,
  Cog,
  BarChart3,
  Target,
  Globe,
  Home,
  Construction,
  FileText,
  ChevronRight,
} from "lucide-react";
import { JSX, useState } from "react";

// Define types for the service data structure
interface SubItem {
  title: string;
  description?: string;
  subItems?: string[];
}

interface SubService {
  title: string;
  items: SubItem[];
}

interface Service {
  title: string;
  subServices: SubService[];
}

// Type for serviceIcons keys
type ServiceIconKey =
  | "Project Finance"
  | "Equipment Finance"
  | "Structured Finance"
  | "Acquisition Funding"
  | "Promoter Funding"
  | "Overseas Funding"
  | "Loan Against Property"
  | "Construction Finance"
  | "Lease Rental Discounting"
  | "Term Loan";

// Icon mapping for different service types
const serviceIcons: Record<ServiceIconKey, JSX.Element> = {
  "Project Finance": <Building className="text-blue-500" size={24} />,
  "Equipment Finance": <Cog className="text-green-500" size={24} />,
  "Structured Finance": <BarChart3 className="text-purple-500" size={24} />,
  "Acquisition Funding": <Target className="text-red-500" size={24} />,
  "Promoter Funding": <Home className="text-amber-500" size={24} />,
  "Overseas Funding": <Globe className="text-cyan-500" size={24} />,
  "Loan Against Property": <FileText className="text-indigo-500" size={24} />,
  "Construction Finance": (
    <Construction className="text-orange-500" size={24} />
  ),
  "Lease Rental Discounting": <FileText className="text-pink-500" size={24} />,
  "Term Loan": <BarChart3 className="text-teal-500" size={24} />,
};

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Type assertion for servicesData
  const servicesDataTyped = servicesData as Record<string, Service>;
  const service = servicesDataTyped[slug];

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  if (!service) {
    return (
      <main className="p-8 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Service not found
          </h1>
          <p className="text-gray-600">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </main>
    );
  }

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src={heroBg}
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlay Text */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of financial solutions designed to
              empower your business growth and success.
            </p>
          </div>

          {/* Subservices Accordion */}
          <div className="space-y-6">
            {service.subServices.map((sub: SubService, idx: number) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleSection(sub.title)}
                  className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center">
                    <div className="mr-4 p-3 bg-gray-100 rounded-lg">
                      {serviceIcons[sub.title as ServiceIconKey] || (
                        <Building size={24} className="text-blue-500" />
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      {sub.title}
                    </h2>
                  </div>
                  {expandedSections[sub.title] ? (
                    <ChevronUp className="text-gray-500" size={24} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={24} />
                  )}
                </button>

                {expandedSections[sub.title] && (
                  <div className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {sub.items.map((item: SubItem, itemIdx: number) => (
                        <div
                          key={itemIdx}
                          className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-start mb-3">
                            <ChevronRight
                              className="mt-1 mr-2 text-blue-600 flex-shrink-0"
                              size={18}
                            />
                            <h3 className="text-lg font-medium text-gray-800">
                              {item.title}
                            </h3>
                          </div>

                          {item.subItems ? (
                            <ul className="space-y-2 pl-7">
                              {item.subItems.map(
                                (si: string, siIdx: number) => (
                                  <li
                                    key={siIdx}
                                    className="text-gray-600 flex"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 mr-2 flex-shrink-0"></span>
                                    <span>{si}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          ) : item.description ? (
                            <p className="text-gray-600 pl-7">
                              {item.description}
                            </p>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Contact our experts today to discuss how our financial solutions
                can help your business thrive.
              </p>
              <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
