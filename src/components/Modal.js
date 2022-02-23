import React from 'react';
import '../styles/App.css';

function Modal({title,text,lastModal}) {

  return (
    <>
      <div className='modalBg'>
        <div className='modalContainer text-center'>
          <p className='h1'>{title}</p>
          <p className='lead'>
            {text}
          </p>
          {lastModal && "volver | imprimir"}
        </div>
      </div>
    </>
  );
}

export default Modal;
