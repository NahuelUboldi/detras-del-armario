import React from 'react'
import { useNavigate } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { AnimatedPage } from '../utilities/AnimatedPage';

const Bio = () => {
  return (
   <AnimatedPage>
    <Wrapper>
      <header className='pb-2 pb-md-5'>
        <h1 className='display-1'>Sofía Contreras Canard</h1>
        <span className='author display-5 fst-italic'>
          ~ Escritora ~
        </span>
     </header>
     <main className='ps-3 ps-md-5 py-3 py-md-5 fs-4 fs-md-3'>
      Como redactora publicitaria se le ocurrían ideas que no encajaban para anuncios comerciales. Entonces sus jefes le recomendaron que dejara de perder el tiempo con esas cosas. Ella les hizo caso: se puso a escribir cuentos, cursó una Maestría en Culturas y Literaturas Comparadas y asistió a talleres de escritura con Pablo Natale, Martín Felipe Castagnet, y Luciano Lamberti.
     </main>
    </Wrapper>
   </AnimatedPage>
  )
}

export default Bio