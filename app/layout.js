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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
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