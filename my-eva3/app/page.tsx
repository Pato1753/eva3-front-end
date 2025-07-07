'use client'

import { useState } from "react";
import { Persona } from "./Persona";
import { MostrarPersonas } from "./MostrarPersonas";

const initialStatePersona:Persona = {
  nombre : "",
  apellido:"",
  rut: 0  //solucionar estoooooooooooooooo
}

export default function Home() {
  const miStorange = window.localStorage
  const [personaNom, setpersonaNom] = useState(initialStatePersona)
  const [personaApe, setpersonaApe] = useState(initialStatePersona)
  const [personaRUT, setpersonaRUT] = useState(initialStatePersona)
  const [personas, setpersonas] = useState<Persona[]>([])
  const [eNombre, seteNombre] = useState("")
  const [eApellido, setEApellido] = useState("")
  const [eRUT, setERUR] = useState("")

  const handlePersona = (name:string, value:string)=>{
    setpersonaNom(
      {...personaNom,[name] : value }
    )
  }

  const handleRegistrar = ()=>{
    miStorange.setItem("personas",JSON.stringify([...personas,personaNom]))
  }

  // const handleActualizar

  // const handleEliminar

  const traerPersona = (p:Persona)=>{
    setpersonaApe(p)
  }
    


  return (
    <>
      <h1 style={{color:"blue", 
        backgroundColor : "black", 
        fontSize : 40, 
        textAlign : "center"}}> Lista de estudiante </h1>
        <div style={{textAlign : "right", marginRight : 20,marginTop : 20}}>
          <p>Nombre:  {personaNom.nombre}</p>
          <p>Apellido: {personaNom.apellido}</p>
          <p>Rut:  {personaNom.rut}</p>
          <form>
            <input style={{textAlign : "center", backgroundColor:'#D3D3D3'}}
             type="text" name="nombre" placeholder="Nombre"
             onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />
            <input style={{textAlign : "center",backgroundColor:'#D3D3D3', marginTop:5}}
            type="text" name="apellido" placeholder="Apellido"
            onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />
            <input style={{textAlign : "center",backgroundColor:'#D3D3D3', marginTop:5}}
            type= "number" name="run" placeholder="Rut"
            onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />
            <button style={{backgroundColor:"grey",border: '2px solid rgb(0, 0, 0)', marginTop:10, marginRight:13}}
            id="BRegistro"
            onClick={()=>{handleRegistrar()}}>Soy el boton de registro</button>
          </form>

           <MostrarPersonas Saludo = "Hola Como estas" traerPersona = {traerPersona}/>
        </div>


    </>
    );
}
