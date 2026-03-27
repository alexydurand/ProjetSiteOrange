// useState : stock une valeur qui peut changer
// useEffect : exécute du code à un moment précis
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import "./listeMissions.css";
import { NavLink } from "react-router-dom";
import SupprimerMission from "../modalSuppression";

function ListeMissions({ filtre, missions, rafraichir }) {
 
  const [missionSelectionnee, setMissionSelectionnee] = useState(null);

  
  let missionsFiltrees; // let : variable locale
  if (filtre === "all") {
    missionsFiltrees = missions; // affichage de toutes les missions si le le bouton "Toutes mes missions" est sélectionné
  } else {
    missionsFiltrees = missions.filter(
      (mission) => mission.provenance === filtre,
    ); // si non on parcourt chaque mission et on garde
    // que celles dont la provenance correspond au filtre sélectionné
  }

  return (
    <div className="container mt-5">
      <SupprimerMission id={missionSelectionnee} rafraichir={rafraichir} />
      {missionsFiltrees.map(
        (
          mission, //.map : méhode qui parcourt chaque élément d'un tableau
        ) => (
          <div className="accordion mb-2" key={mission.id}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${mission.id}`}
                  aria-expanded="true"
                >
                  <span className="fs-3">
                    {mission.nom} : venant de&nbsp;
                    <span style={{ color: "#ff7900" }}>
                      {mission.provenance}
                    </span>
                  </span>
                  <span className="d-flex gap-2 ms-auto me-2">
                    <NavLink to={`/modificationMission/${mission.id}`}>
                      <MdEdit />
                    </NavLink>

                    <span
                      className="trash-icon"
                      data-bs-toggle="modal"
                      data-bs-target="#modalSupprimer" // # signifie : cherche l'élément avec cet id
                      onClick={(e) =>
                        setMissionSelectionnee(mission.id)
                      }
                    >
                      <FaTrash />
                    </span>
                  </span>
                </button>
              </h2>
              <div
                id={`collapse-${mission.id}`}
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <p className="fs-4">{mission.description}</p>{" "}
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
