import React from 'react';
import { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import Alert from '../components/Alert';

import { useNavigate } from 'react-router-dom';

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
    setTimeout(() => {
      setIsAlertOpen(false);
    }, 2000);
  }, [isAlertOpen]);
  useEffect(() => {
    if(isModalOpen) {
      setTimeout(() => {
        navigate('/story');
      }, 3000);
    }
  }, [isModalOpen])


  return (
    <>
            <p className='lead'>
              Necesitamos que rellenes este formulario con algunos datos de tu
              niñez
            </p>
            {isAlertOpen && <Alert />}
            <form>
              <div className='form-group'>
                <label htmlFor='nombre'>Tu nombre:</label>
                <input
                  type='text'
                  className='form-control'
                  id='nombre'
                  name='nombre'
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder='Ingresa tu nombre de pila o apodo'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='nombreGustaba'>
                  Nombre de la persona que te gustaba a los 12 años:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='nombreGustaba'
                  name='nombreGustaba'
                  value={nombreGustaba}
                  onChange={(e) => setNombreGustaba(e.target.value)}
                  placeholder='Ingresa el nombre o apodo de la persona que te gustaba de niño'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='banda'>
                  Banda musical o cantante ridículo/a que te gustaba en la
                  pre-adolescencia:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='banda'
                  name='banda'
                  value={banda}
                  onChange={(e) => setBanda(e.target.value)}
                  placeholder='Ingresa el nombre de una banda musical'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='compañerita'>
                  Nombre de una compañerita de aire aristocrático:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='compañerita'
                  name='compañerita'
                  value={compañerita}
                  onChange={(e) => setCompañerita(e.target.value)}
                  placeholder='Ingresa el nombre de una compañerita de la escuela de aire aristocrático'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='mejorAmigo'>
                  Nombre de tu mejor amigo/a cuando tenías 12 años:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='mejorAmigo'
                  name='mejorAmigo'
                  value={mejorAmigo}
                  onChange={(e) => setMejorAmigo(e.target.value)}
                  placeholder='Ingresa el nombre de tu mejor amigo'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='maestra'>
                  Una maestra que no te caía muy bien:
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='maestra'
                  name='maestra'
                  value={maestra}
                  onChange={(e) => setMaestra(e.target.value)}
                  placeholder='Ingresa el nombre de tu maestra'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                onClick={handleSubmit}
              >
                Quiero continuar con el experimento
              </button>
            </form>
            <p className='fst-italic text-secondary'>
              *AVISO: Los datos ingresados en este formulario son solamente
              accesibles por el usuario que los ingresa, ya que se almacenan
              localmente y por un tiempo limitado en la sesión particular del
              navegador. Esto significa que los datos no son incorporados a
              ninguna base de datos ni tienen un uso posterior. El único
              objetivo es dotar de dinamismo e interactividad al cuento que
              podrán leer a continuación.
            </p>

      {isModalOpen ? (
        <Modal title={"Advertencia"} text={"Nuevos recuerdos de tu niñez te serán implantados"} />
      ) : null}
    </>
  );
}

export default Form;
