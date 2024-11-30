import { useEffect, useState } from 'react';
import Alert from '../components/alert';
import Mensaje from '../components/Mensaje';

const Preguntas = ({ preguntaData, respuestasData, TextoPregunta, nombrePregunta, className, colorUno, colorDos }) => {


  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState();
  const [alert, setAlert] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const [respuestasMezcladas, setRespuestasMezcladas] = useState([]);
  const preguntaActual = preguntaData[preguntaIndex];
  const [correctas, setCorrectas] = useState(0);
  const totalPregunta = preguntaData.length;
  const [explicacionActual, setExplicacionActual] = useState(null);


  useEffect(() => {
    if (preguntaActual) {
      const respuestasFiltradas = respuestasData.filter(
        (respuesta) => respuesta[nombrePregunta + '_id'] === preguntaActual.id
      );
      setRespuestasMezcladas(respuestasFiltradas.sort(() => Math.random() - 0.5));
    }
  }, [preguntaActual, respuestasData, nombrePregunta]);

  const handleCambiarPregunta = () => {
    if (respuestaCorrecta === 'true') {
      setAlert({ correcta: 'true' });
      setCorrectas(correctas + 1);

      setTimeout(() => {
        if (preguntaIndex + 1 < preguntaData.length) {
          setPreguntaIndex(preguntaIndex + 1);
        } else {
          setFinalizado(true);
        }
        setRespuestaCorrecta(null);
        setAlert(null);
      }, 8000);
    } else {
      setAlert({ correcta: 'false' });
      setTimeout(() => {
        setRespuestaCorrecta(null);
        setAlert(null);
      }, 1000);
    }
  };

  
  const handleChange = (e, explicacion) => {
    setRespuestaCorrecta(e.target.value);
    setExplicacionActual(explicacion);
    console.log(explicacion)
  }

  return (
    <section className= 'flex justify-center mb-10 mt-10 h-screen' >
      <div className={`h-4/6 border-2 border-gray-300 w-3/4 flex flex-col items-center ${className}`}>
        <div>
          <h1>Correctas {correctas} de {totalPregunta}</h1>
        </div>
        {finalizado ? (
          <Mensaje />
        ) : (
          <div className={`h-60 ${colorDos} flex flex-col justify-start w-3/4 mb-8`}>
            <div className={`h-40 ${colorUno} w-full`}>
              <h1 className='m-2 text-zinc-50'>質問 {preguntaActual?.id}°</h1>
              <h2 className='m-2 text-zinc-50'>漢字何でしょう？</h2>
              <div>
                {preguntaActual ? (
                  <h1 className='text-zinc-50 m-2'>{preguntaActual[nombrePregunta]}</h1>
                ) : (
                  <h1>No hay pregunta</h1>
                )}
              </div>
            </div>
            <div>
              <h1 className='m-2'>{TextoPregunta}</h1>
              <div className='grid grid-cols-2 gap-4 w-3/4 ml-10'>
                {respuestasMezcladas.map((respuesta) => (
                  <label key={respuesta.id} className='flex items-center'>
                    <input
                      type="radio"
                      className='m-4'
                      value={respuesta.correcta}
                      name='respuesta'
                      onChange={(e) => handleChange(e, respuesta.explicacion)}
                    />
                    {respuesta.respuesta}
                  </label>
                ))}
              </div>
            </div>
            <button onClick={handleCambiarPregunta} className={`${colorUno} text-white`}>
              Comprobar
            </button>
            {alert && (
              alert.correcta === 'true' ? (
                <>
                <Alert textoTitulo="¡Muy Bien!" texto="Respuesta correcta" color="lime" />
                <p className='p-2'>{explicacionActual}</p>
                </>
              ) : (
                <Alert textoTitulo="¡Muy Mal!" texto="Respuesta incorrecta" color="red" />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Preguntas;
