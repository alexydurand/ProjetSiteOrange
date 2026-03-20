import { useState } from "react";

function FormulaireMission() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [provenance, setProvenance] = useState('');

  const formulaireValide = nom !== '' && description !== '' && provenance !== '';

  return (
    <>
      <div className="container mt-5">
        <h1>Ajout d'une mission</h1>
      </div>
      <div className="container mt-5">
        <form>
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
                onChange={(e) => setNom(e.target.value)}
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
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setProvenance(e.target.value)}
              >
                <option value="">-- Choisir --</option>
                <option value="Alexis">Alexis</option>
                <option value="Matthys">Matthys</option>
                <option value="Chloé">Chloé</option>
              </select>
            </div>
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