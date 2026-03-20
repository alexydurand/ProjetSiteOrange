import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logoOrange.svg'

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} width="50" height="50" alt="Orange logo" loading="lazy" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
              Accueil
            </Link>
            <Link className={`nav-link ${location.pathname === '/equipe' ? 'active' : ''}`} to="/equipe">
              Équipe
            </Link>
            <Link className={`nav-link ${location.pathname === '/projet' ? 'active' : ''}`} to="/projet">
              Mes Projets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;