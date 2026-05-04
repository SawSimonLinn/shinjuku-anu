
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-headline text-primary tracking-widest">TERMS OF SERVICE</h1>
      </header>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose prose-sm font-light text-muted-foreground space-y-8">
          <div>
            <h2 className="text-primary font-headline tracking-widest text-lg mb-4">RESERVATIONS</h2>
            <p className="leading-relaxed">Reservations are highly recommended. We hold tables for a maximum of 15 minutes past the reservation time. Large group bookings may require a deposit.</p>
          </div>
          
          <div>
            <h2 className="text-primary font-headline tracking-widest text-lg mb-4">CANCELLATIONS</h2>
            <p className="leading-relaxed">We kindly request at least 24 hours notice for any cancellations or changes to your reservation. Failure to do so for special omakase seatings may result in a fee.</p>
          </div>

          <div>
            <h2 className="text-primary font-headline tracking-widest text-lg mb-4">DINING EXPERIENCE</h2>
            <p className="leading-relaxed">To ensure all guests enjoy our tranquil environment, we request that children are supervised and mobile devices are used discretely.</p>
          </div>

          <div className="pt-12 border-t">
            <p className="text-[10px] tracking-widest uppercase italic">LAST UPDATED: JANUARY 2024</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
