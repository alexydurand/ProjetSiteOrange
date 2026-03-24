import ListeMissions from "./listeMissions/listeMissions";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Projet() {
  // variable filtre , valeur de base 'all' : toutes les missions
  const [filtre, setFiltre] = useState('all');

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1>Mes<span style={{color: '#ff7900'}}> missions</span></h1>
          <div className="d-flex align-items-center gap-3">
            <ul className="list-unstyled d-flex gap-2 flex-wrap m-0">
              <li>
                {/* type radio pour avoir qu'un seul bouton selectionnable à la fois */}
                <input type="radio" className="btn-check" name="filtre" id="btncheck-all" value="all" autoComplete="off" defaultChecked onChange={(e) => setFiltre(e.target.value)} />
                <label className="tag" htmlFor="btncheck-all">Toutes mes missions</label>
              </li>
              <li>
                <input type="radio" className="btn-check" name="filtre" id="btncheck-alexis" value="Alexis" autoComplete="off" onChange={(e) => setFiltre(e.target.value)} />
                <label className="tag" htmlFor="btncheck-alexis">Alexis</label>
              </li>
              <li>
                <input type="radio" className="btn-check" name="filtre" id="btncheck-chloe" value="Chloé" autoComplete="off" onChange={(e) => setFiltre(e.target.value)} />
                <label className="tag" htmlFor="btncheck-chloe">Chloé</label>
              </li>
              <li>
                <input type="radio" className="btn-check" name="filtre" id="btncheck-matthys" value="Matthys" autoComplete="off" onChange={(e) => setFiltre(e.target.value)} />
                <label className="tag" htmlFor="btncheck-matthys">Matthys</label>
              </li>
            </ul>
            {/* Redirection vers la page formulaire mission */}
            <NavLink to="/formulaireMission">
              <button type="button" className="btn btn-primary">
                Ajouter une mission
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* appel du composant ListeMissions avec comme paramètre : filtre (définis par défaut sur all)*/}
      <ListeMissions filtre={filtre} />
    </>
  );
}

export default Projet;