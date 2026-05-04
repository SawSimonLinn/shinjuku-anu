import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import restaurantData from "@/data/restaurant.json";
import FoodCard from "@/components/FoodCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-primary px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.png"
            alt="Shinjuku Restaurant"
            fill
            className="object-cover opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-primary/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 items-center gap-12">
          <div className="text-primary-foreground">
            <span className="text-[10px] tracking-[0.45em] uppercase opacity-75 block mb-6">
              EST. {restaurantData.info.established} • USA
            </span>

            <h1 className="text-5xl md:text-8xl font-headline tracking-[0.12em] mb-6">
              SHINJUKU
            </h1>

            <p className="text-lg md:text-xl font-headline italic tracking-widest opacity-90 mb-8">
              {restaurantData.info.tagline}
            </p>

            <p className="max-w-xl text-sm md:text-base leading-relaxed opacity-75 font-light mb-12">
              A warm welcome to authentic Tokyo flavors, crafted with heritage,
              precision, and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/menu">
                <Button
                  variant="outline"
                  className="bg-transparent rounded-none px-10 py-6 uppercase text-xs tracking-widest border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Menu
                </Button>
              </Link>

              <Link href="/contact">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none px-10 py-6 uppercase text-xs tracking-widest">
                  Reservations
                </Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:block" />
        </div>

        <div className="absolute bottom-10 left-6 md:left-12 text-primary-foreground/50">
          <span className="text-[10px] tracking-[0.35em] uppercase">
            Scroll
          </span>
          <div className="w-[1px] h-14 bg-primary-foreground/30 mt-3" />
        </div>
      </section>

      {/* Brand Intro */}
      <section className="py-28 md:py-40 px-6 md:px-12 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-medium block mb-6">
            Experience
          </span>

          <h2 className="text-3xl md:text-5xl font-headline text-primary mb-10 leading-tight">
            Tokyo Tradition, Served with Modern Elegance
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg font-light">
            Shinjuku Restaurant brings the authentic flavors of Tokyo to the
            United States through carefully prepared ramen, sushi, katsu, udon,
            and seasonal Japanese favorites.
          </p>
        </div>
      </section>

      {/* Signature Dish */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.png"
              alt="Signature Japanese Dish"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border-[18px] border-background/20" />
          </div>

          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-medium block mb-6">
              Signature Craft
            </span>

            <h2 className="text-3xl md:text-5xl font-headline text-primary mb-8 leading-tight">
              Made Fresh, One Bowl at a Time
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Our owner and chef trained in Japan, learning the art of crafting
              authentic ramen firsthand and bringing that care into every dish
              we serve.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-10 font-light">
              Each meal is made fresh to order, delivering the quality, flavor,
              and comfort you deserve.
            </p>

            <Link href="/about">
              <Button
                variant="outline"
                className="rounded-none px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground tracking-widest uppercase text-xs"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] tracking-[0.4em] uppercase text-accent font-medium mb-4 block">
                Recommendations
              </span>

              <h2 className="text-3xl md:text-5xl font-headline text-primary mb-6">
                Seasonal Selections
              </h2>

              <p className="text-muted-foreground font-light leading-relaxed">
                From crispy golden katsu to rich ramen, textured udon, and
                freshly prepared sushi, every dish is crafted with intention.
              </p>
            </div>

            <Link
              href="/menu"
              className="text-xs tracking-widest uppercase text-primary border-b border-primary/20 pb-2 hover:border-accent hover:text-accent transition-all"
            >
              Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {restaurantData.menu
              .map((cat) => cat.items[0])
              .slice(0, 3)
              .map((item) => (
                <FoodCard key={item.id} {...item} />
              ))}
          </div>
        </div>
      </section>

      {/* Editorial Menu Categories */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent block mb-6">
              Menu Philosophy
            </span>

            <h2 className="text-3xl md:text-5xl font-headline mb-8">
              Familiar Comfort, Refined with Care
            </h2>

            <p className="text-primary-foreground/70 font-light leading-relaxed">
              Our menu brings together the warmth of everyday Japanese dining
              with the detail and calm of a premium restaurant experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 border-t border-primary-foreground/10">
            {["Ramen", "Sushi", "Udon", "Katsu"].map((item) => (
              <div key={item} className="pt-8">
                <h3 className="font-headline text-2xl mb-4">{item}</h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed font-light">
                  Crafted with balance, texture, and deep respect for Japanese
                  culinary tradition.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-accent block mb-6">
              Since 1986
            </span>

            <h2 className="text-3xl md:text-5xl font-headline text-primary leading-tight">
              Recipes Passed Down Through Generations
            </h2>
          </div>

          <div className="space-y-8 text-muted-foreground font-light leading-relaxed text-lg">
            <p>
              Our recipes reflect a heritage that has been carefully passed down
              through generations since 1986.
            </p>

            <p>
              Whether you are stopping in for a quick bite or settling in for a
              relaxed meal, Shinjuku Restaurant is a place to feel welcome,
              unwind, and enjoy something truly special.
            </p>

            <p className="italic text-primary border-l-2 border-accent pl-6">
              Experience Tokyo, one bite at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 text-center bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent block mb-6">
            Visit Us
          </span>

          <h2 className="text-3xl md:text-5xl font-headline text-primary mb-10">
            Your Tokyo Dining Escape in the USA
          </h2>

          <div className="space-y-4 mb-12">
            <p className="text-sm font-light text-muted-foreground tracking-wider">
              {restaurantData.info.address}
            </p>

            <p className="text-sm font-light text-primary tracking-[0.2em]">
              {restaurantData.info.phone}
            </p>
          </div>

          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none px-12 py-7 tracking-widest uppercase text-xs">
              Find Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
