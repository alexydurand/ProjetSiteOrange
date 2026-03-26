// useState : stock une valeur qui peut changer
// useEffect : exécute du code à un moment précis
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import "../listeMissions/listeMissions.css";
import { NavLink } from "react-router-dom";
import SupprimerMission from "../../components/modalSuppression";

function ListeMissions({ filtre }) {
  // missions : la valeur actuelle, setMissions : fonction pour la modifier , [] : valeur de départ
  const [missions, setMissions] = useState([]);
  const [missionSelectionnee, setMissionSelectionnee] = useState(null);

  const chargerMissions = () => {
    fetch("http://localhost:3001/api/missions")
      .then((res) => res.json())
      .then((data) => setMissions(data));
  };

  useEffect(() => {
    chargerMissions();
  }, []);

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
      <SupprimerMission id={missionSelectionnee} rafraichir={chargerMissions} />
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
                  <span class="fs-3">
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
                      data-bs-target="#modalSupprimer"
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
                  <p class="fs-4">{mission.description}</p>{" "}
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
