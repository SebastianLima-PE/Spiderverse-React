// src/components/CharactersSection.jsx
import { useState, useEffect } from 'react';
import Card from './Card';
import { SPIDER_PEOPLE } from '../data/spiderData';

const CharactersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 3; // Mostrar 3 cards a la vez

  // Auto-rotación cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev + 1 >= SPIDER_PEOPLE.length ? 0 : prev + 1
      );
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Función para avanzar
  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= SPIDER_PEOPLE.length ? 0 : prev + 1
    );
  };

  // Función para retroceder
  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? SPIDER_PEOPLE.length - 1 : prev - 1
    );
  };

  // Calcular qué cards mostrar
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = (currentIndex + i) % SPIDER_PEOPLE.length;
      cards.push(SPIDER_PEOPLE[index]);
    }
    return cards;
  };

  return (
    <section className="project" id="characters">
      <h2 className="project__title">Personajes del Multiverso</h2>
      
      <div className="carousel-container">
        {/* Flecha izquierda */}
        <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
          ‹
        </button>

        {/* Cards visibles */}
        <div className="characters-carousel">
          {getVisibleCards().map((spider) => (
            <div key={spider.id} className="carousel-card-wrapper">
              <Card 
                name={spider.name}
                image={spider.image}
                description={spider.description}
              />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
          ›
        </button>
      </div>

      {/* Indicadores (dots) */}
      <div className="carousel-dots">
        {SPIDER_PEOPLE.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir al personaje ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CharactersSection;