"use client";
import { Navbar } from "../ui/mini-navbar";

export function Header() {
 
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center">
      <Navbar />
    </header>
  );
}
