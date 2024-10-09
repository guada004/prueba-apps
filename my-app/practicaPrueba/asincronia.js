console.log("saludos desde js")
//FETCH --> me devuelve una promesa
let url = "https://rickandmortyapi.com/api/character/190"
/*const consulta = fetch(url)
.then((res)=> res.json()) //recibe un call back se muentra cuando la peticion se resolvio de forma correcta
.then((res) => console.log(res)) // la respuesta json la tengo que transformar de vuelta y me da la respuesta final
*/
//ASYNC AWAIT  --> ES LA QUE MAS SE USA
const handleData = async ()=>{
    const consulta = await fetch(url)
    let data = await consulta.json()
    console.log(data)
}
handleData()