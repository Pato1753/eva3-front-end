import React, { useEffect, useState } from 'react'
import { eliminarEstudiante, obtenerEstudiantes, PersonaConID } from './firebase/firebaseServise'
interface Props{
    traerPersonas: () => void
}

export const MostrarPersonas = (props:Props) => {
    const [personas, setPersonas] = useState<PersonaConID[]>([])
    const cargar = async () => {
            const datos = await obtenerEstudiantes()
            setPersonas(datos)
        }    

    useEffect(()=>{
        cargar()
    },[props.traerPersonas])

    const queEliminar = async (id:string)=>{
        console.log("ID recibido para eliminar (MostrarPersonas):", id); // Log 4
        try {
            await eliminarEstudiante(id); // Llama a la función que ahora tiene try-catch
            console.log("Eliminación solicitada, recargando lista..."); // Log 5
            await cargar(); // Recarga la lista para actualizar la UI
            console.log("Lista recargada."); // Log 6
        } catch (error) {
            console.error("Error al manejar la eliminación en MostrarPersonas:", error); // Log 7
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
                                    <button onClick={()=>queEditar(index)}>Editar</button>
                                    <button onClick={()=>queEliminar(p.id)} >Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}