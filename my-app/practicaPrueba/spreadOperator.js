//SPREAD PARA OBJETOS

let usuario = {
    nombre: "pepe",
    gmail: "pepe@gmail.com"
}

let usuarioconID = {
    id: 2,
    ...usuario // esos 3 puntos permiten ponerle propiedades nuevas a un objeto viejo
}
console.log(usuarioconID)

//SPREAD PARA ARREGLOS
let numeros= [1, 2, 3]
let numerosNuevos = [...numeros] // lo mismo
numerosNuevos.push(15)
console.log(numeros)
console.log(numerosNuevos)