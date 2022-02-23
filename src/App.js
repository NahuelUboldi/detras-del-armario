import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Story from './pages/Story';
import Finish from './pages/Finish';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center p-3 p-md-5'>
            <Header />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center p-3 p-md-5'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/form' element={<Form />} />
              <Route path='/story' element={<Story />} />
              <Route path='/finish' element={<Finish />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center p-3 p-md-5'>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
