import Link  from "next/link"

export default function Navbar (props){ // Para importar tengo que poner export default
  console.log(props.temandoElNombre)
  return(<nav>
        <h1 style={{
          color: "pink"
        }}>{props.temandoElNombre}</h1>
        <ul>
          <li><Link href = "/">home</Link> </li>
          <li><Link href = "/tienda">Tienda</Link></li>
          <li><Link href = "/about">about</Link> </li>
        </ul>
  </nav>)
 }
