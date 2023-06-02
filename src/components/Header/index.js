import { Link, useLocation } from 'react-router-dom';

import './header.css';

const Header = () => {

    const location = useLocation();

    const activeStyle = {
        color: '#F5821F',
        borderbottom: '#F5821F 2px solid'

};


return (
    <header className="header">
        <div className='head-container'>
            <div className='space'>
                <p></p>
            </div>
            <Link to='/' className='logo'>
                <img src="./img/delta-logo.png" alt="logo" />
            </Link>
        </div>
        <nav>
            <ul className='options'>
                <li><Link className='link' to="/" style={location.pathname === '/' ? activeStyle : {}}>Inicio</Link></li>
                <li><Link className='link' to="/productos" style={location.pathname === '/productos' ? activeStyle : {}}>Productos</Link></li>
                <li><Link className='link' to="/nosotros" style={location.pathname === '/nosotros' ? activeStyle : {}}>Nosotros</Link></li>
                <li><Link className='link' to="/contacto" style={location.pathname === '/contacto' ? activeStyle : {}}>Contacto</Link></li>
                <li><Link className='link' to="/login" style={location.pathname === '/login' ? activeStyle : {}}>Login</Link></li>
                <li><Link className='link' to="/registrar-usuario" style={location.pathname === '/registrar-usuario' ? activeStyle : {}}>Registrate</Link></li>
            </ul>
        </nav>

    </header>
)


}

export default Header;