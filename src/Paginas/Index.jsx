import { useLoaderData } from 'react-router-dom'
import { kanjis, respuestas } from '../datos/datos'
import { useEffect, useState } from 'react';
import Alert from '../components/alert';
import Mensaje from '../components/Mensaje';



export function loader() {
  const kanjisData = kanjis;
  const respuestasData = respuestas;
  return { kanjisData, respuestasData };
}



const Index = () => {



const { kanjisData, respuestasData } = useLoaderData() || [];
  

  const [pregunta, setPregunta] = useState(0)
  const [respuestaCorrecta, setRespuestaCorrecta] = useState()
  const [alert, setAlert] = useState(null)
  const [finalizado, setFinalizado] = useState(false)
  const [respuestasMezcaldas, setRespuestasMezcaldas] = useState([])
  const kanjiActual = kanjisData[pregunta];

  const [correctas, setCorrectas] = useState(0);
  const [totalPregunta, setTotalPregunta] = useState(0);

  console.log(kanjiActual)

  //filtramos las respuestas para que sean solo las con id del mismo kanji



  useEffect(() => {
    const respuestasFiltradas = respuestasData.filter((respuesta) => respuesta.kanji_id ===
      kanjiActual?.id)
    
      setTotalPregunta(kanjisData.length)

    setRespuestasMezcaldas(respuestasFiltradas.sort(() => Math.random() - 0.5))

  }, [kanjiActual, respuestasData])



  const handleCmabiarPregunta = () => {

    if (respuestaCorrecta === 'true') {
      console.log(respuestaCorrecta)
      setAlert({ correcta: 'true' });
      setCorrectas(correctas+1)

      setTimeout(() => {
        if (pregunta + 1 < kanjisData.length) {

          setPregunta(pregunta + 1);
        } else {
          setFinalizado(true)
        }

        setRespuestaCorrecta(null);
        setAlert(null);
      }, 2000)
    } else {
      setAlert({ correcta: 'false' });

      setTimeout(() => {

        setRespuestaCorrecta(null);
        setAlert(null);
      }, 1000)

    };
    // cambiar la pregunta con tiempo

  }



  const handleChange = (e) => {
    setRespuestaCorrecta(e.target.value);


  }

  return (
    <>
      <section className='flex justify-center mb-10 mt-10 h-screen'>
        <div className='h-3/6  border-2 border-y-gray-300 w-3/4 flex justify-center items-center flex-col'>
        <div>
          <h1>Correctas {correctas} de {totalPregunta}</h1>
        </div>
          {finalizado ? (
            <Mensaje />
          ) : (
            <div className='h-60 bg-lime-E8EFEE flex flex-col justify-left w-3/4 align-top mb-8'>
              <div className='h-40 bg-lime-dark w-full'>
                <h1 className='m-2 text-zinc-50'>質問  {kanjiActual.id}°</h1>
                <h2 className='m-2 text-zinc-50'>漢字何でしょう？</h2>
                <div>
                  {(kanjiActual ? (<h1 className='text-zinc-50 m-2' >{kanjiActual.kanji} </h1>) :
                    (<h1>No hay </h1>))}
                </div>
              </div>
              <div>
                <h1 className='m-2'>正しいオプションを選択してください</h1>
                <div className='grid grid-cols-2 gap-4 w-3/4 ml-10'>
                  {respuestasMezcaldas.map((respuesta) => (
                    <div key={respuesta.id}>
                      <label className='flex items-center'>
                        <input type="radio"
                          key={respuesta.id} className='m-4'
                          value={respuesta.correcta}
                          name='respuesta'
                          onChange={handleChange}
                        />
                        {respuesta.respuesta}
                      </label>
                    </div>



                  ))}


                </div>

              </div>
              <button onClick={handleCmabiarPregunta} className='bg-lime-dark text-white'>Comprobar</button>
              {alert && (
                (alert?.correcta === 'true') ?
                  (<Alert textoTitulo="¡Muy Bien! " texto="Respuesta correcta" color="lime" />) :
                  (<Alert textoTitulo="¡Muy Mal! " texto="Respuesta incorrecta" color="red" />)
              )}

            </div>)}
        </div>

      </section>
    </>
  )
}

export default Index