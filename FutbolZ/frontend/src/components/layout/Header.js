import React from 'react';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
        <div class="holder">
            <img src="./public/images/logo.png" width="100" alt="futbol"/>
            <h1>Fútbol X</h1>
        </div>
        <div class="holder">
            <ul>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/registro">Registrarse</Link></li>
            </ul>
        </div>
    </header>
    )
}

export default Header;