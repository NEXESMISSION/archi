import React from 'react';

// Test Page Component
const TestPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-gray-800/50 rounded-lg p-8 md:p-12 border border-gray-700/50">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Ceci est juste un test
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Et une maquette pour vous permettre de voir la page de destination
          </p>
          <div className="space-y-4">
            <p className="text-gray-400">
              Cette page démontre que le bouton fonctionne correctement.
            </p>
            <p className="text-gray-400">
              C'est une simulation de ce que pourrait être la page de réservation.
            </p>
          </div>
          <button 
            onClick={onBack}
            className="mt-8 bg-white text-black font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors duration-300"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 