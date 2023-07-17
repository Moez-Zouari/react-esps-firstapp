import { useState } from "react"

const Compteur = () => {

    const [compt, setCompt] = useState(0)
    const handleplus = () => {
        setCompt(compt + 1)
    }
    const handlemoin = () => {
        setCompt(compt - 1)
    }
    return (
        <>
            <h1>Compteur : {compt}</h1>
            <button onClick={handleplus}>+</button>
            <button onClick={handlemoin}>-</button>
        </>
    )
}
export default Compteur