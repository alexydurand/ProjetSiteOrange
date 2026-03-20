import ListeMissions from "../listeMissions/listeMissions";
import { Link } from "react-router-dom";

function Projet() {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1><span style={{color: '#ff7900'}}>Mes</span> missions</h1>
          <div className="d-flex align-items-center gap-3">
            <ul className="list-unstyled d-flex gap-2 flex-wrap m-0">
              <li>
                <input
                  type="radio"
                  className="btn-check"
                  name="filtre"
                  id="btncheck-all"
                  autoComplete="off"
                  defaultChecked
                />
                <label className="tag" htmlFor="btncheck-all">
                  Toutes mes missions
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  className="btn-check"
                  name="filtre"
                  id="btncheck-alexis"
                  autoComplete="off"
                />
                <label className="tag" htmlFor="btncheck-alexis">
                  Alexis
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  className="btn-check"
                  name="filtre"
                  id="btncheck-chloe"
                  autoComplete="off"
                />
                <label className="tag" htmlFor="btncheck-chloe">
                  Chloé
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  className="btn-check"
                  name="filtre"
                  id="btncheck-matthys"
                  autoComplete="off"
                />
                <label className="tag" htmlFor="btncheck-matthys">
                  Matthys
                </label>
              </li>
            </ul>
            <Link to="/formulaireMission">
              <button type="button" className="btn btn-primary">
                Ajouter une mission
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ListeMissions />
    </>
  );
}

export default Projet;
