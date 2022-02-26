import React from 'react';
import { BsYoutube, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <hr />
      <p>
        <strong>Sofía Contreras Canard </strong> ~ {date}
        <br />
        <div className='social-media-icons-container fs-3 '>
          <a
            className='social-media-icon mx-1 mx-md-2'
            href='https://www.youtube.com/c/Sof%C3%ADaCanard'
            target={'_blank'}
          >
            <BsYoutube />
          </a>
          <a
            className='social-media-icon mx-1 mx-md-2'
            href='https://www.facebook.com/sofiacanard'
            target={'_blank'}
          >
            <BsFacebook />
          </a>
          <a
            className='social-media-icon mx-1 mx-md-2'
            href='https://www.instagram.com/sofiacanard/?hl=es-la'
            target={'_blank'}
          >
            <BsInstagram />
          </a>
          <a
            className='social-media-icon mx-1 mx-md-2'
            href='https://twitter.com/sofiacanard'
            target={'_blank'}
          >
            <BsTwitter />
          </a>
        </div>
      </p>
    </>
  );
}

export default Footer;
