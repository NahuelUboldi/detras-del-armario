import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <p className='fs-5 text-light-black'>
        <Link className='black' to='/home'>
          Detrás del Armario
        </Link>{' '}
        <span className='fst-italic text-color-primary fw-bold'>
          ~{' '}
          <Link className='link' to='/bio'>
            Sofía Contreras Canard
          </Link>
        </span>
      </p>
      <hr />
    </>
  );
}

export default Header;
