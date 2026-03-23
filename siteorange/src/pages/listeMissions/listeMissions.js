import { useState, useEffect } from "react";

function ListeMissions() {
  const [missions, setMissions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/missions")
      .then((res) => res.json())
      .then((data) => setMissions(data));
  }, []);

  return (
    <div className="container mt-5">
      {missions.map((mission) => (
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {mission.nom} : venant de {mission.provenance}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
