import { useState } from "react"; // valeur qui peut changer
import { useNavigate } from "react-router-dom"; // Redirection depuis du code et non depuis un clic


function FormulaireMission() {
  // Déclarations variables
  const [nom, setNom] = useState(''); // nom : valeur actuelle (commence vide), setNom : fonction pour modifier nom.
  const [description, setDescription] = useState('');
  const [provenance, setProvenance] = useState('');
  const navigate = useNavigate();

  // booléen qui vérifie que le nom, la description et la provenance ne sont pas nulles dans le formulaire
  const formulaireValide = nom !== '' && description !== '' && provenance !== '';

  const handleSubmit = async (e) => { // async permet d'utiliser await
    e.preventDefault() // empeche le rechargement de la page quand on soumet le form

    await fetch('http://localhost:3001/api/missions', { 
      method: 'POST', // on envoie des données à l'API
      headers: { 'Content-Type': 'application/json' }, // j'envoie du JSON
      body: JSON.stringify({ nom, description, provenance }) // les données du form sont converties en JSON
                                                             // JSON.stringify : transforme un objet JS en texte JSON
    })

    navigate('/projet')
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Ajout d'une <span style={{ color: "#ff7900" }}>mission</span></h1>
      </div>
      <div className="container mt-5">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label is-required">
                Nom de la mission<span className="visually-hidden"> (required)</span>
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
                Description de la mission<span className="visually-hidden"> (required)</span>
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
            <button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={!formulaireValide}
            >
              Valider
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default FormulaireMission;