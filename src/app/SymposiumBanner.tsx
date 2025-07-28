'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const SymposiumBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Show banner after a short delay (no localStorage check)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      // No localStorage - banner will reappear on page reload
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-4 right-4 z-50 max-w-sm transition-all duration-300 transform ${
      isClosing ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
    }`}>
      <div className="theme-card-bg border-2 border-blue-500 rounded-lg shadow-2xl p-4 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <X size={18} />
        </button>

        {/* Banner Content */}
        <div className="pr-6">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">🎉</span>
            <h3 className="text-lg font-bold theme-text-primary">8th Young AGErs Symposium</h3>
          </div>
          
          <div className="mb-3">
            <p className="text-sm font-semibold theme-text-accent">📍 Berlin, Germany</p>
            <p className="text-sm font-semibold theme-text-accent">📅 16-17 October 2025</p>
          </div>
          
          <p className="text-sm theme-text-secondary mb-3">
            Join early-career researchers in Maillard reaction science! Share your work, network, and learn.
          </p>
          
          <div className="flex flex-col gap-2">
            <button 
              onClick={() => {
                document.getElementById('symposium')?.scrollIntoView({ behavior: 'smooth' });
                handleClose();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded font-medium transition-colors"
            >
              Learn More
            </button>
            <button
              onClick={handleClose}
              className="text-xs theme-text-muted hover:theme-text-secondary transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymposiumBanner;
