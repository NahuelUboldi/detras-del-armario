import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

function Modal({title,text,lastModal}) {

  return (
    <>
      <div className='modalBg'>
        
          <p className='display-4'>{title}</p>
          <p className='lead'>
            {text}
          </p>
          {lastModal && <Link to="/home">Volver a empezar</Link>}
        </div>
      
    </>
  );
}

export default Modal;
