import logoPowerApps from "../../assets/powerAppsLogo.png";
import logoPowerAutomate from "../../assets/powerAutomateLogo.png";
import logoSharePoint from "../../assets/sharePointLogo.png";
import logoReact from "../../assets/reactLogo.png";
import imgCampus from "../../assets/campusOrange.jpg";

function Accueil() {
  return (
    <>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Bienvenue sur mon site</h1>
            <hr></hr>
            <p>
              Dans le cadre de mon stage de 2ème année de BUT Informatique, j'ai
              intégré l'équipe DISU d'Orange Campus Tolosa à Balma.
            </p>
            <p>
              Ce site présente mon expérience, les projets sur lesquels j'ai
              travaillé ainsi que l'équipe qui m'accompagne.
            </p>
          </div>

          <div className="col-md-6 ps-5">
            <div className="row">
              <div className="col-6">
                <img
                  src={logoPowerApps}
                  className="img-fluid w-50"
                  alt="image 1"
                />
              </div>
              <div className="col-6">
                <img
                  src={logoPowerAutomate}
                  className="img-fluid w-50"
                  alt="image 2"
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <img
                  src={logoSharePoint}
                  className="img-fluid w-50"
                  alt="image 3"
                />
              </div>
              <div className="col-6">
                <img src={logoReact} className="img-fluid w-50" alt="image 3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* objectifs de mon stage + image campus */}

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src={imgCampus}
              className="img-fluid w-80"
              alt="image campus"
            />
          </div>
          <div className="col-md-6">
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Les objectifs de mon stage
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse show"
                >
                  <ol class="list-group list-group-numbered">
                    <li class="list-group-item">Collaborer en équipe.</li>
                    <li class="list-group-item">
                      Comprendre la configuration des serveurs.
                    </li>
                    <li class="list-group-item">
                      Renforcer mes compétences en documentation et en
                      communication technique.
                    </li>
                    <li class="list-group-item">
                      Acquérir des compétences en développement d'application.
                    </li>
                    <li class="list-group-item">
                      Collaborer avec des alternants ou membres de l'équipe.
                    </li>
                    <li class="list-group-item">
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
