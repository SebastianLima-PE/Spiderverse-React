// src/components/MovieModal.jsx

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  // Función para renderizar estrellas
  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Botón cerrar */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Header con título y año */}
        <div className="modal-header">
          <div className="modal-year-badge">{movie.year}</div>
          <h2 className="modal-title">{movie.title}</h2>
          <p className="modal-director">Dirigida por {movie.director}</p>
          <div className="modal-rating">
            {renderStars(movie.rating)}
          </div>
        </div>

        {/* Grid de contenido */}
        <div className="modal-grid">
          {/* Columna izquierda - Info principal */}
          <div className="modal-left">
            <div className="modal-section">
              <h3 className="modal-section-title">📝 Sinopsis</h3>
              <p className="modal-text">{movie.synopsis}</p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">🎭 Reparto Principal</h3>
              <ul className="modal-cast-list">
                {movie.cast.map((actor, index) => (
                  <li key={index} className="modal-cast-item">
                    <span className="cast-bullet">•</span> {actor}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha - Curiosidades */}
          <div className="modal-right">
            <div className="modal-section">
              <h3 className="modal-section-title">✨ Curiosidades</h3>
              <ul className="modal-trivia-list">
                {movie.trivia.map((fact, index) => (
                  <li key={index} className="modal-trivia-item">
                    <span className="trivia-number">{index + 1}</span>
                    <span className="trivia-text">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer con botón */}
        <div className="modal-footer">
          <button className="modal-btn" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
