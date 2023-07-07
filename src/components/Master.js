import React from "react";

import NavBar from "./pages/Navbar";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import { useState } from "react";

export default function Master() {

    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <About/>;
        }
        if (currentPage === 'About') {
            return <About/>;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
        return <Contact/>
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}