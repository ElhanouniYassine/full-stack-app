import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/17/Tata_Tamo_Racemo.jpg"
                        width="25"
                        height="25"
                        alt="Car logo"
                        className="d-inline-block align-top"
                    />{' '}
                    Magasin des Voitures
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/add">
                        Ajouter Voiture
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list">
                        Liste Voitures
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavigationBar;
