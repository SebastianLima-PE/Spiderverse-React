// src/components/MultiverseSection.jsx
import { useState } from 'react';
import { SPIDER_TIMELINE } from '../data/spiderData';
import MovieModal from './MovieModal';

const MultiverseSection = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="multiverse-container" id="multiverse">
      {/* Video de fondo */}
      <video autoPlay muted loop playsInline className="multiverse-video" preload="auto">
        <source
  src={`${import.meta.env.BASE_URL}videos/spiderweb.mp4`}
  type="video/mp4"
/>

        Tu navegador no soporta videos.
      </video>

      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="multiverse-dark-overlay"></div>

      {/* Contenido principal */}
      <div className="multiverse-content">
        <h2 className="multiverse-main-title">El Multiverso Arácnido</h2>
        <p className="multiverse-subtitle">Cuatro universos, un solo héroe</p>

        {/* Grid de Cards Timeline */}
        <div className="multiverse-grid">
          {SPIDER_TIMELINE.map((era, index) => (
            <div 
              key={index} 
              className="multiverse-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header del Card */}
              <div className="multiverse-card-header">
                <span className="multiverse-card-number">0{index + 1}</span>
                <h3 className="multiverse-card-title">{era.era}</h3>
              </div>

              {/* Lista de películas */}
              <div className="multiverse-card-movies">
                {era.movies.map((movie, mIndex) => (
                  <div 
                    key={mIndex} 
                    className="multiverse-movie"
                    onClick={() => handleMovieClick(movie)}
                  >
                    <span className="multiverse-movie-year">{movie.year}</span>
                    <span className="multiverse-movie-title">{movie.title}</span>
                  </div>
                ))}
              </div>

              {/* Línea decorativa */}
              <div className="multiverse-card-line"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </section>
  );
};

export default MultiverseSection;
