const Affichepersonne = ({ pers, changePers }) => {
    return (
        <>
            <h1>{pers.nom}</h1>
            <h2>{pers.age}</h2>
            <h2>{pers.ville}</h2>
            <button onClick={changePers}>Modifier</button>

        </>
    )

}
export default Affichepersonne