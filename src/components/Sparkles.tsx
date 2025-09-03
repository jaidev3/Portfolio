import React, { useCallback, useEffect, useRef, useState } from 'react';

interface SparkleProps {
  id: string;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
    zIndex: number;
  };
}

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  children?: React.ReactNode;
}

const Sparkle: React.FC<SparkleProps> = ({ id, color, size, style }) => {
  return (
    <span
      id={id}
      style={{
        ...style,
        position: 'absolute',
        display: 'block',
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        animation: `sparkle-animation 700ms ease-in-out infinite alternate`,
        borderRadius: '50%',
      }}
    />
  );
};

const Sparkles: React.FC<SparklesProps> = ({
  id = 'sparkles',
  className = '',
  background = 'transparent',
  minSize = 10,
  maxSize = 20,
  particleDensity = 1.2,
  particleColor = '#FFC700',
  children,
}) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateSparkle = useCallback(
    (color: string): SparkleProps => {
      const sparkle: SparkleProps = {
        id: String(Math.random()),
        color,
        size: Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
        style: {
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          zIndex: 2,
        },
      };
      return sparkle;
    },
    [minSize, maxSize]
  );

  const generateSparkles = useCallback(() => {
    if (!containerRef.current) return [];
    
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const area = containerWidth * containerHeight;
    const numSparkles = Math.floor(area * particleDensity * 0.0001);
    
    return Array.from({ length: numSparkles }, () => generateSparkle(particleColor));
  }, [generateSparkle, particleDensity, particleColor]);

  useEffect(() => {
    const sparkleArray = generateSparkles();
    setSparkles(sparkleArray);

    const interval = setInterval(() => {
      setSparkles((currentSparkles) => {
        const now = Date.now();
        const nextSparkles = currentSparkles.filter(
          (sparkle) => now - parseInt(sparkle.id) < 750
        );
        
        if (Math.random() < 0.8) {
          nextSparkles.push(generateSparkle(particleColor));
        }
        
        return nextSparkles;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [generateSparkles, generateSparkle, particleColor]);

  return (
    <>
      <style>
        {`
          @keyframes sparkle-animation {
            0% {
              transform: scale(0) rotate(0deg);
              opacity: 0;
            }
            50% {
              transform: scale(1) rotate(90deg);
              opacity: 1;
            }
            100% {
              transform: scale(0) rotate(180deg);
              opacity: 0;
            }
          }
        `}
      </style>
      <div
        ref={containerRef}
        className={`relative ${className}`}
        id={id}
        style={{
          background,
        }}
      >
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        {children}
      </div>
    </>
  );
};

export default Sparkles;