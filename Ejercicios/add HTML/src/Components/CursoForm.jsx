import { useRef } from 'react';

const CursoForm = ({ onAddCurso }) => {
  const urlRef = useRef(null);
  const tituloRef = useRef(null);
  const parrafoRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = urlRef.current.value;
    const titulo = tituloRef.current.value;
    const parrafo = parrafoRef.current.value;

    // Crear un nuevo curso
    const nuevoCurso = { url, titulo, parrafo };

    // Llamar a la función pasada por props para agregar el curso
    onAddCurso(nuevoCurso);

    // Limpiar los campos del formulario (opcional)
    urlRef.current.value = '';
    tituloRef.current.value = '';
    parrafoRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">URL</label>
      <input type="text" ref={urlRef} name="url" />

      <label htmlFor="titulo">Titulo</label>
      <input type="text" ref={tituloRef} name="titulo" />

      <label htmlFor="parrafo">Parrafo</label>
      <input type="text" ref={parrafoRef} name="parrafo" />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default CursoForm;