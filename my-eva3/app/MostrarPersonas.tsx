import React, { useEffect, useState } from 'react'
import { eliminarEstudiante, obtenerEstudiantes } from './firebase/firebaseServise'
interface Props{
    traerPersonas: () => void
}

export const MostrarPersonas = (props:Props) => {
    const [personas, setPersonas] = useState<any[]>([])
    const cargar = async () => {
            const datos = await obtenerEstudiantes()
            setPersonas(datos)
        }    

    useEffect(()=>{
        cargar()
    },[props.traerPersonas])

    const queEliminar = async (id:string)=>{
        await eliminarEstudiante(id)
        props.traerPersonas()
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