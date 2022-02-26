import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 20 },
  exit: { opacity: 0, x: 100 },
};

const Badge = () => {
  return (
    <motion.div
      className='badge'
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.8, duration: 1.8 }}
    >
      <div className='fw-bold text-white fs-6'>
        <a
          href='https://antologiasitau.org/cuento-regional/detras-del-armario/'
          className='link-itau'
          target={'_blank'}
        >
          Finalista
        </a>
      </div>
      <div className='fw-bold text-white'>
        <a
          href='https://antologiasitau.org/cuento-regional/detras-del-armario/'
          className='link-itau'
          target={'_blank'}
        >
          Cuento Digital Itaú 2020
        </a>
      </div>
      <div className='fw-bold text-white fs-6 lg-hidden'>
        <a
          href='https://antologiasitau.org/cuento-regional/detras-del-armario/'
          className='link-itau'
          target={'_blank'}
        >
          Finalista - Cuento Digital Itaú 2020
        </a>
      </div>
    </motion.div>
  );
};

export default Badge;
