import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectStats from './components/ProjectStats';
import DreamBuildingSection from './components/DreamBuildingSection';
import ProjectsSection from './components/ProjectsSection';
import CTASection from './components/CTASection';
import TestPage from './components/TestPage';

// Main App Component
export default function App() {
  const [showTestPage, setShowTestPage] = useState(false);

  const handleButtonClick = () => {
    setShowTestPage(true);
  };

  const handleBackToHome = () => {
    setShowTestPage(false);
  };

  if (showTestPage) {
    return <TestPage onBack={handleBackToHome} />;
  }

  return (
    <div className="bg-[#111111] min-h-screen font-sans text-white antialiased">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <ProjectStats />
      <div id="dream-building">
        <DreamBuildingSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="cta">
        <CTASection onButtonClick={handleButtonClick} />
      </div>

      {/* Floating "Made by" tag */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://www.instagram.com/digiplus_xtfp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium tracking-wide hover:bg-gray-700 transition-colors duration-300 cursor-pointer opacity-75"
        >
          Made by digiplus-xtfp
        </a>
      </div>
    </div>
  );
} 