
import './Colaborador.css'

const Colaborador = (props) =>{

    const {nombre,puesto,foto,equipo,id, fav} = props.datos

    //destructura el color primario que viene directo de props
    const {colorPrimario,eliminarColaborador,like} = props

    return <div className='colaborador'>
        {/* ejecuta esta funcion (eliminarCol...) a menos que el ususario haga onClick */}
        <span className='btn-eliminar' onClick={() => eliminarColaborador(id)}><i class="fa-sharp fa-solid fa-rectangle-xmark"></i></span>
        <div className='encabezado' style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? 
            <span onClick={()=>like(id)}><i className="fa-solid fa-heart fav"></i></span> : 
            <span onClick={()=>like(id)}><i className="fa-regular fa-heart fav no-fav"></i></span>}
        </div>  
        
    </div>
}

export default  Colaborador