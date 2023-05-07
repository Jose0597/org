
import Colaborador from './Colaborador/Colaborador'
import './Equipos.css'
import hexToRgba from 'hex-to-rgba';

const Equipos = (props) => {

    // tambien se puede declara de esta manera - destructurar
    const {colorPrimario, colorSecundario, titulo, id} = props.data

    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const color_body = { backgroundColor: hexToRgba(colorPrimario, .6) }

    const border = {borderColor: colorPrimario}

    //mostrando solo los colabores registrados
    return <>   
        { 
            colaboradores.length > 0 &&
            <section className='equipos' style={ color_body }>
                <input type='color' 
                    className='input-color'
                    value={colorPrimario}
                    //e.target.value: obtener el valor del input
                    onChange={(e) => { actualizarColor(e.target.value, id) }}/>
                <h3 style={ border }>{titulo}</h3>
                <div className='colaboradores-body'>
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}/> )
                    }
                </div>
            </section>
        }
    </>
}


export default Equipos