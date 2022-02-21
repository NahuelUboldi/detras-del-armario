import React, { useEffect,useState } from 'react';

// const [name, setName] = useState(() => {
//   // getting stored value
//   const saved = localStorage.getItem("name");
//   const initialValue = JSON.parse(saved);
//   return initialValue || "";
// });



function Story() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data")
    const parsedData = JSON.parse(savedData)
    return parsedData || "not data found"
  })
  console.log(data);
  

  return <>
  <div className="container">
    <div className="row">
      <div className="col-12">

  <ul>
    <li>Nombre: {data.nombre}</li>
    <li>Nombre gustaba: {data.nombreGustaba}</li>
    <li>Banda: {data.banda}</li>
    <li>Compañerita: {data.compañerita}</li>
    <li>Mejor Amigo: {data.mejorAmigo}</li>
    <li>Maestra: {data.maestra}</li>

  </ul>

      </div>
    </div>
  </div>
 </>;
}

export default Story;
