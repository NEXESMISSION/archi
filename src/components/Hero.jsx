import React from 'react';

// Hero Component
const Hero = () => {
  // New images for the gallery
  const images = [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format=fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format=fit=crop",
  ];

  // Defines the column/row span for each image across different breakpoints
  const layoutClasses = [
    'sm:col-span-1 sm:row-span-2 lg:col-span-5 lg:row-span-1', // First image
    'sm:col-span-1 sm:row-span-1 lg:col-span-4 lg:row-span-1', // Second image
    'sm:col-span-1 sm:row-span-1 lg:col-span-3 lg:row-span-1', // Third image
  ];

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      {/* Hero Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-end">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none tracking-tighter">
            Découvrez Notre <br />
            Héritage Architectural
          </h2>
        </div>
        <div className="text-center lg:text-left">
          <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            Nous sommes ravis du résultat du projet et du niveau de service fourni par votre équipe. Votre expertise est un atout pour votre organisation.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mt-20 md:mt-32">
        {/* Grid layout changes for mobile (sm) and desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-12 lg:grid-rows-1 gap-6">
          {images.map((src, index) => (
            <div key={index} className={`overflow-hidden group ${layoutClasses[index]}`}>
              <img 
                src={src} 
                alt={`Travail architectural ${index + 1}`} 
                className="w-full h-full object-cover lg:aspect-[3/4] transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x800/111111/FFFFFF?text=Image+Non+Trouvée'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero; 