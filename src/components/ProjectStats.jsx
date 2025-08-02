import React, { useState } from 'react';

// SVG for the Play Icon
const PlayIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

// SVG for the Close Icon
const CloseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

// Video Modal Component
const VideoModal = ({ videoId, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={onClose}>
      <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Lecteur vidéo YouTube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

// Project Stats Component
const ProjectStats = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const youtubeVideoId = "dQw4w9WgXcQ"; // Example YouTube Video ID

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-white">
              15K+
            </h2>
            <p className="mt-2 text-lg font-semibold tracking-[0.2em] text-gray-400">
              PROJETS TERMINÉS
            </p>
            <p className="mt-10 text-gray-300 text-lg leading-relaxed">
              Le niveau de communication tout au long du projet était excellent, et
              nous étions toujours tenus informés des progrès et de tout problème potentiel
              qui surgissait. L'attention aux détails de l'équipe et sa capacité à résoudre les problèmes
              ont assuré que le projet restait sur la bonne voie et était terminé à temps.
            </p>
            <div className="mt-10 pt-10 border-t border-gray-700/50 flex flex-col items-center lg:items-start">
              <p className="font-bold text-white text-xl">Mark Stofen</p>
              <p className="text-gray-500">Professeur d'Anglais</p>
            </div>
          </div>

          {/* Right Column: Image with Video Overlay */}
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop"
              alt="Projet architectural moderne"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/111111/FFFFFF?text=Image+Non+Trouvée'; }}
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end p-8 transition-opacity duration-300">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white text-black rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300"
                >
                  <PlayIcon className="w-8 h-8" />
                </button>
                <p className="text-white font-semibold text-lg">
                  Découvrez comment nous examinons nos projets pour vous
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && <VideoModal videoId={youtubeVideoId} onClose={() => setIsVideoOpen(false)} />}
    </>
  );
};

export default ProjectStats; 