import React, { Component } from 'react';
import { Card, Form, Button, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlusSquare,faSave,faUndo } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default class Voiture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: '',
            immatricule: ''
        };

        // Liaisons
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
        this.resetVoiture = this.resetVoiture.bind(this);
    }

    resetVoiture = () => {
        this.setState({
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            prix: '',
            immatricule: ''
        });
    }

    submitVoiture = event => {
        event.preventDefault();
        const voiture = {
            marque: this.state.marque,
            modele: this.state.modele,
            couleur: this.state.couleur,
            immatricule: this.state.immatricule,
            annee: this.state.annee,
            prix: this.state.prix
        };

        axios.post("http://localhost:8080/voitures", voiture)
            .then(response => {
                if (response.data != null) {
                    this.setState(this.initialState);
                    alert("Voiture enregistrée avec succès");
                }
            })
            .catch(error => {
                console.error("Il y a eu une erreur lors de l'enregistrement de la voiture : ", error);
            });
    }


    voitureChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Ajouter Voiture</Card.Header>
                <Form id="VoitureFormId" onSubmit={this.submitVoiture} onReset={this.resetVoiture}>
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
                                        autoComplete="off"
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
                                        autoComplete="off"
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Modèle Voiture"
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} controlId="formGridCouleur">
                                    <Form.Label>Couleur</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="couleur"
                                        value={this.state.couleur}
                                        autoComplete="off"
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
                                        autoComplete="off"
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
                                        autoComplete="off"
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Prix"
                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group as={Col} controlId="formGridImmatricule">
                                    <Form.Label>Immatricule</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="immatricule"
                                        value={this.state.immatricule}
                                        autoComplete="off"
                                        onChange={this.voitureChange}
                                        className="bg-dark text-white"
                                        placeholder="Entrez Immatricule"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Card.Body>

                    <Card.Footer style={{ textAlign: "right" }}>
                        <Button size="sm" variant="success" type="submit">
                            <FontAwesomeIcon icon={faSave} /> Submit
                        </Button>{' '}
                        <Button size="sm" variant="info" type="reset">
                            <FontAwesomeIcon icon={faUndo} /> Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        );
    }


}
