
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/AppNavbar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Season from './pages/Season'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página individual por ID */}
        <Route path="/season/:id" element={<Season />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
