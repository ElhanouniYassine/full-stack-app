import React, { Component } from 'react';
import {Button, ButtonGroup, Card, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faList, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default class VoitureListe extends Component {
    constructor(props) {
        super(props);
        this.state={
            voitures:[]
        };
    }
    componentDidMount() {
        axios.get("http://localhost:8080/voitures")
            .then(response=> response.data)
            .then((data)=> {
                this.setState({voitures:data});
            });
    }

    deleteVoiture = (voitureId)=>{
        axios.delete(`http://localhost:8080/api/voitures/${voitureId}`)
            .then(response=>{
                if(response.data != null){
                    alert("Voiture supprimée avec succès.");
                    this.setState({
                        voitures:this.state.voitures.filter(voiture => voiture.id !== voitureId)
                    })
                }
            })
    }
    render() {
        return (
            <Card className="border border-dark bg-dark text-white">
                <Card.Header>
                    <FontAwesomeIcon icon={faList}/>
                    Liste Voitures
                </Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                        <tr>
                            <th>Marque</th>
                            <th>Modèle</th>
                            <th>Couleur</th>
                            <th>Année</th>
                            <th>Prix</th>
                            <th>Immatricule</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.voitures.length ===0 ?
                                <tr align="center">
                                    <td colSpan="5">
                                        Voitures disponibles.
                                    </td>
                                </tr> :
                                this.state.voitures.map((voiture)=>(
                                    <tr key={voiture.id}>
                                        <td>{voiture.marque}</td>
                                        <td>{voiture.modele}</td>
                                        <td>{voiture.couleur}</td>
                                        <td>{voiture.immatricule}</td>
                                        <td>{voiture.annee}</td>
                                        <td>{voiture.prix}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/> </Button>{' '}
                                                <Button size="sm" variant="outline-primary" onClick={this.deleteVoiture.bind(this,voiture.id)}><FontAwesomeIcon icon={faTrash}/> </Button>
                                            </ButtonGroup>
                                        </td>

                                    </tr>
                                ))
                        }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        );
    }
}
