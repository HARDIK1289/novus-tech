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
      {/* 3. Add the variable to the body class list */}
      // In app/layout.js
<body className={`${inter.className} bg-black text-white overflow-x-hidden antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}