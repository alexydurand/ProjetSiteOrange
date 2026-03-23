/* fonction AccordionItem qui permet de créer un accordion avec
  un id, un titre (exemple : Orange France) et le children qui contient ce qu'il y a à l'intérieur */

function AccordionItem({ id, title, children }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`}>
          {title}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse show">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
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
                      <AccordionItem id="collapseDTI" title="Direction Technique et Intégration">
                        <div className="accordion" id="accordionAPV">
                          <AccordionItem id="collapseAPV" title="APV">
                            <ul><li>Kimberley CRUNEL (Manager)</li></ul>
                            <div className="row mt-3">
                              <div className="col-md-6">
                                <div className="accordion" id="accordionAMEC">
                                  <AccordionItem id="collapseAMEC" title="AMEC">
                                    <ul>
                                      <li>Matthys VERBREGUE</li>
                                      <li>Alexy DURAND</li>
                                    </ul>
                                  </AccordionItem>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="accordion" id="accordionBAVO">
                                  <AccordionItem id="collapseBAVO" title="BAVO">
                                    <ul><li>Alexis VALLET</li></ul>
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
              <AccordionItem id="collapseDTOF" title="Direction Technique Orange France">
                <div className="accordion" id="accordionPFC">
                  <AccordionItem id="collapsePFC" title="PFC">
                    <ul><li>Chloé CHIARLINI</li></ul>
                  </AccordionItem>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </AccordionItem>
    </div>
  )
}

export default Organigramme;