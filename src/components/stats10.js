import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats10.css'

const Stats10 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats10-max-width thq-section-max-width">
        <div className="stats10-container2">
          <h2 className="stats10-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats10-text23">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <span className="stats10-content thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats10-text19">Prop Content</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="stats10-container3 thq-grid-3">
          <div className="stats10-container4 thq-card">
            <h2 className="thq-heading-2 stats10-text10">
              {props.stat1 ?? (
                <Fragment>
                  <span className="stats10-text25">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.stat1Description ?? (
                <Fragment>
                  <span className="stats10-text20">Prop Content</span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="stats10-container5 thq-card">
            <h2 className="thq-heading-2 stats10-text12">
              {props.stat2 ?? (
                <Fragment>
                  <span className="stats10-text26">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <span className="stats10-text13 thq-body-small">
              {props.stat2ShortDescription ?? (
                <Fragment>
                  <span className="stats10-text24">Active users</span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-large">
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats10-text18">Prop Content</span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="stats10-container6 thq-card">
            <h2 className="thq-heading-2 stats10-text15">
              {props.stat3 ?? (
                <Fragment>
                  <span className="stats10-text21">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <span className="stats10-text16 thq-body-small">
              {props.stat3ShortDescription ?? (
                <Fragment>
                  <span className="stats10-text27">Customer satisfaction</span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-large">
              {props.stat3Description ?? (
                <Fragment>
                  <span className="stats10-text22">Prop Content</span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="stats10-image thq-img-ratio-16-9"
      />
    </div>
  )
}

Stats10.defaultProps = {
  stat2Description: undefined,
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXRpc3RpY3N8ZW58MHx8fHwxNzE2NTM2NzE1fDA&ixlib=rb-4.0.3&w=1400',
  stat1Description: undefined,
  image1Alt: 'Team collaboration',
  stat3: undefined,
  stat3Description: undefined,
  heading1: undefined,
  stat2ShortDescription: undefined,
  stat1: undefined,
  stat2: undefined,
  stat3ShortDescription: undefined,
}

Stats10.propTypes = {
  stat2Description: PropTypes.element,
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  stat1Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  heading1: PropTypes.element,
  stat2ShortDescription: PropTypes.element,
  stat1: PropTypes.element,
  stat2: PropTypes.element,
  stat3ShortDescription: PropTypes.element,
}

export default Stats10
