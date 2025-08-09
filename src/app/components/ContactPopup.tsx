'use client';

import { useState } from 'react';

export default function ContactPopup() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <a 
        href="#" 
        onClick={handleClick}
        className="group inline-block bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white text-lg sm:text-xl font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-2xl shadow-blue-600/40 hover:shadow-3xl hover:shadow-blue-700/50 tracking-wide relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
          Contact
          <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      </a>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full shadow-2xl pointer-events-auto animate-popIn border border-gray-200">
            <div className="text-center">
              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-bold text-gray-900">Nelson Alex</p>
                <p className="text-base sm:text-lg text-gray-600">nelsontharappel4@gmail.com</p>
              </div>
              <button
                onClick={closePopup}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}