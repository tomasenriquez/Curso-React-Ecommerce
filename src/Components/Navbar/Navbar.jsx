import CartWidget from "../CartWidget";
import "./Navbar.css";
import Logo from "./assets/Logo.svg"


const Navbar = () => {
    return(
        <div className="Navbar_container">
            <div className="Navbar_logo_container">
                <a className="Navbar_logo" href=""><img src={Logo} alt="" /></a>
            </div>
            <div className="Navbar_secciones_container">
                <ul>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Sobre Nosotros</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <CartWidget />
        </div>
    );
};

export default Navbar;