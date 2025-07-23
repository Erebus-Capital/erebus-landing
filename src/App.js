import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderWrapper from './components/HeaderWrapper.jsx';
import Footer from './components/Footer';
import Home from './components/Home';
import LegalPage from './components/LegalPage';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HeaderWrapper><Home /></HeaderWrapper>} />
            <Route path="/privacy" element={<LegalPage page="privacy" />} />
            <Route path="/terms" element={<LegalPage page="terms" />} />
            <Route path="/shareholder" element={<LegalPage page="shareholder" />} />
            <Route path="/stewardship" element={<LegalPage page="stewardship" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
