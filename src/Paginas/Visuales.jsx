import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { listasVideos } from '../datos/datosVideos'
export function loader() {
    const videosData = listasVideos;
    return { videosData };

}
const Visuales = () => {
    const { videosData } = useLoaderData() || {};
    console.log('Datos cargados:', { videosData });
    if (!videosData) {
        return <p>Cargando datos...</p>;
    }
    return (
        <>

            <div className='h-screen w-screen flex justify-center font-space text-justify'>
                <div className='w-3/4 p-10'>
                    <ul>

                        {videosData.map((videos) => (
                            <li key={videos.id} className='flex gap-6'>
                                <div className='m-10'>
                                    <iframe
                                        width="220"
                                        height="115"
                                        src={`https://www.youtube.com/embed?listType=playlist&list=${videos.url}`}
                                        title="YouTube Playlist"

                                    ></iframe>
                                </div>
                                <div className=' w-3/4 flex flex-col gap-2 justify-center '>
                                    <h2>{videos.nombre}</h2>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Visuales