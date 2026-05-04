import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import restaurantData from "@/data/restaurant.json";

export default function AboutPage() {
  const interiorImage = PlaceHolderImages.find(
    (img) => img.id === "about-interior",
  );
  const chefImage = PlaceHolderImages.find((img) => img.id === "chef-action");

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <header className="pt-40 pb-20 px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase font-light text-accent mb-4 block">
          OUR ROOTS
        </span>
        <h1 className="text-4xl md:text-6xl font-headline text-primary tracking-widest">
          THE STORY
        </h1>
      </header>

      {/* Story Section */}
      <section className="py-12 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-headline text-primary mb-8 tracking-widest">
              SINCE 1986
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>{restaurantData.about.story}</p>
              <p>{restaurantData.about.heritage}</p>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[16/9] lg:aspect-square overflow-hidden shadow-xl order-1 lg:order-2">
            {interiorImage && (
              <Image
                src={interiorImage.imageUrl}
                alt="Japanese Interior Detail"
                fill
                unoptimized
                className="object-cover"
                data-ai-hint="japanese zen interior"
              />
            )}
          </div>
        </div>
      </section>

      {/* Chef Profile */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square overflow-hidden group">
            {chefImage && (
              <Image
                src={chefImage.imageUrl}
                alt="Master Chef Sato"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint="sushi chef master"
              />
            )}
            <div className="absolute inset-0 border border-primary-foreground/10" />
          </div>
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-medium mb-4 block">
              THE VISIONARY
            </span>
            <h2 className="text-3xl md:text-5xl font-headline mb-8 tracking-widest leading-tight">
              Chef Kenji Sato
            </h2>
            <p className="text-primary-foreground/70 font-light leading-relaxed text-lg mb-8">
              {restaurantData.about.chef}
            </p>
            <p className="text-primary-foreground/70 font-light leading-relaxed mb-8 italic">
              "In Tokyo, the kitchen is a temple. We approach every ingredient
              with a bow of respect, understanding that our craft is merely a
              vessel for nature's bounty."
            </p>
            <div className="w-24 h-[1px] bg-accent" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 md:px-12 text-center bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-headline tracking-widest mb-16 text-primary">
            OUR PHILOSOPHY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xs tracking-[0.3em] font-medium mb-4 uppercase text-accent">
                SHUN
              </h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Seasonal peak. We serve ingredients only at their absolute prime
                for peak flavor.
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] font-medium mb-4 uppercase text-accent">
                KODAWARI
              </h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Pursuit of perfection. A relentless attention to the smallest
                details of our craft.
              </p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.3em] font-medium mb-4 uppercase text-accent">
                OMOTENASHI
              </h3>
              <p className="text-sm font-light text-muted-foreground leading-relaxed">
                Selfless hospitality. Anticipating guest needs with warmth and
                understated grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
