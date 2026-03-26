import "../organigramme/organigramme.css";

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
                            <ul class="fs-4">
                              <li>Kimberley CRUNEL</li>
                              <br></br>
                              <li>Stéphanie DELPOUX</li>
                            </ul>
                            <div className="row mt-3">
                              {/* Division de l'accordion APV en deux sous accordions -> AMEC */}
                              <div className="col-md-6">
                                <div className="accordion" id="accordionAMEC">
                                  {/* Accordion AMEC dans APV */}
                                  <AccordionItem id="collapseAMEC" title="AMEC">
                                    <ul class="fs-4">
                                      <li>Alexy DURAND</li>
                                      <br></br>
                                      <li
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        data-bs-title="Alternant AMEC — Gestion de projet Agile"
                                      >
                                        Matthys VERBREGUE
                                      </li>
                                      <br></br>
                                      <li>Corentin ROBIC</li>
                                    </ul>
                                  </AccordionItem>
                                </div>
                              </div>
                              <div className="col-md-6">
                                {/* Accordion BAVO dans APV */}
                                <div className="accordion" id="accordionBAVO">
                                  <AccordionItem id="collapseBAVO" title="BAVO">
                                    <ul>
                                      <li class="fs-4">Alexis VALLET</li>
                                      <br></br>
                                      <li class="fs-4">Jean Sébastien MARC</li>
                                      <br></br>
                                      <li class="fs-4">Marc BLOT</li>
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
                    <ul class="fs-4">
                      <li>Chloé CHIARLINI</li>
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
