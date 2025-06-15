import './globals.css';
import Link from 'next/link';
import Starfield from './components/Starfield'; // make sure this path is correct

export const metadata = {
  title: 'Will Parker',
  description: 'Portfolio of Will Parker – Developer & Student',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark bg-animated-gradient text-white scroll-smooth font-sans relative overflow-x-hidden">
        {/* Animated Starfield Background */}
        <Starfield />

        {/* Navbar */}
        <header className="relative z-10 bg-gray-900/90 backdrop-blur-md shadow sticky top-0 z-50">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-lg font-bold text-blue-400">Will Parker</span>
            <ul className="flex gap-6 text-sm font-medium text-gray-300">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
