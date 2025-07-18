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
  return snapshot.docs.map(doc => {
    const data = doc.data() as Persona;
    return { id: doc.id, ...data };
  });
};

export const eliminarEstudiante = async (id:string) => {
  const estudianteDoc = doc(db, "estudiantes", id);
  await deleteDoc(estudianteDoc);
};
