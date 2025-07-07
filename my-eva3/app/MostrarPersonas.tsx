import React, { useEffect, useState } from 'react'
import { Persona } from './Persona'
interface Props{
    saludo : string,
    traerPersona: (p:Persona) => void
}

export const MostrarPersonas = (props:Props) => {
    const miStorange = window.localStorage
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        let listadoStr = miStorange.getItem("personas")
        if(listadoStr != null){
            let listado =JSON.parse(listadoStr)
            setPersonas(listado)
        }
    },[])
    const queEditar = (index:number) => {
        alert("Le diste a"+ index) //para corroborar que indice es el que quiere editar
        props.traerPersona(personas[index])
    }
    return(
        <>
            <h1>{props.saludo}</h1> {/* para corroborar que se esta mostrando el saludo)*/}
        </>
    )
}