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
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      className="
        fixed top-0 w-full z-50
        bg-primary text-primary-foreground
        border-b border-white/10
        backdrop-blur-md
        px-6 md:px-12 py-2
      "
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <Image
              src="/logo.png"
              alt="Shinjuku Logo"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          <span className="font-headline text-lg tracking-[0.25em] text-primary-foreground">
            SHINJUKU
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  text-[9px] tracking-[0.4em] uppercase
                  text-primary-foreground/70
                  hover:text-accent
                  transition-all duration-300
                "
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link href="/order">
            <Button
              className="
                rounded-none
                bg-accent text-accent-foreground
                hover:bg-accent/90
                text-[9px] tracking-[0.3em]
                h-10 px-6 uppercase
                transition-all duration-500
              "
            >
              Order Online
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="text-primary-foreground p-2"
                  aria-label="Open Menu"
                >
                  <Menu size={24} strokeWidth={1.5} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-primary text-primary-foreground border-none flex flex-col items-center justify-center space-y-12"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Access all pages
                </SheetDescription>

                <div className="flex flex-col items-center space-y-10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="
                        text-primary-foreground/70
                        text-[11px] tracking-[0.5em] uppercase
                        hover:text-accent
                        transition-all duration-300
                      "
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Link href="/order">
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-6 tracking-[0.3em] uppercase text-xs">
                      Order Online
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <button className="text-primary-foreground p-2">
              <Menu size={24} strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
