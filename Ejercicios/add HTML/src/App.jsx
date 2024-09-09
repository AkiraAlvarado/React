import './App.css';
import { useState } from 'react';
import Curso from './Components/Curso';
import CursoForm from './Components/CursoForm';

function App() {

  const [cursos, setCursos] = useState([]);

  const addCurso = (nuevoCurso) => {
    setCursos([...cursos, nuevoCurso]); // Aqui agregar un nuevo curso  al arreglo { url, titulo, parrafo } que será construido por el componente Curso 
  };


  return (
    <>
      {/* Lllama al componente CursoForm que al subir el form , AÑADE EL CURSO AL ARREGLO envia los datos { url, titulo, parrafo } */}
      <CursoForm onAddCurso={addCurso} /> 
      {cursos.map((curso, index) => (
        <Curso key={index} urlImagen={curso.url} titulo={curso.titulo} descripcion={curso.parrafo} />
      ))}
    </>
  );
}

export default App;