import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
     <p className="fs-5 text-light-black">Detrás del Armario <span className="fst-italic text-color-primary fw-bold">~ <Link className="link" to='/bio'>Sofía Contreras Canard</Link></span></p>
     <hr />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/form'>form</Link>
        <Link to='/story'>Story</Link>
        <Link to='/bio'>bio</Link>
      </nav>
    </>
  )
}

export default Header