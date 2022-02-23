import React from 'react'
import { BsYoutube } from 'react-icons/bs';


function Footer() {
 const date = new Date().getFullYear();
 console.log(date);
  return (
    <>
     <hr />
     <p><strong>Sofía Contreras Canard </strong> - CC reserved - {date}<br />

      <a className="social-media-icon ms-1" href="https://www.youtube.com/c/Sof%C3%ADaCanard/videos" target={"_blank"} ><BsYoutube /></a>
     </p>
    </>
  )
}

export default Footer