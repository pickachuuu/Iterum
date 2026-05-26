import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
  delay?: string; // Tailwind transition-delay classes (e.g. 'delay-75', 'delay-100', etc.)
  duration?: string; // Tailwind transition-duration classes (e.g. 'duration-500', 'duration-700', etc.)
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = '',
  duration = 'duration-700',
  className = '',
  threshold = 0.05
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once animated to save cycles
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  // Premium, GPU-Accelerated Transition Variants
  const variantStyles = {
    'fade-up': {
      hidden: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    'fade-in': {
      hidden: 'opacity-0',
      visible: 'opacity-100'
    },
    'scale-up': {
      hidden: 'opacity-0 scale-96 translate-y-4',
      visible: 'opacity-100 scale-100 translate-y-0'
    },
    'slide-left': {
      hidden: 'opacity-0 -translate-x-8',
      visible: 'opacity-100 translate-x-0'
    },
    'slide-right': {
      hidden: 'opacity-0 translate-x-8',
      visible: 'opacity-100 translate-x-0'
    }
  };

  const currentVariant = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${duration} ${delay} ${
        isVisible ? currentVariant.visible : currentVariant.hidden
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}
