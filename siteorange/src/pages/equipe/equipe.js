import Organigramme from "../../components/organigramme";
import '../equipe/equipe.css';

function Equipe() {
  return (
    <>  
      <div className="container mt-5">
        <h1>Présentation de <span style={{color: '#ff7900'}}>l'équipe</span></h1>
        <br></br>
        <div className="row align-items-start">
            {/* Utilisation du component Organigramme */}
            <Organigramme />
        </div>
      </div>
     
    </>
  );
}

export default Equipe;
