import React, { useEffect, useState, useCallback } from 'react'
import { eliminarEstudiante, obtenerEstudiantes, PersonaConID } from './firebase/firebaseServise'
interface Props{
    traerPersonas: () => void
}

export const MostrarPersonas = (props:Props) => {
    const [personas, setPersonas] = useState<PersonaConID[]>([])
    const cargar = useCallback (async () => {
            const datos = await obtenerEstudiantes()
            setPersonas(datos)
        },[]);

    useEffect(()=>{
        cargar()
    },[cargar])

    const queEliminar = async (id:string)=>{
        console.log("ID recibido para eliminar (MostrarPersonas):", id); 
        try {
            await eliminarEstudiante(id); 
            console.log("Eliminación solicitada, recargando lista..."); 
            await cargar(); 
            console.log("Lista recargada."); 
        } catch (error) {
            console.error("Error al manejar la eliminación en MostrarPersonas:", error); 
        }
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
                    {personas.map((p)=>{
                        return (
                            <tr key={p.id}>
                                <td>{p.nombre}</td>
                                <td>{p.apellido}</td>
                                <td>{p.rut}</td>
                                <td>
                                    <button type='button' onClick={()=>queEditar(index)}>Editar</button>
                                    <button type='button' onClick={()=>queEliminar(p.id)} >Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}