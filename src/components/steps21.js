import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps21.css'

const Steps21 = (props) => {
  return (
    <div className="steps21-container1 thq-section-padding">
      <div className="steps21-max-width thq-section-max-width">
        <div className="steps21-container2 thq-grid-2">
          <div className="steps21-section-header">
            <h2 className="steps21-text10 thq-heading-2">
              What I want to get out of the KQ Intern Programme
            </h2>
            <p className="thq-body-large">
              <span>
                I want this opportunity to kickstart my career, and if it is
                possible, potentially get invited back to the company that
                offered the internship and get a part-time or full-time job.  As
                a student wanting to get into the cybersecurity field, there are
                no official courses related to cybersecurity in college. This
                means that if I do get an internship similar to my expectations,
                I want to walk away from this programme with a brand new
                perspective and connections with other people.
              </span>
              <br></br>
              <br></br>
              <br></br>
            </p>
            <div className="steps21-actions"></div>
          </div>
          <div className="steps21-container3">
            <div className="steps21-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps21-text29">Kickstart my career</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text17 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps21-text32">
                      Taking the first step into cybersecurity through this
                      internship.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text18 thq-heading-3">01</label>
            </div>
            <div className="steps21-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps21-text30">
                      Return Offer Potential
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text20 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps21-text35">
                      Proving my value in hopes of a return offer from the
                      company.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text21 thq-heading-3">02</label>
            </div>
            <div className="steps21-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps21-text31">Industry Connections</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text23 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps21-text33">
                      Build connections with professionals and peers.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text24 thq-heading-3">03</label>
            </div>
            <div className="steps21-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps21-text34">Fresh Perspective</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps21-text26 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps21-text28">
                      Walk away with a deeper understanding of the industry with
                      my place within it.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps21-text27 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps21.defaultProps = {
  step4Description: undefined,
  step1Title: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step1Description: undefined,
  step3Description: undefined,
  step4Title: undefined,
  step2Description: undefined,
}

Steps21.propTypes = {
  step4Description: PropTypes.element,
  step1Title: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step1Description: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Description: PropTypes.element,
}

export default Steps21
