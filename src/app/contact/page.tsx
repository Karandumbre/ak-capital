"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

interface FormData {
  name: string;
  contact: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      contact: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full bg-white">
      {/* Map Section */}
      <div className="max-w-7xl mx-auto h-80 md:h-96 relative overflow-hidden">
        <div className="w-full h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019917349152!2d-122.41941518468193!3d37.77492977975956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818d06f3e3a3%3A0xa9f97d7c1c1b1a1f!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-md"
          ></iframe>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl uppercase text-gray-900 mb-4">
            Talk to Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Get in touch with our team for
            more information.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-10">
          {/* Left Column - Address & Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl ml-5 md:text-2xl font-semibold text-gray-900 mb-6 pb-2 ">
                Office Address
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Main Office</h4>
                    <p className="text-gray-600 mt-1">
                      123 Financial District, Suite 456
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Number</h4>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email Address</h4>
                    <p className="text-gray-600 mt-1">info@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-5 py-3.5 bg-white border border-gray-200 rounded-xl outline-none transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-foreground text-white font-medium py-4 px-6 rounded-xl shadow-md cursor-pointer hover:bg-[var(--button-hover)] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
