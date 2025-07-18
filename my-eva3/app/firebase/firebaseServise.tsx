import { Persona } from '../Persona';
import { db } from './firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const estudiantesRef = collection(db, "estudiantes");
export interface PersonaConID extends Persona {
    id: string;
}


export const agregarEstudiante = async (estudiante:Persona) => {
  await addDoc(estudiantesRef, estudiante);
};

export const obtenerEstudiantes = async (): Promise<PersonaConID[]> => {
  const snapshot = await getDocs(estudiantesRef);
  return snapshot.docs.map(documento => {
    const data = documento.data() as Persona;
    return { id: documento.id, ...data };
  });
};

export const eliminarEstudiante = async (id:string) => {
  try {
    console.log("Intentando eliminar documento con ID (firebaseServise):", id); 
    const estudianteDoc = doc(db, "estudiantes", id);
    await deleteDoc(estudianteDoc);
    console.log("¡Éxito! Documento eliminado en Firebase:", id); 
  } catch (error) {
    console.error("¡ERROR! Falló la eliminación del documento en Firebase:", id, error); 

  }
};