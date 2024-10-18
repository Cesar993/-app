import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const FrontEnd = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default FrontEnd