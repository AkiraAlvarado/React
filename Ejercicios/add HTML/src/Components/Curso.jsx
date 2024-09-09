import { useState } from 'react';

import './estilo.css'


// Manejador para cambiar la clase 'active'



const Curso = ({urlImagen, titulo, descripcion}) => {
   const [isActive, setIsActive] = useState(false);

   
   const handleCompleted = () => {
      setIsActive(!isActive);
    };
    
    // Manejador para eliminar el curso
    const handleEliminate = (event) => {
      event.currentTarget.parentNode.remove();
    };


   return(
      <div>
         <img src={urlImagen}></img>
         <h2>{titulo}</h2>
         <p className={isActive ? 'active' : ''}> {descripcion}</p>
         <button onClick = {handleEliminate}>Eliminar</button>
         <button onClick ={handleCompleted}> Completar</button>
      </div>
   )
}

export default Curso;