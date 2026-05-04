
"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState, useEffect } from 'react';

export default function ReservationsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    // Set initial date only on client to avoid hydration mismatch
    setDate(new Date());
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase font-light text-accent mb-4 block">SECURE YOUR TABLE</span>
        <h1 className="text-4xl md:text-6xl font-headline text-primary tracking-widest">RESERVATIONS</h1>
      </header>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto border border-primary/10 bg-secondary/10 p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Calendar */}
            <div className="space-y-6">
              <h2 className="text-xs tracking-[0.3em] font-medium uppercase text-accent">1. SELECT DATE</h2>
              <div className="bg-background p-4 border border-primary/5 inline-block">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-none border-none"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.3em] font-medium uppercase text-accent">2. SELECT TIME & GUESTS</h2>
                <div className="grid grid-cols-1 gap-6">
                  <Select>
                    <SelectTrigger className="rounded-none border-primary/20 bg-background h-12 uppercase text-[10px] tracking-widest">
                      <SelectValue placeholder="NUMBER OF GUESTS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 PERSON</SelectItem>
                      <SelectItem value="2">2 PEOPLE</SelectItem>
                      <SelectItem value="4">4 PEOPLE</SelectItem>
                      <SelectItem value="6">6 PEOPLE</SelectItem>
                      <SelectItem value="large">LARGE GROUP (8+)</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="rounded-none border-primary/20 bg-background h-12 uppercase text-[10px] tracking-widest">
                      <SelectValue placeholder="PREFERRED TIME" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-xs tracking-[0.3em] font-medium uppercase text-accent">3. PERSONAL INFO</h2>
                <div className="space-y-4">
                   <input type="text" placeholder="FULL NAME" className="w-full h-12 bg-background border border-primary/20 px-4 text-[10px] tracking-widest outline-none focus:border-accent" />
                   <input type="email" placeholder="EMAIL ADDRESS" className="w-full h-12 bg-background border border-primary/20 px-4 text-[10px] tracking-widest outline-none focus:border-accent" />
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-14 tracking-[0.3em] uppercase text-xs">
                REQUEST RESERVATION
              </Button>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-primary/10 text-center">
            <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto italic">
              "Please note that for groups larger than 6, we require a credit card guarantee. All reservations are held for 15 minutes past the scheduled time."
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
