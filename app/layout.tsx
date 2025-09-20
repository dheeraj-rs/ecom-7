import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display, Lora } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' });

export const metadata: Metadata = {
  title: 'Rajan K K Woodworking - 40 Years of Forest-Inspired Craftsmanship',
  description: 'Discover the artistry of Rajan K K, master woodworker with 40 years of experience crafting exceptional furniture and custom pieces inspired by the Amazon forest.',
  keywords: 'woodworking, custom furniture, handcrafted, forest inspired, Amazon woodworking, artisan furniture',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.variable,
        playfair.variable,
        lora.variable,
        "font-inter bg-forest-dark text-forest-light antialiased"
      )}>
        {children}
      </body>
    </html>
  );
}