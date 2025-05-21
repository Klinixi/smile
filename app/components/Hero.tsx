import React from "react";

const HeroSalonCoiffure = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center" 
      style={{ backgroundImage: "url('/image_2.jpg')" }}
    >
      <div className="bg-pink bg-opacity-50 p-8 rounded-2xl text-white max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenue dans notre Salon de Coiffure</h1>
        <p className="text-lg mb-6">
          Avec Smile Coiffure, retrouvez le sourire. N'attendez-plus! Prenez soin de vous avec nos experts.
        </p>
      </div>

      {/* Image d'arrière-plan supplémentaire */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center" 
        style={{ backgroundImage: "url('/images/your-background-image.jpg')", opacity: 0.3 }}
      ></div>
    </section>
  );
};

export default HeroSalonCoiffure;
