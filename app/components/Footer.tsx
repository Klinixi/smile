// components/Footer.js
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2023 Smile Coiffure. Tous droits réservés.</p>
        <nav className="space-x-4 mt-4 sm:mt-0">
          <a href="/" className="text-gray-400 hover:text-white">Accueil</a>
          <a href="/services" className="text-gray-400 hover:text-white">Services</a>
          <a href="/equipe" className="text-gray-400 hover:text-white">Notre équipe</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}