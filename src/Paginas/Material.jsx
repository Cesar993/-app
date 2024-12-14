import React from 'react'

const Material = () => {
    return (
        <>
            <div className='h-screen w-screen flex justify-center font-space text-justify'>
                <div className='w-3/4 p-10'>
                    <ul>
                        <li className='flex gap-5'>
                            <a  className='h-20 w-20' href="https://www.marugoto-online.jp/" target="_blank" rel="noopener noreferrer">
                                <img src="images/chuu.png" alt="imagen recurso" />
                            </a>
                            <div className=' w-3/4 flex flex-col gap-2'>
                                <h2>Marugoto</h2>
                                <p>¿En qué consiste un curso Marugoto? El principal objetivo de estos cursos es poder comunicarse en japonés. Esto se consigue no solo adquiriendo conocimientos gramaticales y memorizando patrones de oraciones, sino cultivando la capacidad del alumno para realizar tareas en situaciones reales.</p>

                            </div>

                        </li>
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Material