function Organigramme() {
  return (
    <>
      <div className="accordion" id="accordionOrange">
        {/* Niveau 1 Orange France */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOrangeFrance">
              Orange France
            </button>
          </h2>
          <div id="collapseOrangeFrance" className="accordion-collapse collapse show" data-bs-parent="#accordionOrange">
            <div className="accordion-body">

              {/* Niveau 2 Opérations */}
              <div className="accordion" id="accordionOperations">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOperations">
                      Opérations
                    </button>
                  </h2>
                  <div id="collapseOperations" className="accordion-collapse collapse show" data-bs-parent="#accordionOperations">
                    <div className="accordion-body">

                      {/* Niveau 3 DISU */}
                      <div className="accordion" id="accordionDISU">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDISU">
                              DISU
                            </button>
                          </h2>
                          <div id="collapseDISU" className="accordion-collapse collapse show" data-bs-parent="#accordionDISU">
                            <div className="accordion-body">

                              {/* Niveau 4 Direction Technique et Intégration */}
                              <div className="accordion" id="accordionDTI">
                                <div className="accordion-item">
                                  <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDTI">
                                      Direction Technique et Intégration
                                    </button>
                                  </h2>
                                  <div id="collapseDTI" className="accordion-collapse collapse show" data-bs-parent="#accordionDTI">
                                    <div className="accordion-body">

                                      {/* Niveau 5 APV */}
                                      <div className="accordion" id="accordionAPV">
                                        <div className="accordion-item">
                                          <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAPV">
                                              APV
                                            </button>
                                          </h2>
                                          <div id="collapseAPV" className="accordion-collapse collapse show" data-bs-parent="#accordionAPV">
                                            <div className="accordion-body">
                                              <ul>
                                                <li>Kimberley CRUNEL (Manager)</li>
                                              </ul>

                                              {/* 2 colonnes*/}
                                              <div className="row mt-3">

                                                {/* Colonne AMEC */}
                                                <div className="col-md-6">
                                                  <div className="accordion" id="accordionAMEC">
                                                    <div className="accordion-item">
                                                      <h2 className="accordion-header">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAMEC">
                                                          AMEC
                                                        </button>
                                                      </h2>
                                                      <div id="collapseAMEC" className="accordion-collapse collapse show" data-bs-parent="#accordionAMEC">
                                                        <div className="accordion-body">
                                                          <ul>
                                                            <li>Matthys VERBREGUE</li>
                                                            <li>Alexy DURAND</li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

                                                {/* Colonne BAVO */}
                                                <div className="col-md-6">
                                                  <div className="accordion" id="accordionBAVO">
                                                    <div className="accordion-item">
                                                      <h2 className="accordion-header">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBAVO">
                                                          BAVO
                                                        </button>
                                                      </h2>
                                                      <div id="collapseBAVO" className="accordion-collapse collapse show" data-bs-parent="#accordionBAVO">
                                                        <div className="accordion-body">
                                                          <ul>
                                                            <li>Alexis VALLET</li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organigramme;