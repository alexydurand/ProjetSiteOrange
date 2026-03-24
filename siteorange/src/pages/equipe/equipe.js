import Organigramme from "../../components/organigramme";
import '../equipe/equipe.css';

function Equipe() {
  return (
    <>
      <div className="container mt-5">
        <h1>Présentation de l'<span style={{color: '#ff7900'}}>équipe</span></h1>
      </div>
      <div className="container mt-5">
        <div className="row align-items-start">
            <Organigramme />
        </div>
      </div>
     
    </>
  );
}

export default Equipe;
