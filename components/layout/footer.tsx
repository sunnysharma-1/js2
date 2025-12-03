"use client";

import React, { useState } from "react";
import type { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    contact: z.string().regex(/^\+?[\d\s-]{10,}$/, "Please enter a valid 10-digit mobile number"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });

  type FormData = z.infer<typeof formSchema>;

  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      contact: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", data);
    setSubmitStatus("success");
    reset();
    setIsSubmitting(false);

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };


  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px)",
      () => {
        // Animate Background Pattern
        gsap.to(".footer-pattern", {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        // Staggered Content Reveal
        gsap.from(".footer-col", {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Copyright Reveal
        gsap.from(".footer-copyright", {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
          },
        });
      },
      footerRef
    );

    return () => mm.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative border-t bg-white text-slate-800 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 max-w-screen-2xl py-6 md:py-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-[1fr_auto_auto_auto_1fr]">
          {/* Contact Information */}
          <div className="footer-col space-y-8">
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
                    Mon–Fri from 9am to 6pm
                  </p>
                  <p className="text-sm">
                    <a
                      href="tel:+918866968821"
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      +91 88669 68821
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
                  <h3 className="font-semibold text-slate-800">Visit Us | See Our Manufacturing Unit</h3>
                  <p className="text-sm text-slate-600">
                    Come see our process
                  </p>

                  {/* Manufacturing Unit */}
                  <p className="text-sm font-semibold text-slate-800 mt-2">
                    Manufacturing Unit:
                  </p>
                  <p className="text-sm text-slate-700 leading-tight">
                    B122, GIDC Rd, Electronic Zone, Sector 25,
                    <br />
                    Gandhinagar, Gujarat 382044
                  </p>

                  {/* Head Office */}
                  <p className="text-sm font-semibold text-slate-800 mt-3">
                    Head Office (Administration):
                  </p>
                  <p className="text-sm text-slate-700 leading-tight">
                    61/D, Omkar Bhavan, Madalpur, Ellisbridge,
                    <br />
                    Ahmedabad, Gujarat 380006
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-col space-y-4">
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
                  href="/services/global-purchasing"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Global Purchase
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design-engineering"
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
          <div className="footer-col space-y-4">
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

              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col space-y-4">
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
          <div className="footer-col space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">Get in Touch</h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3"
              aria-label="Contact form"
              noValidate
            >
              <div className="space-y-1">
                <label className="sr-only" htmlFor="footer-name">
                  Your name
                </label>
                <Input
                  id="footer-name"
                  placeholder="Your Name"
                  {...register("name")}
                  className={`bg-gray-50 border-gray-200 ${errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="sr-only" htmlFor="footer-contact">
                  Your contact number
                </label>
                <Input
                  id="footer-contact"
                  placeholder="Your Contact (10 digits)"
                  {...register("contact")}
                  className={`bg-gray-50 border-gray-200 ${errors.contact ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.contact && <p className="text-xs text-red-500 ml-1">{errors.contact.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="sr-only" htmlFor="footer-email">
                  Your email
                </label>
                <Input
                  id="footer-email"
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                  className={`bg-gray-50 border-gray-200 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <label className="sr-only" htmlFor="footer-message">
                  Your message
                </label>
                <Textarea
                  id="footer-message"
                  placeholder="Your Message"
                  {...register("message")}
                  className={`bg-gray-50 border-gray-200 min-h-[100px] ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                />
                {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white transition-all ${submitStatus === "success"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-teal-600 hover:bg-teal-700"
                  }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : submitStatus === "success" ? (
                  <>Message Sent <CheckCircle2 className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Jayshree Instruments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
