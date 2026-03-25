import { useNavigate } from "react-router-dom";

function SupprimerMission({ id, rafraichir }) {
  const navigate = useNavigate();

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
      <div class="modal" id="modalSupprimer" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Supprimer cette mission</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                data-bs-title="Close"
              >
                <span class="visually-hidden">Annuler</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Voulez-vous vraiment supprimer cette mission ?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
              >
                Annuler
              </button>
              <button
                type="button"
                class="btn btn-primary"
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
