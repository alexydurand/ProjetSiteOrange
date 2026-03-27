import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";


function SupprimerMission({ id, rafraichir }) {
  const navigate = useNavigate();
  
  const [nom, setNom] = useState("");

  useEffect(() => {

    if(!id) return;

    fetch(`http://localhost:3001/api/missions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNom(data.nom);
      });
      
  }, [id]);

  // fonction permettante de supprimer une mission via son id
  const handleDelete = async () => {
    await fetch(`http://localhost:3001/api/missions/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    // appel de la fonction rafrachir en parametre qui appelle la fonction chargerMisson : -> refresh la liste
    rafraichir();

    navigate("/projet");
  };

  return (
    <>
      <div className="modal" id="modalSupprimer" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Suppression mission</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Close"
              >
                <span className="visually-hidden">Annuler</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Voulez-vous vraiment supprimer la mission : "{nom}" ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleDelete}
              >
                Valider
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupprimerMission;
