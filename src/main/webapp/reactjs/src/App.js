import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Bienvenue from './components/Bienvenue';
import Footer from './components/Footer';
import Voiture from './components/Voiture';
import VoitureListe from './components/VoitureListe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: ''
        };
    }

    submitVoiture = (event) => {
        event.preventDefault();
        alert(this.state.marque); // juste pour test
        // ici tu peux ajouter la logique pour ajouter la voiture à la liste
    };

    voitureChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <Router>
                <NavigationBar />
                <Container>
                    <Row>
                        <Col>
                            <Routes>
                                <Route path="/" element={<Bienvenue />} />
                                <Route
                                    path="/add"
                                    element={
                                        <Voiture
                                            voiture={this.state}
                                            submitVoiture={this.submitVoiture}
                                            voitureChange={this.voitureChange}
                                        />
                                    }
                                />
                                <Route path="/list" element={<VoitureListe />} />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Router>
        );
    }
}
