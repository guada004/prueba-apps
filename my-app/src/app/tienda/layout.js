import Link  from "next/link"

export default function tiendaLayout({children}){
    return <>
        <nav>
            <h3> Seccion Tienda</h3>
            <ul>
                <li><Link href = "/tienda/categorias">categorias</Link></li>
            </ul>
        </nav>
        {children}
    
    </>
}
