import React, { Component } from "react";

class Article extends Component {
    constructor() {
        super()
        this.state = {
            adresse: "Sfax",
            nom: "pizzerie",
            // hobbies: ["Sport", "Movies", "Painting"]
            art: [
                { code: "100", designation: "ordianteur", prix: 1500 },
                { code: "101", designation: "portable", prix: 300 },
                { code: "102", designation: "tablette", prix: 400 }
            ]
        }

    }

    handleChange = () => {
        this.setState({ art: [...this.state.art, { code: "103", designation: "Souris", prix: 20 }] })
    }

    render() {
        return (
            <div>
                <h6>{this.state.nom}</h6>
                <h6>{this.state.adresse}</h6>
                <table border={1} align="center">
                    {this.state.art.map((ar, index) =>
                        <tr key={index}>
                            <td>{ar.code}</td>
                            <td>{ar.designation}</td>
                            <td>{ar.prix}</td>
                        </tr>
                    )}
                </table>
                <button onClick={() => this.handleChange()}>Ajouter</button>
                <h1>Liste Des Articles</h1>
                <h2>Article Soldés</h2>

            </div>
        )
    }
}

export default Article