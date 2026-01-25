// src/App.jsx
import { useState } from 'react';
import './index.css';
import './styles/components.css'
import './styles/Card.css';
import './styles/footer.css';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import CharactersSection from './components/CharactersSection';
import MultiverseSection from './components/MultiverseSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      
      <Hero />
      <main>
        <CharactersSection />
        <MultiverseSection />
      </main>
      <Footer />
    </>
  );
}

export default App;