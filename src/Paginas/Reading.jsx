import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Preguntas from '../components/Preguntas';

import { preguntas, respuestas } from '../datos/datosBunpo';
import _ from 'lodash';

export function loader() {
    const preguntasData = _.shuffle(preguntas);
    const respuestasData = respuestas;
    return { preguntasData, respuestasData };
  }


console.log('Cargando datos:', { preguntas, respuestas });

const Reading = () => {

  


    const { preguntasData, respuestasData } = useLoaderData() || {};
    console.log('Datos cargados:', { preguntasData, respuestasData });
    if (!preguntasData || !respuestasData) {
        return <p>Cargando datos...</p>;
      }
  return (
    <>
    <div >
    <Preguntas
    className=" flex justify-center"
      preguntaData={preguntasData} 
      respuestasData={respuestasData} 
      TextoPregunta="¿Cuál es la respuesta correcta?"
      nombrePregunta="pregunta"
      colorUno="bg-rosaUno"
      colorDos="bg-rosaDos"
    />
    </div>
    </>
  );
}

export default Reading;
