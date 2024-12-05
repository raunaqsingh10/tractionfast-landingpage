import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;