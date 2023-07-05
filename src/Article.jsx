import React, { Component } from "react";

class Article extends Component {
    constructor() {
        super()
        this.state = {
            adresse: "Sfax",
            nom: "pizzerie",
            hobbies: ["Sport", "Movies", "Painting"]
        }

    }

    render() {
        return (
            <div>
                <h6>{this.state.nom}</h6>
                <h6>{this.state.adresse}</h6>
                <table border={1}>
                    {this.state.hobbies.map((art, index) =>
                        <tr key={index}><td>{art}</td></tr>
                    )}
                </table>
                <h1>Liste Des Articles</h1>
                <h2>Article Soldés</h2>

            </div>
        )
    }
}

export default Article