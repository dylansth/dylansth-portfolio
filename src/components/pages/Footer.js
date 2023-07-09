import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <Navbar className="bg-body-tertiary" style={{ position: 'fixed', width: '100%', bottom: '0'}}>
            <Container>
        <a href="https://github.com/dylansth" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/dylansthilaire/" target="_blank" rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a href="https://stackoverflow.com/users/22193072/dylansth" target="_blank" rel="noopener noreferrer">
          <BsStackOverflow />
        </a>
            </Container>
        </Navbar>

    )
}

export default Footer;