
import React from 'react';
import Navbar from './navbar';
import SideNavbar from './SideNavbar';
import LandingPage from './components/LandingPage';
import SendEmail from './components/SendEmail';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SideNavbar />
        <div style={{ flex: 1, marginLeft: '250px', padding: '0px'}}>
          < Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sendemail" element={<SendEmail />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


