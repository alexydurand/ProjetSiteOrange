
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="navbar-brand">
          <a class="stretched-link" href="#">
            <img
              src="/docs/5.3/assets/brand/orange-logo.svg"
              width="50"
              height="50"
              alt="Boosted - Back to Home"
              loading="lazy"
            />
          </a>
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              Accueil
            </a>
            <a class="nav-link" href="#">
              Équipe
            </a>
            <a class="nav-link" href="#">
              Mes Projets
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
