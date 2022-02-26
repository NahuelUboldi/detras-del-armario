import React from 'react';
import './styles/App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//components
import Home from './pages/Home';
import Form from './pages/Form';
import Story from './pages/Story';
import ErrorPage from './pages/ErrorPage';
import Bio from './pages/Bio';
import ScrollToTop from './utilities/ScrollToTop';
import Badge from './components/Badge';

const App = () => {
  const location = useLocation();

  return (
    <ScrollToTop>
      <AnimatePresence exitBeforeEnter inital={'false'}>
        <Badge />
        <Routes key={location.pathname} location={location}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/index.html' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/story' element={<Story />} />
          <Route exact path='/bio' element={<Bio />} />
          <Route exact path='*' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </ScrollToTop>
  );
};

export default App;
