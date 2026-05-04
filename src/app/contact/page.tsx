
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import restaurantData from '@/data/restaurant.json';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase font-light text-accent mb-4 block">GET IN TOUCH</span>
        <h1 className="text-4xl md:text-6xl font-headline text-primary tracking-widest">CONTACT</h1>
      </header>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <h2 className="text-xs tracking-[0.3em] font-medium mb-8 uppercase text-accent">LOCATION</h2>
                <div className="flex items-start space-x-6">
                  <MapPin className="text-primary w-5 h-5 mt-1 shrink-0" strokeWidth={1} />
                  <div>
                    <p className="text-lg font-light text-primary mb-2 leading-relaxed">
                      {restaurantData.info.address}
                    </p>
                    <p className="text-sm text-muted-foreground font-light tracking-wide uppercase">Manhattan, New York City</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.3em] font-medium mb-8 uppercase text-accent">CONTACT</h2>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <Phone className="text-primary w-5 h-5 shrink-0" strokeWidth={1} />
                    <p className="text-lg font-light text-primary">{restaurantData.info.phone}</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <Mail className="text-primary w-5 h-5 shrink-0" strokeWidth={1} />
                    <p className="text-lg font-light text-primary">reservations@shinjukunyc.com</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.3em] font-medium mb-8 uppercase text-accent">OPENING HOURS</h2>
                <div className="flex items-start space-x-6">
                  <Clock className="text-primary w-5 h-5 mt-1 shrink-0" strokeWidth={1} />
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-light text-muted-foreground">
                    {Object.entries(restaurantData.info.hours).map(([day, hours]) => (
                      <div key={day} className="contents">
                        <span className="text-primary font-normal">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="lg:col-span-7">
               <div className="w-full aspect-video lg:aspect-square bg-secondary relative overflow-hidden group">
                  {/* In a real app, integrate Google Maps or similar here */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center space-y-4 opacity-40">
                      <MapPin size={48} className="mx-auto" strokeWidth={1} />
                      <p className="text-xs tracking-widest uppercase font-light">Google Maps Integration</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-primary/10 pointer-events-none" />
               </div>
               
               <div className="mt-12 p-8 border border-primary/10 bg-secondary/20">
                 <h3 className="font-headline text-lg text-primary mb-4 tracking-widest">PRIVATE DINING</h3>
                 <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                   We offer exclusive omakase experiences for groups up to 10 in our private 'Tatami' room. Please call at least 48 hours in advance for bookings.
                 </p>
                 <button className="text-xs tracking-[0.2em] font-medium uppercase text-accent hover:text-primary transition-colors">Enquire Now &rarr;</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
