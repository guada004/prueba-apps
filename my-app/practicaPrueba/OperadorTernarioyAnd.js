
// no se puede usar el mismo lenguaje en jsx y en js
let usuario = "comprador"

// if/else en js
 /*
 if(usuario === "vendedor"){
    console.log("tenes 10 productos en stock")
 } else{
    console.log("no te puedo mostrar esa info")}
 
 */


/*operador ternario --> remplaza el if/else
 let mensaje = usuario === "vendedor" ? " TU stock es de 10 productos" : "no puedo mostrarte esa info"
 console.log(mensaje)*/

 //operador and(&&) --> solo cuando quiero que la condicion quiero que sea verdadera. Si la condicion no se cumple returnea un false
 let mensaje = usuario === "vendedor" && "tu stock es de 10 productos"
 console.log(mensaje)