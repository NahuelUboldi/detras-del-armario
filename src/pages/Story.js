import React, { useState, useRef } from 'react';
import { AnimatedPage } from '../utilities/AnimatedPage';
import { useReactToPrint } from 'react-to-print';

//components
import Modal from '../components/Modal';
import Wrapper from '../components/Wrapper';
import { PrintComponent } from '../utilities/PrintComponent';
import StoryContent from '../components/StoryContent';



function Story() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    const parsedData = JSON.parse(savedData);
    return parsedData || 'not data found';
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <AnimatedPage>
      <Wrapper>
        <div style={{ display: "none" }}><PrintComponent ref={componentRef} /></div>
        <div className='story-container px-2 px-md-3 px-lg-5'>
          <StoryContent data={data} />
          <footer className='text-center'>
            <button
              className='btn btn-primary fs-4 my-3 my-md-5 align-self-center'
              onClick={() => setIsModalOpen(true)}
            >
              Finalizar Experimento
            </button>
          </footer>
        </div>
        {isModalOpen ? (
          <Modal
            title={'Experimento terminado'}
            text={'El recuerdo ha sido implantado con éxito.'}
            lastModal={true}
            handlePrint={handlePrint}
          />
        ) : null}
      </Wrapper>
    </AnimatedPage>
  );
}

export default Story;
