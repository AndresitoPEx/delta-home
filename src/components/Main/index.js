import './main.css';
import ListarProductos from '../Productos';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Caracteristicas from '../Caracteristicas';

const Main = () => {
    return (
        <main className="main">
            <div className="landing-section">
                <h1>Productos Destacados</h1>
                <ListarProductos url={"/api/producto"} />
            </div>
            <div className="cta-section">
                <h2>Descubre nuestros productos exclusivos</h2>
                <p>Obtén lo mejor en calidad y estilo</p>
                <Link to="/registrar-usuario">
                    <Button variant="contained" color="primary">
                        Regístrate ahora
                    </Button>
                </Link>
            </div>
            <div>
                <Caracteristicas />
            </div>
            <div className="landing-section">
                <h1>Productos Destacados</h1>
                <ListarProductos url={"/api/producto"} />
            </div>
        </main>
    );
}

export default Main;
