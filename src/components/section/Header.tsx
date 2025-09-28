"use client";
import NavMain from "../ui/nav-main";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // beri batas 10px agar saat user mulai gerak langsung terdeteksi
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300
        bg-white ${scrolled ? "shadow-md" : "shadow-none"}`}
    >
      <nav className="max-w-6xl mx-auto p-4">
        <NavMain />
      </nav>
    </header>
  );
}
