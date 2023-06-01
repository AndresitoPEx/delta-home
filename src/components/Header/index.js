// import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {
    return <div className="header">
        <div className='head-container'>
            <div className='space'>
                <p></p>
            </div>
            <a href='/' className='logo'>
                <img href="/" src="./img/delta-logo.png" alt="logo" />
            </a>
        </div>
        <nav>
            <ul className='options'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="/">Nosotros</a></li>
                <li><a href="/">Contacto</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/registrar-usuario">Registro</a></li>
            </ul>
        </nav>

    </div>


}

export default Header;