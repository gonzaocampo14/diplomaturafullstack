
import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
        <div class="holder">
            <ul>
                <li><Link to="index">Home</Link></li>
                <li><Link to="nosotros">Nosotros</Link></li>
            </ul>
        </div>
    </nav>
    )
}

export default Nav;