import React from "react";
import { Container, Row } from "react-bootstrap";

class Bienvenue extends React.Component {
    render() {
        return (
            <Container className="mt-4">
                <Row>
                    <div className="bg-dark text-white p-5 mb-4 rounded-3 shadow">
                        <h1>Bienvenue au Magasin des Voitures</h1>
                        <blockquote className="blockquote mb-0">
                            <p>Le meilleur de nos voitures est exposé près de chez vous</p>
                            <footer className="blockquote-footer text-white-50">
                                Master MIOLA
                            </footer>
                        </blockquote>
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Bienvenue;
