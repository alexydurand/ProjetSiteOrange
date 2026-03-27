// Imports des images/logos
import logoPowerApps from "../../assets/powerAppsLogo.png";
import logoPowerAutomate from "../../assets/powerAutomateLogo.png";
import logoSharePoint from "../../assets/sharePointLogo.png";
import logoReact from "../../assets/reactLogo.png";
import imgCampus from "../../assets/campusOrange.jpg";
import { NavLink } from "react-router-dom";
import '../accueil/accueil.css';
import logoNode from "../../assets/nodeexpress.png";

function Accueil() {
  return (
    <>
      {/* Premier container : paragraphe bienvenue + 4 logos */}
      <div className="container mt-5">
        <div className="row align-items-center">
          {/* Première colonne : paragraphe de bienvenue */}
          <div className="col-md-6">
            <h1 className="fs-1">
              Bienvenue sur mon <span style={{ color: "#ff7900" }}>site</span>
            </h1>
            <hr></hr>
            <p className="fs-4">
              Dans le cadre de mon stage de 2ème année de BUT Informatique, j'ai
              intégré l'équipe DISU d'Orange Campus Tolosa à Balma.
              <br></br>
              <br></br>
              Ce site présente mon expérience, les projets sur lesquels j'ai
              travaillé ainsi que l'équipe qui m'accompagne.
            </p>
            <NavLink to="/equipe">
              <button className="btn btn-primary btn-lg mt-2">L'équipe</button>
            </NavLink>
            &nbsp;
            <NavLink to="/projet">
              <button className="btn btn-outline-secondary btn-lg mt-2">
                Mes missions
              </button>
            </NavLink>
          </div>
          {/* Deuxième colonne : 4 logos */}
          <div className="col-md-6 ps-5">
            {/* Première ligne qui va contenir 2 logos */}
            <div
              id="carouselExamplePause"
              className="carousel slide carousel-reduit"
              data-bs-ride="carousel"
              data-bs-pause="false"
            >
              <div className="carousel-action-bar">
                <button
                  type="button"
                  className="btn btn-icon carousel-control-play-pause pause"
                  data-bs-target="#carouselExamplePause"
                  data-bs-play-text="Play Carousel"
                  data-bs-pause-text="Pause Carousel"
                  title="Pause Carousel"
                >
                  <span className="visually-hidden">Pause Carousel</span>
                </button>
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExamplePause"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExamplePause"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExamplePause"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExamplePause"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExamplePause"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                </div>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={logoPowerApps}
                    className="d-block w-100"
                    alt="logo Power Apps"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={logoPowerAutomate}
                    className="d-block w-100"
                    alt="logo Power Automate"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img src={logoReact} className="d-block w-100" alt="logo React"></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={logoSharePoint}
                    className="d-block w-100"
                    alt="logo Share Point"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    src={logoNode}
                    className="d-block w-100"
                    alt="logo Node + Express"
                  ></img>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExamplePause"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExamplePause"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième container : image campus + objectifs de mon stage */}

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={imgCampus}
              className="img-fluid w-80"
              alt="Campus Orange Tolosa"
            />
          </div>
          <div className="col-md-6">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                  >
                    <span>
                      Les&nbsp;
                      <span style={{ color: "#ff7900" }}>objectifs</span>
                      &nbsp;de mon stage
                    </span>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  {/* Liste des objectifs de mon stage */}
                  <ol className="list-group list-group-numbered fs-4">
                    {" "}
                    {/* ol = liste ordonnée */}
                    <li className="list-group-item">Collaborer en équipe.</li>
                    <li className="list-group-item">
                      Comprendre la configuration des serveurs.
                    </li>
                    <li className="list-group-item">
                      Renforcer mes compétences en documentation et en
                      communication technique.
                    </li>
                    <li className="list-group-item">
                      Acquérir des compétences en développement d'application.
                    </li>
                    <li className="list-group-item">
                      Collaborer avec des alternants ou membres de l'équipe.
                    </li>
                    <li className="list-group-item">
                      Collaborer aux différentes réunions Agile et comprendre
                      les rôles associés.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default Accueil;
