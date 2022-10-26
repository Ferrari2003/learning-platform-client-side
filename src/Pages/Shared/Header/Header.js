import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';
import download from '../../../photo/download.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="black" variant="dark">
            <Container>
                <img className='w-20 rounded' src={download} alt="" />
                <Navbar.Brand className='text' href="#home"><h4 contentEditable="true">Programming</h4></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        
                                            
                    </Nav>
                    <Nav>
                        <Nav.Link> <Link className='text-decoration-none text-white' to={'/'}>Home Pages</Link></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
