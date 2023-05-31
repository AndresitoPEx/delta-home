import './main.css'
import ListarProductos from '../Productos'

const Main = () =>{
    return(
        <main className="main">
            <h1>Productos Destacados</h1>
            <ListarProductos url={"/api/producto"}/>
        </main>
        
    )
}

export default Main;