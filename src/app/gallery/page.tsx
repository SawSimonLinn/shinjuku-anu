import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <header className="pt-40 pb-20 px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase font-light text-accent mb-4 block">
          VISUAL JOURNEY
        </span>
        <h1 className="text-4xl md:text-6xl font-headline text-primary tracking-widest">
          GALLERY
        </h1>
      </header>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PlaceHolderImages.map((img, idx) => (
            <div
              key={img.id}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={img.imageUrl}
                alt={img.description}
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint={img.imageHint}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-[10px] tracking-widest text-white uppercase font-light">
                  {img.description}
                </p>
              </div>
            </div>
          ))}
          {/* Add a few more placeholders for variety if needed */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src={`https://picsum.photos/seed/gallery-${i}/800/800`}
                alt="Atmosphere"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="japanese restaurant"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
