import './main.css'
import ListarProductos from '../ListarProductos/index.js'

const Main = () =>{
    return(
        <main className="main">
            <h1>Esto es el Main</h1>
            <ListarProductos url={"/products"}/>
        </main>
        
    )
}

export default Main;