import './header.css';

const Header = () => {
    return <div className="header">
        <div className='space'>
            <h1></h1>
        </div>
        <img src="./img/delta-logo.png" alt="logo" />
        <nav>
            <ul className='options'>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

    </div> 


}

export default Header;