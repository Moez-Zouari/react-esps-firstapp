import React from 'react'

const DetailFacture = ({ articles }) => {
    return (
        <div>
            <h3>Articles</h3>
            <center>
                <table border={1}>
                    <tr>
                        <th>Référence</th>
                        <th>Désignation</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                    </tr>
                    {articles.map((art, index) =>
                        <tr key={index}>
                            <td>{art.reference}</td>
                            <td>{art.designation}</td>
                            <td>{art.qte}</td>
                            <td>{art.prix}</td>
                        </tr>
                    )}
                </table>
            </center>
        </div>
    )
}

export default DetailFacture
