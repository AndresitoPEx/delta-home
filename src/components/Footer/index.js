import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__logo">
                    <img src="./img/delta-logo.png" alt="logo" />
                </div>
                <div className="footer__contact">
                    <h3>Contáctanos</h3>
                    <p>Av. Los Pinos 123, San Isidro</p>
                    <p>999 888 777</p>
                </div>
                <div className="footer__social">
                    <h3>Síguenos</h3>
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div>
                <p className="footer__copy">© 2021 Delta. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer;