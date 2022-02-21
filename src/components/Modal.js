import React from 'react';
import '../styles/App.css';

import { useNavigate } from 'react-router-dom';

function Modal({ isModalOpen, setIsModalOpen }) {
  let navigate = useNavigate();
  return (
    <>
      <div className='modalBg'>
        <div className='modalContainer text-center'>
          <button onClick={() => setIsModalOpen(false)}>x</button>
          <p className='h1'>Advertencia</p>
          <p className='lead'>
            Nuevos recuerdos de tu niñez te serán implantados
          </p>
          <button
            className='btn btn-block btn-primary'
            onClick={() => navigate('/story')}
          >
            Acepto
          </button>
        </div>
      </div>
    </>
  );
}

export default Modal;
