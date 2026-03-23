import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

function FormulaireMission() {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [provenance, setProvenance] = useState('');
  const navigate = useNavigate();

  const formulaireValide = nom !== '' && description !== '' && provenance !== '';

  const handleSubmit = async (e) => {
    e.preventDefault()

    await fetch('http://localhost:3001/api/missions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nom, description, provenance })
    })

    navigate('/projet')
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Ajout d'une mission</h1>
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