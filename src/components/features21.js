import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features21.css'

const Features21 = (props) => {
  return (
    <div
      className={`features21-layout349 thq-section-padding ${props.rootClassName} `}
    >
      <div className="features21-max-width thq-grid-auto-300 thq-section-max-width">
        <div className="features21-container1 thq-flex-column thq-card">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="features21-image1 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature1Title ?? (
              <Fragment>
                <span className="features21-text24">
                  Wide Range of Products
                </span>
              </Fragment>
            )}
          </h2>
          <span className="features21-text11 thq-body-small">
            {props.feature1Description ?? (
              <Fragment>
                <span className="features21-text21">
                  Explore a diverse selection of high-quality products available
                  for online shopping.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features21-container2 thq-flex-column thq-card">
          <img
            alt={props.feature2ImageAlt}
            src={props.feature2ImageSrc}
            className="features21-image2 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature2Title ?? (
              <Fragment>
                <span className="features21-text25">
                  Secure Checkout Process
                </span>
              </Fragment>
            )}
          </h2>
          <span className="features21-text13 thq-body-small">
            {props.feature2Description ?? (
              <Fragment>
                <span className="features21-text18">
                  Enjoy a safe and secure checkout process to complete your
                  purchases with peace of mind.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features21-container3 thq-flex-column thq-card">
          <img
            alt={props.feature3ImageAlt}
            src={props.feature3ImageSrc}
            className="features21-image3 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature3Title ?? (
              <Fragment>
                <span className="features21-text20">Doorstep Delivery</span>
              </Fragment>
            )}
          </h2>
          <span className="features21-text15 thq-body-small">
            {props.feature3Description ?? (
              <Fragment>
                <span className="features21-text22">
                  Get your orders conveniently delivered to your doorstep for a
                  hassle-free shopping experience.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features21-container4 thq-flex-column thq-card">
          <img
            alt={props.feature4ImageAlt}
            src={props.feature4ImageSrc}
            className="features21-image4 thq-img-ratio-1-1 thq-img-round"
          />
          <h2 className="thq-heading-2">
            {props.feature4Title ?? (
              <Fragment>
                <span className="features21-text23">
                  Terms and Conditions Information
                </span>
              </Fragment>
            )}
          </h2>
          <span className="features21-text17 thq-body-small">
            {props.feature4Description ?? (
              <Fragment>
                <span className="features21-text19">
                  Access detailed information on terms and conditions to ensure
                  transparency and clarity in your transactions.
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

Features21.defaultProps = {
  feature2Description: undefined,
  feature4ImageSrc:
    'https://images.unsplash.com/photo-1561478662-1468b931b7b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxODIzMXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1547887537-6158d64c35b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxODIzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1631010231130-5c7828d9a3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxODIzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImageAlt: 'Secure Checkout Process Image',
  feature3ImageAlt: 'Doorstep Delivery Image',
  feature1ImageAlt: 'Wide Range of Products Image',
  feature4Description: undefined,
  feature3Title: undefined,
  feature1Description: undefined,
  feature3Description: undefined,
  feature4ImageAlt: 'Terms and Conditions Information Image',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDcxODIzMHw&ixlib=rb-4.0.3&q=80&w=1080',
  rootClassName: '',
  feature4Title: undefined,
  feature1Title: undefined,
  feature2Title: undefined,
}

Features21.propTypes = {
  feature2Description: PropTypes.element,
  feature4ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4Description: PropTypes.element,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  feature4Title: PropTypes.element,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
}

export default Features21
