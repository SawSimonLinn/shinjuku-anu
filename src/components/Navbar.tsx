"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 20);
      setIsDark(scrollY < 200);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "MENU", href: "/menu" },
    { name: "ABOUT", href: "/about" },
    { name: "RESERVATIONS", href: "/reservations" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-12 border-b",
        isDark
          ? "bg-transparent border-white/10"
          : "bg-background/90 backdrop-blur-md border-border",
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Image */}
          <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="Shinjuku Logo"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Text */}
          <span
            className={cn(
              "font-headline text-lg tracking-[0.25em] hidden sm:inline transition-opacity duration-300 group-hover:opacity-80",
              isDark ? "text-white" : "text-primary",
            )}
          >
            SHINJUKU
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[9px] tracking-[0.4em] uppercase transition-all duration-300 nav-link-underline",
                  isDark
                    ? "text-white/70 hover:text-white"
                    : "text-foreground/70 hover:text-foreground",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/order">
            <Button
              className={cn(
                "rounded-none text-[9px] tracking-[0.3em] h-10 px-6 uppercase transition-all duration-500",
                isDark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-accent text-accent-foreground hover:bg-accent/90",
              )}
            >
              Order Online
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-white p-2" aria-label="Open Menu">
                  <Menu size={24} strokeWidth={1.5} />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black border-none flex flex-col items-center justify-center space-y-12"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Access all pages of the restaurant website.
                </SheetDescription>
                <Hexagon className="text-white w-10 h-10" />
                <div className="flex flex-col items-center space-y-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-white/60 text-[11px] tracking-[0.5em] uppercase hover:text-white transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link href="/order" className="mt-8">
                    <Button className="bg-white text-black hover:bg-white/90 rounded-none px-10 py-6 tracking-[0.3em] uppercase text-xs">
                      Order Online
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <button
              className={cn("p-2", isDark ? "text-white" : "text-foreground")}
              aria-label="Open Menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
