'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <nav className="fixed top-0 w-full theme-nav-bg backdrop-blur-sm z-50 theme-border border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo_2023.png" alt="Young Agers Logo" width={40} height={40} />
              <span className="text-xl font-bold theme-text-primary">
                Young Agers
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/#about" className="theme-text-primary hover:text-blue-600 px-3 py-2 transition-colors">About</Link>
              <Link href="/#mission" className="theme-text-primary hover:text-blue-600 px-3 py-2 transition-colors">Mission</Link>
              <Link href="/#symposium" className="theme-text-primary hover:text-blue-600 px-3 py-2 transition-colors">Symposium</Link>
              <Link href="/gallery" className="theme-text-primary hover:text-blue-600 px-3 py-2 transition-colors">Gallery</Link>
              <Link href="/#contact" className="theme-text-primary hover:text-blue-600 px-3 py-2 transition-colors">Contact</Link>
            </div>
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
