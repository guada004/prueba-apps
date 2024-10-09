 const numeros = [1, 2, 3]
 //MAP --> Returnea si o si la misma cantidad de elementos
 let numerosMapeados = numeros.map((elemento, indice)=> elemento + indice) // me devuelve un array cambiado. Primero recibe el valor, luego el indice.
 console.log(numerosMapeados)

 //FILTER --> returnea la misma cantidad de elementos o menos. Devuelve el arreglo
 let productos = [{
    nombre: "telefono",
    precio: 100
 }, 
 {
    nombre: "compu",
    precio: 200
}, {
    nombre: "tablet",
    precio: 150
}]

let productosFiltrados = productos.filter((elemento, indice)=> elemento.precio <= 150)
console.log(productosFiltrados)

//FIND --> devuelve el elemento que coincidio con la condicion
// si hay mas de una coincidencia devuelve la primera.
let productoSeleccionado = productos.find((elemento, indice)=>elemento.precio === 150)
console.log(productoSeleccionado)