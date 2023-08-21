import React from 'react';

const Header = (props) => {
    return (
        <header>
        <div class="holder">
            <img src="img/logo.png" width="100" alt="futbol"/>
            <h1>Fútbol X</h1>
        </div>
        <div class="holder">
            <ul>
                <li><a href="login.html">Iniciar Sesión</a></li>
                <li><a href="registro.html">Registrarse</a></li>
            </ul>
        </div>
    </header>
    )
}

export default Header;