// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-logo">MARVEL <span>STUDIOS</span></h2>
          <p>Explorando el Multiverso a través de los ojos de Peter Parker y Miles Morales.</p>
        </div>

        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#characters">Personajes</a></li>
            <li><a href="#timeline">Cronología</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <p className="legal-text">
            © 2026 MARVEL. Todas las imágenes y personajes son propiedad de Marvel Characters, Inc. y Sony Pictures. Este es un proyecto fan-made con fines educativos.
          </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Diseñado con ❤️ por Sebastian PL | Spider-Verse Experience</p>
      </div>
    </footer>
  );
};

export default Footer;