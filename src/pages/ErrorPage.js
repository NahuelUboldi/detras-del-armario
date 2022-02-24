import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../components/Wrapper';
import { AnimatedPage } from '../utilities/AnimatedPage';

function ErrorPage() {
  return <AnimatedPage>
      <Wrapper>
        <h1>This page does not exist</h1>
        <Link to="/home">Ir al inicio</Link>
      </Wrapper>
    </AnimatedPage>;
}

export default ErrorPage;
