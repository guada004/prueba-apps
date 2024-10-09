//CONTENEDOR DE TODA LA APP
"use client"
import { useState } from "react";
import Navbar from "../../components/Navbar"; // todo lo que quiera usar lo tengo que importar
import PruebasHooks from "./pruebasHooks/pruebasHooks";
export default function RootLayout({children}){ // el children son las paginas
  let nombre = "navbar"
  const [contador, setContador] = useState(0); // Definir el estado de contador

  return(<html>
    <body>
      <Navbar temandoElNombre = {nombre}/> 
      <PruebasHooks contador={contador} setContador={setContador}/>
     {children}
    </body>
  </html>
) }