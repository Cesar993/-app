import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Nav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
      setOpenMenu(!openMenu);
  } 
  return (
    <>
      <nav className=' lg:flex m-2 text-lg'>
        <div className='flex justify-between'>
        
          <img src="/images/olas2.gif" alt="chuu" className=' lg:ml-40 h-20 w-20 rounded-full border-2 border-white' />
        
        <div className="block lg:hidden h-20 w-20">
          <button onClick={toggleMenu} className=" px-3 py-2 border rounded text-teal-200 border-black hover:text-white hover:border-white">
            <img src="/burger.png" alt="" />
          </button>
        </div>
        </div>

        <div className={`lg:flex m-2 w-full justify-around self-center  ${openMenu ? 'block' : 'hidden'} `}>        <div className='flex  m-2 lg:w-2/4 justify-around flex-col lg:flex-row'>
          <a href="">PARTE 1</a>
          <Link to="/reading">Reading</Link>
          <a href="">PARTE 3</a>
          <a href="">PARTE 3</a>
          <a href="">PARTE 3</a>
        </div>
        </div>
        <div className='flex lg:w-1/4 self-center justify-center'>
          <Link to="/" 
          className='border-2 w-36 h-10 rounded-full  flex items-center justify-center hover:bg-lime-dark hover:text-slate-50 bg-white transition duration-200'>
            Volver</Link>
        </div>
      </nav>

    </>
  )
}

export default Nav