
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/AppNavbar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Season from './pages/Season'; 
import ContentItem from './pages/ContentItem'; // <-- página de busca

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Resultados da busca */}
        <Route path="/search" element={<ContentItem />} />  {/* <-- adicionada */}

        {/* Página individual */}
        <Route path="/season/:id" element={<Season />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
