import React from 'react'

const alert = ({textoTitulo, texto, color}) => {
    const colors = {
        lime: 'bg-lime-100 border-lime-400 text-lime-700',
        red: 'bg-red-100 border-red-400 text-red-700',
    };
    return (
        <div className={`${colors[color]} border px-4 py-3 rounded relative`} role="alert">
            <strong className="font-bold">{textoTitulo}</strong>
            <br />
            <span className="block sm:inline">{texto}</span>

        </div>
    )
}

export default alert