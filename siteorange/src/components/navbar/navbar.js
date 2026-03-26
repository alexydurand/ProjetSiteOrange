import { NavLink } from "react-router-dom"; /* Redirige vers une page et ajoute automatiquement la classe active */
import logoOrange from "../../assets/logoOrange.svg";
import '../navbar/navbar.css';

/* Composant Navbar */

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="navbar-brand">
          {/* Redirection vers la page d'accueil si on clique sur le logo */}
          <NavLink to="/">
            <img
              src={logoOrange}
              width="50"
              height="50"
              alt="Orange logo"
              loading="lazy"
            />
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
          <div className="navbar-nav">
            {/* Redirection vers /  */}
            <NavLink className="nav-link fs-4" to="/">
              Accueil
            </NavLink>
            {/* Redirection vers la page equipe */}
            <NavLink className="nav-link fs-4" to="/equipe">
              Équipe
            </NavLink>
            {/* Redirection vers la page projet */}
            <NavLink className="nav-link fs-4" to="/projet">
              Mes Projets
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
