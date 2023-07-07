import React from "react";

import NavBar from "./Navbar";
import AboutPhoto from './AboutPhoto';
import PortfolioCards from './PortfolioCards';
import ContactForm from './ContactForm';

import { useState } from "react";

export default function WholePort() {

    const [currentPage, setCurrentPage] = useState('');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <AboutPhoto/>;
        }
        if (currentPage === 'About') {
            return <AboutPhoto/>;
        }
        if (currentPage === 'Portfolio') {
            return <PortfolioCards/>;
        }
        if (currentPage === 'Contact') {
            return <ContactForm/>;
        }
        return <ContactForm/>
    };

    const handlePageChange = (page) => setCurrentPage(page);


    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}