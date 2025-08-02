import React, { useState } from 'react';

// SVG for the Arrow Icon
const ArrowIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// Data for projects, organized by year
const projectsByYear = {
  '2024': [
    { id: 1, imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop" },
    { id: 2, imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" },
    { id: 3, imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" },
  ],
  '2023': [
    { id: 4, imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop" },
    { id: 5, imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop" },
    { id: 6, imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop" },
  ],
  '2022': [
    { id: 7, imageUrl: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2670&auto=format&fit=crop" },
    { id: 8, imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop" },
    { id: 9, imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2670&auto=format&fit=crop" },
  ],
  '2021': [
    { id: 10, imageUrl: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2670&auto=format&fit=crop" },
    { id: 11, imageUrl: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?q=80&w=2670&auto=format&fit=crop" },
    { id: 12, imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2670&auto=format&fit=crop" },
  ],
  '2020': [
    { id: 13, imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop" },
    { id: 14, imageUrl: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2670&auto=format&fit=crop" },
    { id: 15, imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2670&auto=format&fit=crop" },
  ],
};

// Projects Section Component
const ProjectsSection = () => {
  const [activeYear, setActiveYear] = useState('2024');
  const years = ['2024', '2023', '2022', '2021', '2020'];
  const currentProjects = projectsByYear[activeYear];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Top Section: Header and Filters */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="text-center lg:text-left">
          <p className="text-gray-400 max-w-sm">
            L'objectif est de préserver la signification historique et culturelle du bâtiment tout en le rendant fonctionnel et accessible pour un usage moderne.
          </p>
          <a href="#" className="mt-4 inline-block text-white font-semibold border-b border-gray-600 hover:border-white transition-colors duration-300">
            Voir tous les projets
          </a>
        </div>
        <div className="text-center lg:text-right">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Nos Projets <br /> Sur Lesquels Nous Avons Travaillé
          </h2>
          <div className="mt-6 flex justify-center lg:justify-end space-x-6 text-lg text-gray-500">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`font-semibold transition-colors duration-300 ${
                  activeYear === year ? 'text-white' : 'hover:text-white'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Project Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
            <div key={project.id} className="relative group overflow-hidden aspect-[4/3]">
                <img 
                  src={project.imageUrl} 
                  alt={`Projet ${project.id}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src='https://placehold.co/800x600/111111/FFFFFF?text=Image+de+Projet'; 
                  }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                        <div className="bg-white/90 text-black rounded-full w-14 h-14 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <ArrowIcon className="w-7 h-7"/>
                        </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection; 