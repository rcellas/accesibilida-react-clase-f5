import "./Footer.css"

function Footer() {
  return (
    <footer>
      <section className="footer-section footer-section__left">
        <p className="copyright">© 2025 Crispy. Todos los derechos reservados.</p>
      </section>

      <section className="footer-section footer-section__right">
        <nav aria-label="Redes sociales">
          <ul className="social-links">
            <li>
              <a href="https://twitter.com" aria-label="Visitar nuestro Twitter" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" aria-label="Visitar nuestro LinkedIn" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" aria-label="Visitar nuestro GitHub" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}

export default Footer