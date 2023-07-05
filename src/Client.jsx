import React, { Component } from "react";

class Client extends Component {
    constructor() {
        super()
        this.state = {
            nom: "ESPS",
            adresse: "Sfax",
            tel: "21606505"
        }
    }
    render() {
        return (
            <>
                <h2>Le nom de la société est : {this.state.nom}</h2>
                <h2>L'adresse de la société est : {this.state.adresse} contact : {this.state.tel}</h2>
                <div>Bonjour Monsieur</div>
                <button onClick={() => this.setState({ nom: "ISET", adresse: "Sousse" })}>Changer Nom</button >
            </>
        )
    }
}

export default Client