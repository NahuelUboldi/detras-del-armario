import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Wrapper = ({children}) => {
  return (
   <div className='container'>
    <div className='row'>
     <div className='col-12 text-center p-3 p-md-5'>
      <Header />
     </div>
    </div>
    <div className='row'>
     <div className='col-12 text-center p-3 p-md-5'>
      {children}
     </div>
    </div>
    <div className='row'>
     <div className='col-12 text-center p-3 p-md-5'>
      <Footer />
     </div>
    </div>
   </div>
  )
}

export default Wrapper