import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function ModifierMission() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [provenance, setProvenance] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // récupère l'id depuis l'URL
  const [missionOriginale, setMissionOriginale] = useState(null); // création variable qui stocke les données de la mission (utile pour desactiver le bouton si aucun changement)

  useEffect(() => {
    fetch(`http://localhost:3001/api/missions/${id}`) // fetch -> fait une requête HTTP GET vers l'API
      .then((res) => res.json()) // quand l'API répond -> convertit la réponse en JSON
      .then((data) => {
        // préremplis les champs avec les données de la mission
        setNom(data.nom);
        setDescription(data.description);
        setProvenance(data.provenance);
        setMissionOriginale(data);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    // async permet d'utiliser await
    e.preventDefault(); // empêche le rechargement de la page quand on soumet le form

    await fetch(`http://localhost:3001/api/missions/${id}`, {
      method: "PUT", // on envoie des données à l'API
      headers: { "Content-Type": "application/json" }, // j'envoie du JSON
      body: JSON.stringify({ nom, description, provenance }), // les données du form sont converties en JSON
    });

    navigate("/projet");
  };

  // booléen qui vérifie que le formulaire est valide (donc avec un nom, une description et une provenance)
  const formulaireValide =
    nom !== "" && description !== "" && provenance !== "";

  //booléen qui vérifie qu'une modification est effectuée 
  const modificationEffectuee =
    missionOriginale &&
    (nom !== missionOriginale.nom ||
      description !== missionOriginale.description ||
      provenance !== missionOriginale.provenance);

  return (
    <>
      <div className="container mt-5">
        <h1>
          Modification de la <span style={{ color: "#ff7900" }}>mission</span>
        </h1>
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label is-required">
                Nom de la mission
                <span className="visually-hidden"> (required)</span>
              </label>
              <input
                type="text"
                id="nom"
                className="form-control"
                placeholder="Nom de la mission requis"
                value={nom}
                /* met à jour le "nom"*/
                onChange={(e) => setNom(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label is-required">
                Description de la mission
                <span className="visually-hidden"> (required)</span>
              </label>
              <input
                type="text"
                id="description"
                className="form-control"
                placeholder="Description de la mission requise"
                value={description}
                /* met à jour la "description"*/
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="provenance" className="form-label is-required">
                Mission provenante de :
                <span className="visually-hidden"> (required)</span>
              </label>
              <select
                id="provenance"
                className="form-select"
                value={provenance}
                /* met à jour la "provenance"*/
                onChange={(e) => setProvenance(e.target.value)}
              >
                <option value="">-- Choisir --</option>
                <option value="Alexis">Alexis</option>
                <option value="Matthys">Matthys</option>
                <option value="Chloé">Chloé</option>
              </select>
            </div>
            {/* Le bouton Valider est désactivé si le booléen est faux */}
            <p>* Obligatoire</p>
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={!formulaireValide || !modificationEffectuee}
            >
              Valider
            </button>
            &nbsp;
            <NavLink to="/projet">
              <button className="btn btn-secondary mt-2">Annuler</button>
            </NavLink>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default ModifierMission;
