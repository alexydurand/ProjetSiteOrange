import { Link } from 'react-router-dom';
import logo from '../../assets/logoOrange.svg'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
      <div class="container-fluid">
        <div class="navbar-brand">
          <Link to="/">
            <img
              src={logo}
              width="50"
              height="50"
              alt="Boosted - Back to Home"
              loading="lazy"
            />
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
            <Link className="nav-link" to="/equipe">
              Équipe
            </Link>
            <Link className="nav-link" to="/projet">
              Mes Projets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
