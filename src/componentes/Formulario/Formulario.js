
import { useState } from "react"
import "./Formulario.css"
import "./CampoTexto/CampoTexto"
import CampoTexto from "./CampoTexto/CampoTexto"
import ListaOpciones from "./ListaOpciones/ListaOpciones"
import Boton from "./Boton/Boton"

const Formulario = (props) =>{

    const {registrarColaborador, registrarEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosEnviar = {nombre,puesto,foto,equipo}
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        registrarEquipo({titulo, colorPrimario: color})
    }

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellenar el Formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                tipo="text"
                placeholder="Ingresar nombre" 
                required={true}
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto 
                titulo="Puesto" 
                tipo="text"
                placeholder="Ingresar puesto" 
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                tipo="text"
                placeholder="Ingresar enlace de foto" 
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarValor={actualizarEquipo}
                // atraves de la props, recibe los equipos
                equipos={props.equipos}
            />
            <Boton>Registrar Colaborador</Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellenar el Formulario para crear el equipo</h2>
            <CampoTexto 
                titulo="Titulo" 
                tipo="text"
                placeholder="Ingresar Titulo" 
                required={true}
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <CampoTexto 
                titulo="Color" 
                tipo="color"
                // placeholder="Ingresar color en Hex" 
                required
                valor={color}
                actualizarValor={actualizarColor}
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario