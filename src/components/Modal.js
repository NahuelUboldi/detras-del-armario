import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const animations = {
 initial: {opacity:0,scale:0.8},
 animate: {opacity:1,scale:1},
 exit: {opacity:0,scale:0.8},
}

function Modal({title,text,lastModal}) {

  return (
    <>
      <motion.div 
      className='modalBg'
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:0.8}}
      >
        
          <p className='display-4'>{title}</p>
          <p className='lead'>
            {text}
          </p>
          {lastModal && <Link to="/home">Volver a empezar</Link>}
        </motion.div>
      
    </>
  );
}

export default Modal;
