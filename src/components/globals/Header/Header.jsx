import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/quien-soy">¿Quién soy?</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header