"use client";

import React, { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: wire up real submission (API / third-party)
    // Clear form for now:
    setFormData({ name: "", contact: "", email: "", message: "" });
  };

  return (
    <footer className="relative border-t bg-white text-slate-800">
      {/* subtle PCB SVG background */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
      >
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pcbFooterGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="#002b2b" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#004d40" stopOpacity="0.03" />
            </linearGradient>
            <pattern
              id="pcbFooterPattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <rect width="120" height="120" fill="url(#pcbFooterGrad)" />
              <g
                stroke="#00a896"
                strokeWidth="1"
                strokeOpacity="0.06"
                fill="none"
              >
                <path d="M12 20 H108" />
                <path d="M20 12 V108" />
                <circle cx="30" cy="30" r="2.5" />
                <circle cx="90" cy="90" r="2.5" />
              </g>
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#pcbFooterPattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl py-12 md:py-16">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_1fr]">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 shrink-0 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Email Us</h3>
                  <p className="text-sm text-slate-600">
                    We'll respond within 24 hours
                  </p>
                  <p className="text-sm">
                    <a
                      href="mailto:info@jinst.in"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      info@jinst.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 shrink-0 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Call Us</h3>
                  <p className="text-sm text-slate-600">
                    Mon–Fri from 8am to 8pm
                  </p>
                  <p className="text-sm">
                    <a
                      href="tel:+918866968821"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      +91 88669 68821
                    </a>
                  </p>
                  <p className="text-sm">
                    <a
                      href="tel:+918866968821"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      +91 8866 968 821
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* UPDATED: Visit Us with Head Office & Manufacturing Unit */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 shrink-0 text-teal-600" />
                <div>
                  <h3 className="font-semibold text-slate-800">Visit Us</h3>
                  <p className="text-sm text-slate-600">
                    Come say hello at our locations
                  </p>

                  {/* Head Office */}
                  <p className="text-sm font-semibold text-slate-800 mt-2">
                    Head Office:
                  </p>
                  <p className="text-sm text-slate-700 leading-tight">
                    61/D, Omkar Bhavan, Madalpur, Ellisbridge,
                    <br />
                    Ahmedabad, Gujarat 380006
                  </p>

                  {/* Manufacturing Unit */}
                  <p className="text-sm font-semibold text-slate-800 mt-3">
                    Manufacturing Unit:
                  </p>
                  <p className="text-sm text-slate-700 leading-tight">
                    B122, GIDC Rd, Electronic Zone, Sector 25,
                    <br />
                    Gandhinagar, Gujarat 382044
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">Services</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/services"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pcb"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  PCB Assembly
                </Link>
              </li>
              <li>
                <Link
                  href="/services/prototyping"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Prototype – Development &amp; Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/box-build"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Build Box
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wire-harness"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Wire Harness &amp; Cable Harness
                </Link>
              </li>
              <li>
                <Link
                  href="/services/global-purchase"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Global Purchase
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Design Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/after-sales-support"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  After Sales Support
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">About</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/about"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/about#client"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Client
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-800">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link
                  href="/portfolio"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Reach Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Get in Touch</h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-3"
              aria-label="Contact form"
            >
              <label className="sr-only" htmlFor="footer-name">
                Your name
              </label>
              <Input
                id="footer-name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-gray-50 border-gray-200"
                required
              />

              <label className="sr-only" htmlFor="footer-contact">
                Your contact number
              </label>
              <Input
                id="footer-contact"
                placeholder="Your Contact"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
                className="bg-gray-50 border-gray-200"
              />

              <label className="sr-only" htmlFor="footer-email">
                Your email
              </label>
              <Input
                id="footer-email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-gray-50 border-gray-200"
                required
              />

              <label className="sr-only" htmlFor="footer-message">
                Your message
              </label>
              <Textarea
                id="footer-message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="bg-gray-50 border-gray-200 min-h-[100px]"
                required
              />

              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Jayshree Instruments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
