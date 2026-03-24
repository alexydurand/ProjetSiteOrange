// useState : stock une valeur qui peut changer
// useEffect : exécute du code à un moment précis
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import '../listeMissions/listeMissions.css';
import { NavLink } from "react-router-dom";

function ListeMissions({ filtre }) {
  // missions : la valeur actuelle, setMissions : fonction pour la modifier , [] : valeur de départ
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/missions") // fetch -> fait une requête HTTP GET vers l'API
      .then((res) => res.json()) // quand l'API répond -> convertit la réponse en JSON
      .then((data) => setMissions(data)); // et quand le JSON est prêt -> stocke les données dans le useState
  }, []); // exécute ce code 1 seule fois au chargement

  let missionsFiltrees; // let = variable modifiable
  if (filtre === "all") {
    missionsFiltrees = missions; // affichage de toutes les missions si le le bouton "Toutes mes missions" est sélectionné
  } else {
    missionsFiltrees = missions.filter(
      (mission) => mission.provenance === filtre,
    ); // si non on parcourt chaque mission et on garde
    // que celles dont la provenance correspond au filtre
  }

  return (
    <div className="container mt-5">
      {missionsFiltrees.map(
        (
          mission, //.map : méhode qui parcourt chaque élément d'un tableau
        ) => (
          <div className="accordion mb-2" key={mission.id}>
            {" "}
            {/* Récupération de l'id de la mission */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${mission.id}`}
                  aria-expanded="true"
                >
                  <span>
                    {mission.nom} : venant de&nbsp;
                    <span style={{ color: "#ff7900" }}>
                      {mission.provenance}
                    </span>
                  </span>
                  <span className="d-flex gap-2 ms-auto me-2">
                    <NavLink to='/modificationMission'>
                      <MdEdit />
                    </NavLink>
                    <NavLink to='/supprimerMission'>
                      <FaTrash />
                    </NavLink>
                  </span>
                </button>
              </h2>
              <div
                id={`collapse-${mission.id}`}
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <p>{mission.description}</p>{" "}
                  {/* Récupération de la description de la mission */}
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default ListeMissions;
