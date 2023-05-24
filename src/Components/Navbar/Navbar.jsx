import "./Navbar.css";
import CartWidget from "../CartWidget";
import Logo from "./assets/Logo.svg";
import { Link } from 'react-router-dom';


const Navbar = (count) => {
    console.log(count)
    return(
        <div className="Navbar_container">

            {/* Logo */}
            <div className="Navbar_logo_container">
                
                <Link to={'/'}> <img src={Logo} alt="" /> </Link>
            </div>

            {/* Secciones */}
            <div className="Navbar_seccion_container">

                <ul className="nav__link nav__link--menu">

                    <li className="nav__items"> <Link to={'/'}> Catalogo </Link> </li>
                    <li className="nav__items"> <Link to={'/category/macetas-piso'}> Macetas de Piso </Link> </li>
                    <li className="nav__items"> <Link to={'/category/macetas-pared'}> Macetas de Pared </Link> </li>

                </ul>

            </div>

            {/* Carrito */}
            <CartWidget />

        </div>
    );
};

export default Navbar;