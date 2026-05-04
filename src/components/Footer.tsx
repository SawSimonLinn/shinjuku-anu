import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="mb-8">
            <span className="font-headline text-3xl tracking-[0.2em]">
              SHINJUKU
            </span>
            <p className="mt-6 text-sm text-primary-foreground/50 max-w-sm font-light leading-relaxed">
              Crafting authentic Tokyo culinary experiences in the heart of the
              city. Established with heritage, served with precision.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.4em] font-medium mb-10 uppercase text-accent">
            EXPLORE
          </h4>
          <ul className="space-y-6 text-[10px] tracking-[0.2em] font-light text-primary-foreground/60 uppercase">
            <li>
              <Link href="/menu" className="hover:text-white transition-colors">
                The Menu
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/reservations"
                className="hover:text-white transition-colors"
              >
                Reservations
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className="hover:text-white transition-colors"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.4em] font-medium mb-10 uppercase text-accent">
            SOCIAL
          </h4>
          <div className="flex space-x-8 text-primary-foreground/60 mb-12">
            <Link href="#" className="hover:text-white transition-all">
              <Instagram size={18} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="hover:text-white transition-all">
              <Facebook size={18} strokeWidth={1.5} />
            </Link>
            <Link href="#" className="hover:text-white transition-all">
              <Twitter size={18} strokeWidth={1.5} />
            </Link>
          </div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-primary-foreground/30 font-light">
            ESTABLISHED 1986
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] uppercase text-primary-foreground/30 font-light space-y-6 md:space-y-0">
        <span>&copy; 2024 SHINJUKU RESTAURANT GROUP</span>
        <div className="flex space-x-12">
          <Link href="/privacy" className="hover:text-white transition-colors">
            PRIVACY POLICY
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            TERMS OF SERVICE
          </Link>
        </div>
      </div>
    </footer>
  );
}
