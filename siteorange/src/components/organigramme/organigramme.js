import "../organigramme/organigramme.css";
import { useEffect } from "react";
import { Tooltip } from "boosted";

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
          data-bs-target={`#${id}`} /* dit à Boosted quel élément ouvrir/fermer quand je clique sur le bouton */
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
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );
    [...tooltipTriggerList].map(
      (el) =>
        new Tooltip(el, {
          html: true,
        }),
    );
  }, []);

  return (
    <div className="accordion" id="accordionOrangeFrance">
      {/* Accordion principal Orange France qui englobe tous les autres accordions */}
      <AccordionItem id="collapseOrangeFrance" title="Orange France">
        {/*  */}
        <div className="row mt-2">
          {/* Division de l'accordion OF en deux sous accordions -> accordion Opérations */}
          <div className="col-md-6">
            <div className="accordion" id="accordionOperations">
              {/* Accordion Opérations dans OF */}
              <AccordionItem id="collapseOperations" title="Opérations">
                <div className="accordion" id="accordionDISU">
                  {/* Accordion DISU dans Opérations */}
                  <AccordionItem
                    id="collapseDISU"
                    title="DISU (Direction Infogérence et Service Utilisateurs)"
                  >
                    <div className="accordion" id="accordionDTI">
                      {/* Accordion DTI dans DISU */}
                      <AccordionItem
                        id="collapseDTI"
                        title="Direction Technique et Intégration"
                      >
                        <div className="accordion" id="accordionAPV">
                          {/* Accordion APV dans DTI */}
                          <AccordionItem id="collapseAPV" title="APV">
                            <ul className="list-unstyled fs-4">
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="right"
                                  data-bs-title="<u>Fonction :</u><br> Manager de l'entité APV"
                                >
                                  Kimberley&nbsp;
                                  <span style={{ color: "#ff7900" }}>
                                    CRUNEL
                                  </span>
                                </button>
                              </li>
                              <br></br>
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="right"
                                  data-bs-title="<u>Fonction :</u><br> Administration des Services M365"
                                >
                                  Stéphanie&nbsp;
                                  <span style={{ color: "#ff7900" }}>
                                    DELPOUX
                                  </span>
                                </button>
                              </li>
                              <br></br>
                              <li>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="right"
                                  data-bs-title="<u>Fonction :</u><br> "
                                >
                                  Romain&nbsp;
                                  <span style={{ color: "#ff7900" }}>
                                    Rouquet
                                  </span>
                                </button>
                              </li>
                            </ul>
                            <div className="row mt-3">
                              {/* Division de l'accordion APV en deux sous accordions -> AMEC */}
                              <div className="col-md-6">
                                <div className="accordion" id="accordionAMEC">
                                  {/* Accordion AMEC dans APV */}
                                  <AccordionItem id="collapseAMEC" title="AMEC">
                                    <ul className="list-unstyled fs-4">
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          data-bs-title="<u>Fonction :</u> <br/>Stagiaire BUT Informatique 2ème année"
                                        >
                                          Alexy&nbsp;
                                          <span style={{ color: "#ff7900" }}>
                                            DURAND
                                          </span>
                                        </button>
                                      </li>

                                      <br></br>
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          data-bs-title="<u>Fonction :</u><br> Alternant préparant un Master MIAGE à l'université Toulouse Capitole<br>"
                                        >
                                          Matthys&nbsp;
                                          <span style={{ color: "#ff7900" }}>
                                            VERBREGUE
                                          </span>
                                        </button>
                                      </li>
                                      <br></br>
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          data-bs-title="<u>Fonction :</u><br>Stagiaire BUT R&T 3ème année "
                                        >
                                          Corentin&nbsp;
                                          <span style={{ color: "#ff7900" }}>
                                            ROBIC
                                          </span>
                                        </button>
                                      </li>
                                    </ul>
                                  </AccordionItem>
                                </div>
                              </div>
                              <div className="col-md-6">
                                {/* Accordion BAVO dans APV */}
                                <div className="accordion" id="accordionBAVO">
                                  <AccordionItem id="collapseBAVO" title="BAVO">
                                    <ul className="list-unstyled fs-4">
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          data-bs-title="<u>Fonction :</u><br> Alternant"
                                        >
                                          Alexis&nbsp;
                                          <span style={{ color: "#ff7900" }}>
                                            VALLET
                                          </span>
                                        </button>
                                      </li>
                                      <br></br>
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          data-bs-title="<u>Fonction :</u><br> Administrateur Technique de l'Exploitation"
                                        >
                                          Jean Sébastien&nbsp;
                                          <span style={{ color: "#ff7900" }}>
                                            MARC
                                          </span>
                                        </button>
                                      </li>
                                      <br></br>
                                      <li>
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary"
                                          data-bs-toggle="tooltip"
                                          data-bs-placement="right"
                                          data-bs-title="<u>Fonction :</u><br> Ingénieur de production"
                                        >
                                          Marc&nbsp;
                                          <span style={{ color: "#ff7900" }}>
                                            BLOT
                                          </span>
                                        </button>
                                      </li>
                                    </ul>
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
          {/* Deuxième colonne de l'accordion principal (OF) */}
          <div className="col-md-6">
            <div className="accordion" id="accordionDTOF">
              {/* Accordion DTOF dans OF */}
              <AccordionItem
                id="collapseDTOF"
                title="Direction Technique Orange France"
              >
                <div className="accordion" id="accordionPFC">
                  {/* Accordion PFC dans DTOF */}
                  <AccordionItem
                    id="collapsePFC"
                    title="PFC (Plateformes Cloud)"
                  >
                    <ul className="list-unstyled fs-4">
                      <li>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          data-bs-title="<u>Fonction :</u><br> Experte en technologie Microsoft"
                        >
                          Amélie&nbsp;
                          <span style={{ color: "#ff7900" }}>MARI</span>
                        </button>
                      </li>
                      <br></br>
                      <li>
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          data-bs-title="<u>Fonction :</u><br> Alternante"
                        >
                          Chloé&nbsp;
                          <span style={{ color: "#ff7900" }}>CHIARLINI</span>
                        </button>
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
