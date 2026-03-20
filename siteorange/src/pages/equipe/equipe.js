import Organigramme from "../../components/organigramme/organigramme";
import imgOrga from "../../assets/organigrammeOrange.svg";
import '../equipe/equipe.css';

function Equipe() {
  return (
    <>
      <div className="container mt-5">
        <h1>Présentation de l'équipe</h1>
      </div>
      <div className="container mt-5">
        <div className="row align-items-start">
          <div className="col-md-6">
            <Organigramme />
          </div>
          <div className="col-md-6 ps-5">
            <img src={imgOrga} className="img-fluid" alt="Organigramme Orange" />
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Equipe;
