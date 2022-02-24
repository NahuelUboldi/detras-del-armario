import React from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { AnimatedPage } from '../utilities/AnimatedPage';
function Home() {
  let navigate = useNavigate();
  return (
    <AnimatedPage>
      <Wrapper>
        <h1 className='display-1'>Bienvenidos</h1>
        <p className='lead'>
          El período de aislamiento por pandemia ha generado un olvido del
          contacto físico.
        </p>
        <p className='lead'>
          Por eso, hemos creado este experimento de recuerdo colectivo.
        </p>
        <p className='lead'>¿Te animás a participar?</p>
        <button
        className='btn btn-primary fs-4 my-3 my-md-5'
        onClick={() => navigate('/form')}
        >
          Sí, quero participar
        </button>
      </Wrapper>
    </AnimatedPage>
  );
}

export default Home;
