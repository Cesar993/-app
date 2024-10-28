import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Preguntas from '../components/Preguntas';

import { kanjis, respuestas } from '../datos/datos';


export function loader() {
    const kanjisData = kanjis;
    const respuestasData = respuestas;
    return { kanjisData, respuestasData };
  }


console.log('Cargando datos:', { kanjis, respuestas });

const Reading = () => {
    const { kanjisData, respuestasData } = useLoaderData() || {};
    console.log('Datos cargados:', { kanjisData, respuestasData });
    if (!kanjisData || !respuestasData) {
        return <p>Cargando datos...</p>;
      }
  return (
    <>
    <div >
    <Preguntas
    className=' pt-20'
      preguntaData={kanjisData} 
      respuestasData={respuestasData} 
      TextoPregunta="¿Cuál es la respuesta correcta?"
      nombrePregunta="kanji"
    />
    </div>
    </>
  );
}

export default Reading;
