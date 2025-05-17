'use client'
// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          ✂️ Smile Coiffure
        </div>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-black transition">
            Accueil
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-black transition">
            Services
          </Link>
          <Link href="/equipe" className="text-gray-600 hover:text-black transition">
            Notre équipe
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black transition">
            Contact
          </Link>
          <Link href="/rdv" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Prendre RDV
          </Link>
        </nav>
      </div>
    </header>
  );
}
