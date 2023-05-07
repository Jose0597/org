
import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {

    //EJEMPLO DE STATE
    // const [mostrar,actualizarMostrar] = useState(true);

    // const manejarClick = () => {
    //     console.log("mostra/ocultar elemento", mostrar);
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3>Mi Organizacion</h3>
        <img src="./add.png" alt="agregar" onClick={props.cambiarMostrar1}></img>
    </section>
}

export default MiOrg
