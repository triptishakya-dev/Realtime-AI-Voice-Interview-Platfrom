import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
};

export default HomeLayout;