'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TypewriterText({ text, className = '', delay = 50 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-full bg-gray-800 animate-pulse ml-1" />
      )}
    </span>
  );
}