
import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const equipos = [
        "Programacion",
        "Frontend",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
        console.log(e.target.value)
    }

    return <div className="combo">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio
        }>
            {/* { equipos.map ( (equipo, index) => {
                return <option key={index}>{equipo}</option>
            } ) } */}
            <option value="" disabled defaultValue="" hidden>Seleccione un equipo</option>

            {/* atraves del props recibe los equipos y con el map se devuelve un nuevo arreglo */}
            { props.equipos.map ( (equipo, index) => <option key={index}>{equipo}</option> ) }

        </select>
    </div>
}

export default ListaOpciones