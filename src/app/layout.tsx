
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shinjuku Restaurant | Authentic Tokyo Flavors in NYC',
  description: 'Established in 1986, Shinjuku Restaurant brings the minimal, premium, and authentic culinary heritage of Japan to the heart of New York City.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground selection:bg-accent/20">
        {children}
      </body>
    </html>
  );
}
