import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
      setOpenMenu(!openMenu);
  } 
  return (
    <>
    
      <nav className= 'lg:flex  text-lg bg-rosaTres rounded-b-xl'>
        <div className='flex justify-between'>
           <Link to="/">
           <div className="relative w-20 h-20">
          <img src="/images/olas2.gif" alt="chuu" className=' lg:ml-40 h-20 w-20 rounded-full border-2 border-white' />
          </div>
          </Link>
        <div className="block lg:hidden h-20 w-20">
          <button onClick={toggleMenu} className=" px-3 py-2 border rounded text-teal-200 border-black hover:text-white hover:border-white">
            <img src="/burger.png" alt="" />
          </button>
        </div>
        </div>

        <div className={`lg:flex m-2 w-full font-space justify-center self-center ${openMenu ? 'block' : 'hidden'} `}>        
          <div className='flex  m-2 lg:w-2/4 justify-around flex-col lg:flex-row '>
          
          <Link to="/vocabulario">げんごちしき（もじ・ごい）</Link>
          <Link to="/reading">文法</Link>
          <a href="">言語知識</a>
          <Link to="/material">Material</Link>
          <Link to="/recursosVisuales">Recursos Visuales</Link>
          
        </div>
        </div>
        {/* <div className='flex lg:w-1/4 self-center justify-center'>
          <Link to="/" 
          className='border-2 w-36 h-10 rounded-full  flex items-center justify-center hover:bg-lime-dark hover:text-slate-50 bg-white transition duration-200'>
            Volver</Link>
        </div> */}
      </nav>

    </>
  )
}

export default Nav