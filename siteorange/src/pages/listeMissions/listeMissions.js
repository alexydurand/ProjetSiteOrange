import { useState, useEffect } from "react";

function ListeMissions({ filtre }) {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/missions")
      .then((res) => res.json())
      .then((data) => setMissions(data));
  }, []);

  let missionsFiltrees;
  if (filtre === 'all') {
    missionsFiltrees = missions;
  } else {
    missionsFiltrees = missions.filter(mission => mission.provenance === filtre);
  }

  return (
    <div className="container mt-5">
      {missionsFiltrees.map((mission) => (
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
                {mission.nom} : venant de {mission.provenance}
              </button>
            </h2>
            <div
              id={`collapse-${mission.id}`}
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                <p>{mission.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListeMissions;