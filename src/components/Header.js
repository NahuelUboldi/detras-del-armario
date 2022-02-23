import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
     <p className="fs-5 text-light-black">Detrás del Armario - <span className="fst-italic text-color-primary">Sofía Contreras Canard</span></p>
     <hr />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/form'>form</Link>
        <Link to='/story'>Story</Link>
        <Link to='/finish'>Finish</Link>
      </nav>
    </>
  )
}

export default Header