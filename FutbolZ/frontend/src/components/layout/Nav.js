import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/equipos">Equipos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/actualidad">Actualidad</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav;