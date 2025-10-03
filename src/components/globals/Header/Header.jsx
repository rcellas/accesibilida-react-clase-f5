import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Ir al inicio del porfolio de Crispy">
        <h1>Crispy</h1>
      </Link>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/quien-soy" aria-label="Conocer más a Crispy">¿Quién soy?</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header