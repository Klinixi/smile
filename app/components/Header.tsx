// components/Header.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">✂️ Smile Coiffure</div>
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="cursor-pointer">☰</div>
        </div>
        <nav className={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'} md:flex`}> 
          <Link href="/" className="text-gray-600 hover:text-black transition">Accueil</Link>
          <Link href="/services" className="text-gray-600 hover:text-black transition">Services</Link>
          <Link href="/equipe" className="text-gray-600 hover:text-black transition">Notre équipe</Link>
          <Link href="/contact" className="text-gray-600 hover:text-black transition">Contacts</Link>
          
          <Link href="/rdv" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Prendre RDV</Link>
        </nav>
      </div>
    </header>
  );
}
