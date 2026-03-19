import Navbar from "../../components/navbar/navbar";
import logoPowerApps from "../../assets/powerAppsLogo.png";
import logoPowerAutomate from "../../assets/powerAutomateLogo.png";
import logoSharePoint from "../../assets/sharePointLogo.png";
import Carousel from "../../components/carousel/carousel";

function Accueil() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Bienvenue sur mon site</h1>
            <hr></hr>
            <p class="fs-4">
              Dans le cadre de mon stage de 2ème année de BUT Informatique, j'ai
              intégré l'équipe DISU d'Orange Campus Tolosa à Balma.
            </p>
            <p class="fs-4">
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
            <div className="row mt-2">
              <div className="col-6">
                <img
                  src={logoSharePoint}
                  className="img-fluid w-50"
                  alt="image 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel />
    </>
  );
}

export default Accueil;
