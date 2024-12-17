import React from 'react'
import { materiales } from '../datos/datosMaterial'
import { useLoaderData } from 'react-router-dom';

export function loader() {
    const materialesData = materiales;
    return { materialesData };

}
const Material = () => {
    const { materialesData } = useLoaderData() || {};
    console.log('Datos cargados:', { materialesData });
    if (!materialesData) {
        return <p>Cargando datos...</p>;
    }
    return (
        <>
            <div className='h-screen w-screen flex justify-center font-space text-justify'>
                <div className='w-3/4 p-10'>
                    <ul>

                        {materialesData.map((material) => (
                            <li key={material.id} className='flex gap-5 pb-10'>
                                <a className='h-24 w-24' href={material.direccion} target="_blank" rel="noopener noreferrer">
                                    <img src={material.foto} alt="imagen recurso" className='w-full h-full object-fill'/>
                                </a>
                                <div className=' w-3/4 flex flex-col gap-2 '>
                                    <h2>{material.titulo}</h2>
                                    <p>{material.descripcion}</p>

                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </>
    )
}

export default Material