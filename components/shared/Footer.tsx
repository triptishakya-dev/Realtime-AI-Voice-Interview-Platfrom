"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <div className="flex flex-col gap-6 blue-gradient-dark rounded-3xl p-8 w-full max-w-[1200px] mx-auto">
        {/* Top Section - Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col gap-2">
            <Link href={"/"} className="flex items-center gap-2">
              <Image src={"/logo.svg"} height={32} width={38} alt="Logo" />
              <h2 className="text-primary-100">Prepwise</h2>
            </Link>
            <p className="text-light-100 text-sm max-w-xs">
              AI-powered platform for preparing for mock interviews
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-primary-100 text-base font-semibold">Platform</h3>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-light-100 text-sm hover:text-primary-200 transition-colors">
                  Home
                </Link>
                <Link href="/interview" className="text-light-100 text-sm hover:text-primary-200 transition-colors">
                  Interviews
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-primary-100 text-base font-semibold">Account</h3>
              <div className="flex flex-col gap-2">
                <Link href="/sign-in" className="text-light-100 text-sm hover:text-primary-200 transition-colors">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-200/30 to-transparent"></div>

        {/* Bottom Section - Copyright and Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-light-100 text-sm">
            © {currentYear} Prepwise. All rights reserved.
          </p>
          
          <div className="flex gap-4 items-center">
            <Link 
              href="#" 
              className="text-light-100 hover:text-primary-200 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <span className="text-light-100">•</span>
            <Link 
              href="#" 
              className="text-light-100 hover:text-primary-200 transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
