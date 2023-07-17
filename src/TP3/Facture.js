import React, { useState } from 'react'
import EnteteFacture from './EnteteFacture';

const Facture = () => {
    const [facture, setFacture] = useState({
        numfact: "100",
        datefact: "18/05/2022"
    });
    const [client, setClient] = useState({
        codecl: 12,
        raisoc: "Confort-Plus",
        responsable: "Turki Mounir"
    });
    const [articles, setArticle] = useState([
        { reference: "1", designation: "la vaisselle", qte: 3, prix: 1500 },
        { reference: "3", designation: "Machine a laver", qte: 3, prix: 1200 },
        { reference: "17", designation: "Micro-onde", qte: 4, prix: 300 }
    ]);
    return (
        <div>
            <EnteteFacture facture={facture} client={client} />
        </div>
    )
}

export default Facture
