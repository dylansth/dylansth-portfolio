import React from "react";

import NavBar from "./Navbar";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

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
        if (currentPage === 'Contact') {
            return <Contact/>;
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