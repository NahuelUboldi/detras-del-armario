import React from 'react';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Alert from '../components/Alert';

import { useNavigate } from 'react-router-dom';
import { AnimatedPage } from '../utilities/AnimatedPage';
import Wrapper from '../components/Wrapper';

function Form() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [nombre, setNombre] = useState('');
  const [nombreGustaba, setNombreGustaba] = useState('');
  const [banda, setBanda] = useState('');
  const [compañerita, setCompañerita] = useState('');
  const [mejorAmigo, setMejorAmigo] = useState('');
  const [maestra, setMaestra] = useState('');
  const [data, setData] = useState({});

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nombre ||
      !nombreGustaba ||
      !banda ||
      !compañerita ||
      !mejorAmigo ||
      !maestra
    ) {
      setIsAlertOpen(true);
      return;
    }

    setIsModalOpen(true);
    setData(() => {
      return {
        nombre,
        nombreGustaba,
        banda,
        compañerita,
        mejorAmigo,
        maestra,
      };
    });
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlertOpen(false);
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [isAlertOpen]);

  useEffect(() => {
    if (isModalOpen) {
      setTimeout(() => {
        navigate('/story');
      }, 5000);
    }
  }, [isModalOpen]);

  return (
    <AnimatedPage>
      <Wrapper>
        <h1 className='display-1'>Preparación del experimento</h1>
        <p className='lead'>
          Necesitamos que rellenes este formulario con algunos datos de tu niñez
        </p>

        <form className=' px-1 px-sm-2 px-md-3 px-lg-5'>
          <div className='form-group mt-3 mt-md-5 '>
            <label htmlFor='nombre'>Tu nombre:</label>
            <input
              type='text'
              className='form-control text-white'
              id='nombre'
              name='nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='nombreGustaba'>
              Nombre de la persona que te gustaba a los 12 años:
            </label>
            <input
              type='text'
              className='form-control text-white'
              id='nombreGustaba'
              name='nombreGustaba'
              value={nombreGustaba}
              onChange={(e) => setNombreGustaba(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='banda'>
              Banda musical o cantante ridículo/a que te gustaba en la
              pre-adolescencia:
            </label>
            <input
              type='text'
              className='form-control text-white'
              id='banda'
              name='banda'
              value={banda}
              onChange={(e) => setBanda(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='compañerita'>
              Nombre de una compañerita de aire aristocrático:
            </label>
            <input
              type='text'
              className='form-control text-white'
              id='compañerita'
              name='compañerita'
              value={compañerita}
              onChange={(e) => setCompañerita(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='mejorAmigo'>
              Nombre de tu mejor amigo/a cuando tenías 12 años:
            </label>
            <input
              type='text'
              className='form-control text-white'
              id='mejorAmigo'
              name='mejorAmigo'
              value={mejorAmigo}
              onChange={(e) => setMejorAmigo(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='maestra'>
              Una maestra que no te caía muy bien:
            </label>
            <input
              type='text'
              className='form-control text-white'
              id='maestra'
              name='maestra'
              value={maestra}
              onChange={(e) => setMaestra(e.target.value)}
            />
          </div>
          {isAlertOpen && <Alert />}
          <button
            type='submit'
            className='btn btn-primary fs-4 my-3 my-md-5'
            onClick={handleSubmit}
          >
            Continuar con el experimento
          </button>
        </form>
        <p className='fst-italic text-secondary mt-3 mt-md-5'>
          *AVISO: Los datos ingresados en este formulario son solamente
          accesibles por el usuario que los ingresa, ya que se almacenan
          localmente y por un tiempo limitado en la sesión particular del
          navegador. Esto significa que los datos no son incorporados a ninguna
          base de datos ni tienen un uso posterior. El único objetivo es dotar
          de dinamismo e interactividad al cuento que podrán leer a
          continuación.
        </p>

        {isModalOpen ? (
          <Modal
            title={'Advertencia'}
            text={'Nuevos recuerdos de tu niñez te serán implantados'}
          />
        ) : null}
      </Wrapper>
    </AnimatedPage>
  );
}

export default Form;
