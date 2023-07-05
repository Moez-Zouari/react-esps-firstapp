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

    handleChange = () => {
        this.setState({ hobbies: [...this.state.hobbies, "Aerobic"] })
    }

    render() {
        return (
            <div>
                <h6>{this.state.nom}</h6>
                <h6>{this.state.adresse}</h6>
                <table border={1} align="center">
                    {this.state.hobbies.map((art, index) =>
                        <tr key={index}><td>{art}</td></tr>
                    )}
                </table>
                <button onClick={() => this.handleChange()}>Modifier</button>
                <h1>Liste Des Articles</h1>
                <h2>Article Soldés</h2>

            </div>
        )
    }
}

export default Article