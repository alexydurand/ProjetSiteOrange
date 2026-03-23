/* fonction AccordionItem qui permet de créer un accordion avec
  un id, un titre (exemple : Orange France) et le children qui contient ce qu'il y a à l'intérieur */

function AccordionItem({ id, title, children }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
        >
          {title}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse show">
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

/* fonction Organigramme qui présente la hierarchie d'Orange*/

function Organigramme() {
  return (
    <div className="accordion" id="accordionOrangeFrance">
      <AccordionItem id="collapseOrangeFrance" title="Orange France">
        <div className="row mt-2">
          <div className="col-md-6">
            <div className="accordion" id="accordionOperations">
              <AccordionItem id="collapseOperations" title="Opérations">
                <div className="accordion" id="accordionDISU">
                  <AccordionItem id="collapseDISU" title="DISU">
                    <div className="accordion" id="accordionDTI">
                      <AccordionItem
                        id="collapseDTI"
                        title="Direction Technique et Intégration"
                      >
                        <div className="accordion" id="accordionAPV">
                          <AccordionItem id="collapseAPV" title="APV">
                            <ul>
                              <li>
                                <a
                                  href="https://annuaire-sec.sso.infra.ftgroup/persons/57lppgs_1IADjHYH_9OurA%3D%3D"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Kimberley CRUNEL (Manager)
                                </a>
                              </li>
                            </ul>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <div className="accordion" id="accordionAMEC">
                                  <AccordionItem id="collapseAMEC" title="AMEC">
                                    <ul>
                                      <li>
                                        <a
                                          href="https://annuaire-sec.sso.infra.ftgroup/persons/H2hHoAuidzcDjHYH_9OurA%3D%3D"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          Alexy DURAND
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://annuaire-sec.sso.infra.ftgroup/persons/kHnuF836I5sDjHYH_9OurA%3D%3D"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          Matthys VERBREGUE
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="https://annuaire-sec.sso.infra.ftgroup/persons/iKExlMp2iP0DjHYH_9OurA%3D%3D"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          Corentin ROBIC
                                        </a>
                                      </li>
                                    </ul>
                                  </AccordionItem>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="accordion" id="accordionBAVO">
                                  <AccordionItem id="collapseBAVO" title="BAVO">
                                    <li>
                                      <a
                                        href="https://annuaire-sec.sso.infra.ftgroup/persons/XwEqZNjQXUoDjHYH_9OurA%3D%3D"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        Alexis VALLET
                                      </a>
                                    </li>
                                  </AccordionItem>
                                </div>
                              </div>
                            </div>
                          </AccordionItem>
                        </div>
                      </AccordionItem>
                    </div>
                  </AccordionItem>
                </div>
              </AccordionItem>
            </div>
          </div>
          <div className="col-md-6">
            <div className="accordion" id="accordionDTOF">
              <AccordionItem
                id="collapseDTOF"
                title="Direction Technique Orange France"
              >
                <div className="accordion" id="accordionPFC">
                  <AccordionItem id="collapsePFC" title="PFC (Plateformes Cloud)">
                    <ul>
                      <li>
                        <a
                          href="https://annuaire-sec.sso.infra.ftgroup/persons/W00P7xV20J0DjHYH_9OurA%3D%3D"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Chloé CHIARLINI
                        </a>
                      </li>
                    </ul>
                  </AccordionItem>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
}

export default Organigramme;
