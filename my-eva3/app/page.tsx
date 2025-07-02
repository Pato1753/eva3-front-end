'use client'

import { useState } from "react";
import { Persona } from "./Persona";

const initialStatePersona:Persona = {
  nombre : "",
  apellido:"",
  rut:0
}

export default function Home() {
  const miStorange = window.localStorage
  const [persona, setpersonaNom] = useState(initialStatePersona)
  const [personaApe, setpersonaApe] = useState(initialStatePersona)
  const [personaRUT, setpersonaRUT] = useState(initialStatePersona)
  const [personas, setpersonas] = useState<Persona[]>([])
  const [eNombre, seteNombre] = useState("")
  const [eApellido, setEApellido] = useState("")
  const [eRUT, setERUR] = useState("")
  return (
    <div>
      <h1 style={{color:"blue", 
        backgroundColor : "black", 
        fontSize : 40, 
        textAlign : "center"}}>
        Lista de estudiante</h1>
        <div style={{textAlign : "right", marginRight : 20}}>
          <form>
            <input style={{textAlign : "center"}}
             type="text" name="nombre" placeholder="Nombre"/>
            <br />
            <input type="text" name="apellido" placeholder="Apellido" />
            <br />
            <input type= "number" name="run" placeholder="Rut" />
            <br />
            <button id="BRegistro">Soy el boton de registro</button>
          </form>
        </div>


    </div>
    );
}
