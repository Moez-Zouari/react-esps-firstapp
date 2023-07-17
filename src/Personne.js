import { useState } from "react"

const Personne = () => {
    const [pers1, setPers1] = useState({
        nom: "Moez",
        age: 25,
        ville: "Sfax"
    })
    const changePers = () => {
        setPers1({ ...pers1, nom: "Ali" })
    }
    return (
        <>
            <h1>{pers1.nom}</h1>
            <h2>{pers1.age}</h2>
            <h2>{pers1.ville}</h2>
            <button onClick={changePers}>Modifier</button>
        </>)

}
export default Personne