"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto  pb-4">
      <div className="flex flex-col gap-10 blue-gradient-dark rounded-3xl p-10 w-full border border-white/5 shadow-2xl relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        {/* Top Section - Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
          {/* Logo and Tagline */}
          <div className="flex flex-col gap-4 max-w-sm">
            <Link href={"/"} className="flex items-center gap-3 group">
              <div className="relative">
                <Image 
                  src={"/logo.svg"} 
                  height={32} 
                  width={38} 
                  alt="Logo" 
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-primary-100 bg-clip-text text-transparent">
                Prepwise
              </h2>
            </Link>
            <p className="text-light-100/60 text-sm leading-relaxed">
              Elevate your interview skills with AI-powered mock interviews. 
              Get real-time feedback and detailed performance analysis.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-sm font-semibold tracking-wide uppercase opacity-80">Platform</h3>
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-light-100/60 text-sm hover:text-primary-200 transition-all duration-200 hover:translate-x-1">
                  Home
                </Link>
                <Link href="/interview" className="text-light-100/60 text-sm hover:text-primary-200 transition-all duration-200 hover:translate-x-1">
                  Inteviews
                </Link>
                <Link href="/dashboard" className="text-light-100/60 text-sm hover:text-primary-200 transition-all duration-200 hover:translate-x-1">
                  Dashboard
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-sm font-semibold tracking-wide uppercase opacity-80">Legal</h3>
              <div className="flex flex-col gap-3">
                <Link href="#" className="text-light-100/60 text-sm hover:text-primary-200 transition-all duration-200 hover:translate-x-1">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-light-100/60 text-sm hover:text-primary-200 transition-all duration-200 hover:translate-x-1">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-light-100/40 text-xs">
            © {currentYear} Prepwise. All rights reserved.
          </p>
          
          <div className="flex gap-6 items-center">
            <Link 
              href="#" 
              target="_blank"
              className="text-light-100/40 hover:text-white transition-colors text-xs"
            >
              Twitter
            </Link>
            <Link 
              href="#" 
              target="_blank"
              className="text-light-100/40 hover:text-white transition-colors text-xs"
            >
              LinkedIn
            </Link>
            <Link 
              href="#" 
              target="_blank"
              className="text-light-100/40 hover:text-white transition-colors text-xs"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
