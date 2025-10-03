import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link to="/" aria-label="Ir al inicio - Crispy Portfolio">
            <h1 className="header__logo">Crispy</h1>
          </Link>
        </div>
        
        <nav className="header__nav" aria-label="Navegación principal">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link 
                to="/" 
                className="header__nav-link" 
                aria-label="Ir a la página principal"
              >
                Inicio
              </Link>
            </li>
            <li className="header__nav-item">
              <Link 
                to="/quien-soy" 
                className="header__nav-link"
                aria-label="Conocer más sobre Crispy"
              >
                ¿Quién soy?
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header