import React from 'react';
import './styles/App.css';
import {Routes, Route, useLocation} from 'react-router-dom';
import {AnimatePresence} from "framer-motion"

//components
import Home from './pages/Home';
import Form from './pages/Form';
import Story from './pages/Story';
import Finish from './pages/Finish';
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './utilities/ScrollToTop';

const App = () => {
  const location = useLocation()

  return (
    <ScrollToTop>
      <AnimatePresence exitBeforeEnter inital={"false"} >
        <Routes key={location.pathname} location={location} >
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/story' element={<Story />} />
          <Route path='/finish' element={<Finish />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
    </ScrollToTop>
  );
}

export default App;
