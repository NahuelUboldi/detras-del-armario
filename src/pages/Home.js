import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
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
              className='btn btn-block btn-primary'
              onClick={() => navigate('/form')}
            >
              Sí, quero participar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
