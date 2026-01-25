// src/components/LoadingScreen.jsx
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular carga progresiva
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Esperar un poco antes de ocultar
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Logo/Icono Spider */}
        <div className="spider-logo">
          <svg viewBox="0 0 100 100" className="spider-icon">
            <path
              d="M50 20 L50 40 M30 35 L50 50 L70 35 M25 50 L50 50 L75 50 M30 65 L50 50 L70 65 M50 60 L50 80"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
          </svg>
        </div>

        {/* Texto */}
        <h2 className="loading-title">SPIDER-VERSE</h2>
        <p className="loading-subtitle">Cargando el Multiverso...</p>

        {/* Barra de progreso */}
        <div className="loading-bar-container">
          <div 
            className="loading-bar-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="loading-percentage">{progress}%</span>

        {/* Telaraña animada de fondo */}
        <div className="web-decoration web-top-left"></div>
        <div className="web-decoration web-top-right"></div>
        <div className="web-decoration web-bottom-left"></div>
        <div className="web-decoration web-bottom-right"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;