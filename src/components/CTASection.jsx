import React from 'react';

// CTA Section Component
const CTASection = ({ onButtonClick }) => {
  // Updated background image URL to match architectural theme
  const backgroundImageUrl = "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop";

  return (
    <div 
      className="relative w-full bg-cover bg-center py-24 md:py-32" 
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-semibold">
          Engagez-vous Avec Nos Architectes Experts
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Planifiez Une Consultation Aujourd'hui
        </p>
        <div className="mt-8">
          <button 
            onClick={onButtonClick}
            className="bg-white text-black font-semibold py-3 px-10 rounded-md hover:bg-gray-200 transition-colors duration-300 text-lg"
          >
            Réserver Maintenant
          </button>
        </div>
        
        {/* Made by credit */}
        <div className="mt-16 pt-8 border-t border-gray-600/30">
          <p className="text-gray-400 text-sm">
            Fait par <span className="text-white font-medium">digiplus-xtfp</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 