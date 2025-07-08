'use client'

import { useEffect, useState } from "react";
import { Persona } from "./Persona";
import { MostrarPersonas } from "./MostrarPersonas";

const initialStatePersona:Persona = {
  nombre : "",
  apellido:"",
  rut: 0
}

export default function Home() {
  const miStorange = window.localStorage
  const [personaNom, setpersonaNom] = useState(initialStatePersona)
  const [personaApe, setpersonaApe] = useState(initialStatePersona)
  const [personaRUT, setpersonaRUT] = useState(initialStatePersona)
  const [personas, setpersonas] = useState<Persona[]>([])
  const [eNombre, seteNombre] = useState("")
  const [eApellido, setEApellido] = useState("")
  const [eRUT, setERUT] = useState("")

let numeros = ["1","2","3","4","5","6","7","8","9","0"]


  const handlePersona = (name:string, value:string)=>{
    setpersonaNom(
      {...personaNom,[name] : value }
    )
    if(name == "nombre" && value.length<3){
      seteNombre("El nombre debe tener mas de 2 caracteres")
    }else if(name=="nombre"&& value.length>2){
      seteNombre("")
    }
    if(name == "apellido"&& value.length<1){
      setEApellido("El apellido debe tener mas de 1 caracteres")
    }else if(name=="apellido"&&value.length>1){
      setEApellido("")
    }

  }


  useEffect(()=>{
    let listadoStr = miStorange.getItem("personas")
    if(listadoStr != null){
      let listado = JSON.parse(listadoStr)
      setpersonas(listado)
    }
  })


  const handleRegistrar = ()=>{
    miStorange.setItem("personas",JSON.stringify([...personas,personaNom]))
  }

  // const handleActualizar = ()=>{

  // }

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
             onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />

             <span>{eNombre}</span>
            <br />

            <input style={{textAlign : "center",backgroundColor:'#D3D3D3', marginTop:5}}
            type="text" name="apellido" placeholder="Apellido"
            onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />
            <span>{eApellido}</span> <br />

            <input style={{textAlign : "center",backgroundColor:'#D3D3D3', marginTop:5}}
            type= "number" name="rut" placeholder="Rut"
            onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />

            <button style={{backgroundColor:"grey",border: '2px solid rgb(0, 0, 0)', marginTop:10, marginRight:13}}
            id="BRegistro"
            onClick={()=>{handleRegistrar()}}>Registrar</button>

          <MostrarPersonas traerPersona={traerPersona}/>
          </form>
          
            <h1>Apartado para editar</h1>
      
            <input type="text" name="nombre" placeholder="Nombre" 
            value={personaApe.nombre} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />
            <input type="text" name="apellido" placeholder="Apellido" 
            value={personaApe.apellido} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />
            <input type="number" name="rut" placeholder="Rut" 
            value={personaApe.apellido} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />
            <button onClick={()=>{}}>Editar</button>
            
        </div>


    </>
    );
}
