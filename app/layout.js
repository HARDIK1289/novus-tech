import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google'; // 1. Import the font
import Navbar from '@/components/sections/Navbar';

const inter = Inter({ subsets: ['latin'] });

// 2. Configure the Sci-Fi Font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['700'], // Bold only
  variable: '--font-space', // This defines the CSS variable
});

export const metadata = {
  title: 'Novus Tech | Digital Evolution',
  description: 'Premium Web Development Agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. overflow-x-hidden here forces the mobile screen to stay strict */}
      <body className={`${inter.className} bg-black text-white overflow-x-hidden w-full relative antialiased`}>
        {/* 2. Ensure Navbar and Footer are INSIDE this body */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}