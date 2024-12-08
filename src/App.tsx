import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { initGA, logPageView } from './utils/analytics';
import { initClarity } from './utils/clarity';

function App() {
  const location = useLocation();

  useEffect(() => {
    initGA();
    initClarity();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

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