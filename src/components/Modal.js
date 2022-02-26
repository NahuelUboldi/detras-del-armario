import React from 'react';
import '../styles/App.css';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

function Modal({ title, text, lastModal, handlePrint }) {
  return (
    <>
      <motion.div
        className='modalBg'
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.8 }}
      >
        <p className='display-4'>{title}</p>
        <p className='lead'>{text}</p>
        {lastModal && (
          <div class='btn-group' role='group'>
            <button className='btn btn-primary fs-4 my-3 my-md-5 mx-1'>
              <a href='/home'>Volver a empezar</a>
            </button>
            <button className='btn btn-primary fs-4 my-3 my-md-5 mx-1'>
              <a href='/story'>Leer de nuevo</a>
            </button>
            <button
              className='btn btn-primary fs-4 my-3 my-md-5 mx-1'
              onClick={handlePrint}
            >
              Imprimir
            </button>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Modal;
