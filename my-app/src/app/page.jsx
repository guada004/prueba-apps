"use client" // lo tengo qe poner para funciones de front como button
// es el usestate
export default function HomePage(props){

  let titulo = "world"
  return( <section>
    <h1>hello {titulo}</h1>
    <button onClick = {()=>{
      alert("hola!")
    }}> Click</button>
    
    </section>)
}