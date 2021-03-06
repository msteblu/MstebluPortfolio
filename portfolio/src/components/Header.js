import React, { useState } from 'react';
import Navigation from './Navigation';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <div>
        <nav className="navbar sticky-top navbar-light pink shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">msteblu</span>
          {/* We are passing the currentPage from state and the function to update it */}
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </nav>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      </div>
    );
}