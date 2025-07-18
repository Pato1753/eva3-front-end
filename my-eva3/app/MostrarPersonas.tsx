import React, { useEffect, useState } from 'react'
import { Persona } from './Persona'
interface Props{
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
    const queEliminar = (index:number)=>{
        alert("Es el indice "+index)
        props.traerPersona(personas[index])
    }
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre  </th>
                        <th>Apellido  </th>
                        <th>Rut  </th>
                        <th>Accion  </th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((p,index)=>{
                        return (
                            <tr>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>
                                    <button onClick={()=>queEditar(index)}>Editar</button>
                                    <button onClick={()=>queEliminar(index)} >Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}