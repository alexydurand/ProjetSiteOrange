import Footer from "../../components/footer/footer";
import ListeMissions from "../../components/listeMissions/listeMissions";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

function Projet() {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Mes missions</h1>
          <Link to="/formulaireMission">
            <button type="button" className="btn btn-primary">
              Ajouter une mission
            </button>
          </Link>
        </div>
      </div>
      <ListeMissions />
    </>
  );
}

export default Projet;
