// components/Hero.js
'use client';

export default function Hero() {
  return (
    <section className="bg-[url('/images/hero-bg.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Bienvenue chez Smile Coiffure</h1>
        <p className="text-gray-600 mb-6">Prenez soin de vos cheveux avec nos experts coiffure.</p>
        <a href="/rdv" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Prendre un Rendez-vous</a>
      </div>
    </section>
  );
}
