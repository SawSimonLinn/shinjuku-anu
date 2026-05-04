"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import restaurantData from "@/data/restaurant.json";
import { cn } from "@/lib/utils";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(
    restaurantData.menu[0].category,
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <header className="pt-40 pb-20 px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase font-light text-accent mb-4 block">
          THE CULINARY LIST
        </span>
        <h1 className="text-4xl md:text-6xl font-headline text-primary tracking-widest">
          MENU
        </h1>
      </header>

      {/* Category Navigation */}
      <section className="bg-background border-y py-6 mb-16">
        <div className="max-w-7xl mx-auto px-6 flex justify-center space-x-8 md:space-x-16 overflow-x-auto no-scrollbar">
          {restaurantData.menu.map((category) => (
            <button
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={cn(
                "text-[10px] tracking-[0.4em] uppercase transition-all duration-300 pb-1 border-b-2 whitespace-nowrap",
                activeCategory === category.category
                  ? "text-accent border-accent font-semibold"
                  : "text-muted-foreground border-transparent hover:text-primary",
              )}
            >
              {category.category}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {restaurantData.menu
            .filter((cat) => cat.category === activeCategory)
            .map((category) => (
              <div
                key={category.category}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                  {category.items.map((item) => (
                    <FoodCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Chef's Note */}
      <section className="bg-secondary/20 py-24 px-6 md:px-12 mb-20">
        <div className="max-w-3xl mx-auto text-center italic font-headline text-lg text-primary/70 leading-relaxed">
          "Each dish is prepared with seasonal ingredients sourced directly from
          Tokyo markets. Availability of certain sushi and sashimi may vary
          based on the morning catch."
        </div>
      </section>

      <Footer />
    </main>
  );
}
