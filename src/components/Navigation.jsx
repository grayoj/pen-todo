import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Hooks from '../pages/Hooks';
import Creator from '../pages/Creator';
import Home from '../pages/Home';

const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link style={{ textDecoration: 'none' }} to='/'>Gerald</Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/home' style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/hooks' style={{ textDecoration: 'none' }}>Hooks</Link></Nav.Link>
                        <Nav.Link><Link to='/creator' style={{ textDecoration: 'none' }}>Creator</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='hooks' element={<Hooks />} />
                <Route path='creator' element={<Creator />} />
            </Routes>
        </>
    )
}

export default Navigation;