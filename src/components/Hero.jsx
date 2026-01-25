// src/components/Hero.jsx
import { Navbar } from './Navbar';

const Hero = () => {
  return (
    <header className="hero">
      {/* Video Background */}
      <video className="hero__video" autoPlay muted loop playsInline preload="metadata">
        <source 
          src="/videos/adobe-express-ytdowncom-youtube-inicio-spider-man-nuevo_zkmZfU2m (online-video-cutter.com).mp4" 
          type="video/mp4" 
        />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="hero__content">
        <h1 className="hero__title">
          El multiverso no se rompe.
        </h1>
        <p className="hero__text">
          Miles Morales regresa en una experiencia visual inspirada en el
          Spider-Verse de Marvel Studios.
        </p>
        <a href="#characters" className="btn">Explorar el Spider-Verse</a>
      </div>
    </header>
  );
};

export default Hero;