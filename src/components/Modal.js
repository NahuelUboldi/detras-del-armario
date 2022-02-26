import React from 'react';
import '../styles/App.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const animations = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

function Modal({ title, text, lastModal, handlePrint, setIsModalOpen }) {
  let navigate = useNavigate();

  const handleReadAgain = () => {
    navigate('/story');
    setIsModalOpen(false);
  };

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
            <button
              className='btn btn-primary fs-4 my-3 my-md-5 mx-1'
              onClick={() => navigate('/')}
            >
              Volver a empezar
            </button>
            <button
              className='btn btn-primary fs-4 my-3 my-md-5 mx-1'
              onClick={handleReadAgain}
            >
              Leer de nuevo
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
