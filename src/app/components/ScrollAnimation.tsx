'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale';
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    'fade-up': `transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`,
    'fade-in': `transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`,
    'slide-left': `transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
    }`,
    'slide-right': `transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
    }`,
    'scale': `transition-all duration-700 ease-out ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
    }`
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}