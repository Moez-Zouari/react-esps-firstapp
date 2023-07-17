import React from 'react'

const EnteteFacture = ({ facture, client }) => {
    return (
        <div>
            <div>
                <h3>Facture</h3>
                <h1>Impression Facture</h1>
                <h1>Numéro Facture : {facture.numfac}</h1>
                <h1>Date Facture : {facture.datefact}</h1>
            </div>
            <div>
                <h3>Client</h3>
                <h1>Code Client : {client.codecl}</h1>
                <h1>Raison Social : {client.raisoc}</h1>
                <h1>Responsable : {client.responsable}</h1>
            </div>
        </div>

    )
}

export default EnteteFacture
