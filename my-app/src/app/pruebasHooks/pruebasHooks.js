import { useState,useEffect } from "react";

export default function PruebasHooks({contador, setContador}) {
  const [img, setImg] = useState("");
  useEffect(()=>(
    console.log("me ejecute")
  ), [contador])
  // Para ver el valor en consola cuando cambia
                 
   return (
    <div>
      <h1>{contador}</h1>ll
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      
      {/* Usar un enlace directo a la imagen */}
      <button onClick={() => setImg("https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1.jpg")}>Traer imagen</button>
      
      {/* Mostrar la imagen si img tiene un valor */}
      {img && <img src={img} alt="Imagen cargada" />}
    </div>
  );
}
