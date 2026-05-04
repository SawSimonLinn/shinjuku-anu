
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <header className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-headline text-primary tracking-widest">PRIVACY POLICY</h1>
      </header>

      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-3xl mx-auto prose prose-sm font-light text-muted-foreground space-y-8">
          <div>
            <h2 className="text-primary font-headline tracking-widest text-lg mb-4">OUR COMMITMENT</h2>
            <p className="leading-relaxed">At Shinjuku Restaurant, we respect your privacy and are committed to protecting any personal information you provide us. This policy outlines how we handle data collected through our website and reservation systems.</p>
          </div>
          
          <div>
            <h2 className="text-primary font-headline tracking-widest text-lg mb-4">INFORMATION WE COLLECT</h2>
            <p className="leading-relaxed">When you make a reservation or sign up for our newsletter, we collect information such as your name, email address, phone number, and dining preferences.</p>
          </div>

          <div>
            <h2 className="text-primary font-headline tracking-widest text-lg mb-4">HOW WE USE DATA</h2>
            <p className="leading-relaxed">Your information is used solely to manage your dining experience, process reservations, and occasional communications regarding special events at Shinjuku.</p>
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
