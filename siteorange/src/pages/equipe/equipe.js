import Organigramme from "../../components/organigramme";
import '../equipe/equipe.css';

function Equipe() {
  return (
    <>
      {/* 2 containers : un pour le titre et un pour l'organigramme */}
      <div className="container mt-5">
        <h1>Présentation de <span style={{color: '#ff7900'}}>l'équipe</span></h1>
      </div>
      <div className="container mt-5">
        <div className="row align-items-start">
            {/* Utilisation du component Organigramme */}
            <Organigramme />
        </div>
      </div>
     
    </>
  );
}

export default Equipe;
