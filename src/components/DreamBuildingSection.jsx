import React from 'react';

// SVG for the Plus Icon
const PlusIcon = (props) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
      clipRule="evenodd"
    />
  </svg>
);

// Dream Building Section Component
const DreamBuildingSection = () => {
  const features = [
    'Coût abordable',
    'Très expérimenté',
    'Livraison complète du projet',
    'Design moderne personnalisé',
    'Meilleur choix d\'intérieur',
  ];

  const singleImageUrl = "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column: Split Image Effect */}
        <div className="grid grid-cols-2 gap-4 h-full min-h-[400px] lg:min-h-[500px]">
            {/* Left Panel */}
            <div 
                className="h-full w-full bg-cover bg-no-repeat" 
                style={{ 
                    backgroundImage: `url(${singleImageUrl})`,
                    backgroundPosition: 'left center' 
                }}
            >
            </div>
            {/* Right Panel */}
            <div 
                className="h-full w-full bg-cover bg-no-repeat" 
                style={{ 
                    backgroundImage: `url(${singleImageUrl})`,
                    backgroundPosition: 'right center'
                }}
            >
            </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Nous Construisons Votre <br /> Bâtiment de Rêve
          </h2>
          <p className="mt-6 text-gray-400 text-lg max-w-lg mx-auto lg:mx-0">
            L'objectif est de préserver la signification historique et culturelle du bâtiment
            tout en le rendant fonctionnel et accessible pour un usage moderne.
          </p>
          <ul className="mt-8 space-y-4 inline-block text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-lg">
                <PlusIcon className="w-5 h-5 text-white mr-3" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <button className="bg-white text-black font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300">
              Voir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamBuildingSection; 