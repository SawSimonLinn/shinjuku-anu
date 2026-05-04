
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center">
        <span className="text-[10px] tracking-[0.5em] uppercase font-light text-accent mb-4 block">TO YOUR DOOR</span>
        <h1 className="text-4xl md:text-6xl font-headline text-primary tracking-widest">ORDER ONLINE</h1>
      </header>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-headline text-primary tracking-widest">ENJOY SHINJUKU AT HOME</h2>
            <p className="text-muted-foreground font-light leading-relaxed text-lg">
              We've partnered with premium delivery services to bring the authentic flavors of Tokyo directly to your residence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-12 border border-primary/10 bg-secondary/20 flex flex-col items-center justify-center space-y-6">
              <span className="text-xl font-headline text-primary">UberEats</span>
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase text-[10px] tracking-widest px-8">
                ORDER NOW <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </div>
            <div className="p-12 border border-primary/10 bg-secondary/20 flex flex-col items-center justify-center space-y-6">
              <span className="text-xl font-headline text-primary">DoorDash</span>
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase text-[10px] tracking-widest px-8">
                ORDER NOW <ExternalLink className="ml-2 w-3 h-3" />
              </Button>
            </div>
          </div>

          <div className="p-8 border border-accent/20 border-dashed">
            <h3 className="text-xs tracking-[0.3em] font-medium uppercase text-accent mb-4">DIRECT PICKUP</h3>
            <p className="text-sm text-muted-foreground font-light mb-6">
              Prefer to pick up your order? Call us directly for a 10% discount on all takeaway items.
            </p>
            <p className="text-lg font-headline text-primary tracking-widest">+1 (212) 555-0198</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
