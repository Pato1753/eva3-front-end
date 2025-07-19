'use client'

import { useCallback, useEffect, useState } from "react";
import { Persona } from "./Persona";
import { MostrarPersonas } from "./MostrarPersonas";
import { agregarEstudiante, obtenerEstudiantes } from "./firebase/firebaseServise";

const initialStatePersona:Persona = {
  nombre : "",
  apellido:"",
  rut: 0
}

export default function Home() {

  const [nuevoEstudiante, setnuevoEstudiante] = useState<Persona>(initialStatePersona);
  const [personas, setpersonas] = useState<Persona[]>([])
  const [eNombre, seteNombre] = useState("")
  const [eApellido, setEApellido] = useState("")
  const [eRUT, setERUT] = useState("")

  const handlePersona = (name:string, value:string)=>{
  setnuevoEstudiante(prev => ({
    ...prev,
    [name]: value
}));
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

  const cargarPersonas = useCallback(async() => {
    const datos = await obtenerEstudiantes()
    setpersonas(datos)
  },[])

  useEffect(()=>{
    cargarPersonas()
  },[cargarPersonas])


  const handleRegistrar = async()=>{
  if (nuevoEstudiante.nombre && nuevoEstudiante.apellido && nuevoEstudiante.rut !== 0) {

    await agregarEstudiante(nuevoEstudiante)
    cargarPersonas()
    setnuevoEstudiante(initialStatePersona)
    window.location.reload();
    alert("Estudiante registrado")
  } else{
    alert("Ingresa todos los datos del estudiante")

  }


  }



  return (
    <>
      <h1 style={{color:"blue", 
        backgroundColor : "black", 
        fontSize : 40, 
        textAlign : "center"}}> Lista de estudiante </h1>
        <div style={{textAlign : "right", marginRight : 20,marginTop : 20}}>
          <p>Nombre:  {nuevoEstudiante.nombre}</p>
          <p>Apellido: {nuevoEstudiante.apellido}</p>
          <p>Rut:  {nuevoEstudiante.rut}</p>
          <form>

            <input style={{textAlign : "center", backgroundColor:'#D3D3D3'}}
             type="text" name="nombre" placeholder="Nombre" value={nuevoEstudiante.nombre}
             onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />

             <span>{eNombre}</span>
            <br />

            <input style={{textAlign : "center",backgroundColor:'#D3D3D3', marginTop:5}}
            type="text" name="apellido" placeholder="Apellido" value={nuevoEstudiante.apellido}
            onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />
            <span>{eApellido}</span> <br />

            <input style={{textAlign : "center",backgroundColor:'#D3D3D3', marginTop:5}}
            type= "number" name="rut" placeholder="Rut" value={nuevoEstudiante.rut}
            onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            <br />

            <button style={{backgroundColor:"grey",border: '2px solid rgb(0, 0, 0)', marginTop:10, marginRight:13}}
            id="BRegistro"
            onClick={(e)=>{e.preventDefault();handleRegistrar()}}>Registrar</button>

          <MostrarPersonas personas={personas} recargarPersonas={cargarPersonas}/>
          </form>
          
            <h1>Apartado para editar</h1>
      
            <input type="text" name="nombre" placeholder="Nombre" 
            value={nuevoEstudiante.nombre} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />
            <input type="text" name="apellido" placeholder="Apellido" 
            value={nuevoEstudiante.apellido} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />
            <input type="number" name="rut" placeholder="Rut" 
            value={nuevoEstudiante.apellido} onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/> <br />
            <button type="button" onClick={()=>{}}>Editar</button>
            
        </div>


    </>
    );
}
