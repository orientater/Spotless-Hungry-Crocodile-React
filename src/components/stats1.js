import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats1.css'

const Stats1 = (props) => {
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="stats1-max-width thq-section-max-width">
        <div className="stats1-container2 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats1-text22">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats1-text27">Why Choose Us?</span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats1-text31">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats1-container3">
            <div className="stats1-container4">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats1-text21">80%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats1-text29">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container5">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats1-text26">90%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats1-text25">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats1-container6">
            <div className="stats1-container7">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats1-text24">95%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats1-text30">
                      consectetur adipiscing elit,
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats1-container8">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats1-text28">100%</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats1-text23">
                      consectetur adipiscing.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="stats1-container9">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats1-image"
          />
        </div>
      </div>
    </div>
  )
}

Stats1.defaultProps = {
  stat1: undefined,
  content1: undefined,
  stat4Description: undefined,
  image1Alt: 'Team collaboration',
  stat3: undefined,
  stat2Description: undefined,
  stat2: undefined,
  heading1: undefined,
  stat4: undefined,
  stat1Description: undefined,
  stat3Description: undefined,
  rootClassName: '',
  content2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXRpc3RpY3N8ZW58MHx8fHwxNzE2NTM2NzE1fDA&ixlib=rb-4.0.3&w=1400',
}

Stats1.propTypes = {
  stat1: PropTypes.element,
  content1: PropTypes.element,
  stat4Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat2Description: PropTypes.element,
  stat2: PropTypes.element,
  heading1: PropTypes.element,
  stat4: PropTypes.element,
  stat1Description: PropTypes.element,
  stat3Description: PropTypes.element,
  rootClassName: PropTypes.string,
  content2: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Stats1
