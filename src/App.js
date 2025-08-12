import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobBoard from './components/JobBoard';
import Preferences from './components/Preferences';
import HowToApply from './components/HowToApply';
import './styles/pnbank.css';

import Home from './components/Home'; // Assuming you have a Home component

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/preferences" element={<Preferences />} />
            <Route path="/how-to-apply" element={<HowToApply />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;