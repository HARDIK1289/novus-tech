import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google'; 
import Navbar from '@/components/sections/Navbar';
import FooterSection from '@/components/sections/FooterSection';

const inter = Inter({ subsets: ['latin'] });

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  weight: ['700'], 
  variable: '--font-space', 
});

export const metadata = {
  title: 'Novus Tech | Digital Evolution',
  description: 'Premium Web Development Agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* overflow-x-hidden fixes the hamburger menu alignment */}
      <body className={`${inter.className} bg-black text-white overflow-x-hidden w-full relative antialiased`}>
        <Navbar />
        {children}
        {/* <Footer /> */}
        <FooterSection/>
      </body>
    </html>
  );
}