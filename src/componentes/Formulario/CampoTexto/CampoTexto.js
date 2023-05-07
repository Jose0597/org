
import "./CampoTexto.css"

const CampoTexto = (props) =>{

    const placeholderModi = `${props.placeholder} ...`

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className="campo">
            <label>{props.titulo}</label>
            <input
                type={props.tipo} 
                placeholder={placeholderModi} 
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}>
            </input>
        </div>
}

export default CampoTexto
