//DESESTRUCTURACION DE UN OBJETO
let mascota = {
    nombre: "luna",
    edad: 4,           //objeto
    raza: "golden"
}

const {edad, raza, nombre} = mascota // lo que hice aca fue desestructurar el objeto para estar poniendo cosole.log(mascora.nombre)
console.log(nombre)

//DESESTRUCTURACION DE UN ARRAY

const mascotaArray = ["Luna", "Thor", "Lola"]
//console.log(mascotaArray[2]) // repaso de un array

//--> para desestructirarlo 
 const[m1, , m3] = mascotaArray // lo que va adentro del corchete no importa el nombre, importa la posicion. 
 console.log(m1)         // si quiero traer algo de la tercera posicion dejo comas por cada cosa que no necesite
 console.log(m3)