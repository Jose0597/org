
import { useState } from 'react';
//npm i uuid
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/Miorg/MiOrg';
import Equipos from './componentes/Equipos/Equipos';
import Footer from './componentes/Footer/Footer';

function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false);

  //para la lista de colaboradores
  const [colaboradores, actualizarColaboradores] = useState([
    { id: uuid(),
      nombre:"Jose",
      puesto:"Alumno Alura",
      foto:"img/spider.jpg",
      equipo:"Frontend",
      fav: true
    },
    { id: uuid(),
      equipo: "Frontend",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    { id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    { id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    { id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    { id: uuid(),
      equipo: "Innovacion y Gestion",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {id: uuid(),
    titulo: "Programacion",
    colorPrimario:"#57C278",
    colorSecundario:"#D9F7E9"},

    {id: uuid(),
    titulo: "Frontend",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF"},

    {id: uuid(),
    titulo: "Data Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2"},

    {id: uuid(),
    titulo: "Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8"},

    {id: uuid(),
    titulo: "UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5"},

    {id: uuid(),
    titulo: "Movil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9"},

    {id: uuid(),
    titulo: "Innovacion y Gestion",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF"}
  ]);

  //mostrar forulario
  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //favorito
  const like = (id) => {
    console.log ("like" ,id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  //Nuevo Equipo
  const registrarEquipo = (nuevoEquipo) => {
    // va hacer un copia de equipos y a la ve va hacer una copia de nuevoequipo y lo va agregar
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
    console.log(nuevoEquipo)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador", colaborador)
    //spread oprator: hace una copia de los valores actuales
    //va tomar el arreglo de colaboradores, los va copiar y va agregar un nuevo colaborador
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    // va filtrar todos los colaboradores que no le hayan hecho click
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color
  const actualizarColor = (color, id) =>{
    console.log("actualizar color: ", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    //debe ser dentro de la funcion
    actualizarEquipos(equiposActualizados)
  }

  //Ternario --> condicion ? seMuestra : noseMuestra  

  return (
    <div className="App">

      <Header />

      {/* formulario manda el titulo de los equipos */}
      {mostrarFormulario === true ? <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      registrarEquipo={registrarEquipo}
      /> : <div></div>}

      <MiOrg cambiarMostrar1={cambiarMostrar}/>

      <section className='equipos-body'>
        {
          equipos.map((equipo) => <Equipos 
          data={equipo} 
          key={equipo.titulo}
          //enviamos la lista de los colaboradores
          //quiero que filtres cada colaborador y que me indiques que colaboradores estan en su equipo  sean igual al titulo
          colaboradores={colaboradores.filter
            (colaborador => colaborador.equipo === equipo.titulo) }
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />)
        }
      </section>

      <Footer/>

    </div>
  );
}

export default App;
