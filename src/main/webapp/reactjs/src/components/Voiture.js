import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faList, faPlusSquare} from "@fortawesome/free-solid-svg-icons";
export default class Voiture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: '',
            immatricule:''
        };

        // Liaisons
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }

    voitureChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitVoiture(event) {
        event.preventDefault();
        alert(`Voiture: ${this.state.marque}, ${this.state.modele}`);
    }

    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/>  Ajouter Voiture</Card.Header>
                <Form id="VoitureFormId" onSubmit={this.submitVoiture}>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Group as={Col} controlId="formGridMarque">
                                    <Form.Label>Marque</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="marque"
                                        value={this.state.marque}
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Marque Voiture"
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} controlId="formGridModele">
                                    <Form.Label>Modèle</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="modele"
                                        value={this.state.modele}
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Modèle Voiture"
                                    />
                                </Form.Group>
                            </Col>

                            {/* Champs supplémentaires */}
                            <Col>
                                <Form.Group as={Col} controlId="formGridCouleur">
                                    <Form.Label>Couleur</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="couleur"
                                        value={this.state.couleur}
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Couleur"
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} controlId="formGridAnnee">
                                    <Form.Label>Année</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="annee"
                                        value={this.state.annee}
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Année"
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} controlId="formGridPrix">
                                    <Form.Label>Prix</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="prix"
                                        value={this.state.prix}
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Prix"
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group as={Col} controlId="formGridCouleur">
                                    <Form.Label>Immatricule</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="immatricule"
                                        value={this.state.immatricule}
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez immatricule"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Footer style={{ textAlign: 'right' }}>
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }
}
