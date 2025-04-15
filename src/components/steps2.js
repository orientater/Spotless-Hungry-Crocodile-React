import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div
      className={`steps2-container1 thq-section-padding ${props.rootClassName} `}
    >
      <h2 className="steps2-text10 thq-heading-2">{props.text}</h2>
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-section-header">
            <p className="steps2-text11 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions"></div>
          </div>
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2 className="thq-heading-2">
                {props.step1Title ?? (
                  <Fragment>
                    <span className="steps2-text24">
                      Browse Products and Services
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text13 thq-body-small">
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text31">
                      Explore our wide range of high-quality products and
                      services to find exactly what you need.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2 className="thq-heading-2">
                {props.step2Title ?? (
                  <Fragment>
                    <span className="steps2-text26">Add to Cart</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text16 thq-body-small">
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text25">
                      Select the items or services you want and add them to your
                      cart for a seamless shopping experience.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text17 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2 className="thq-heading-2">
                {props.step3Title ?? (
                  <Fragment>
                    <span className="steps2-text27">Checkout</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text19 thq-body-small">
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text28">
                      Proceed to checkout, enter your details, and choose your
                      preferred payment method for a secure transaction.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text20 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2 className="thq-heading-2">
                {props.step4Title ?? (
                  <Fragment>
                    <span className="steps2-text29">Enjoy Your Purchase</span>
                  </Fragment>
                )}
              </h2>
              <span className="steps2-text22 thq-body-small">
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text30">
                      Once your order is confirmed, sit back and relax while we
                      prepare your products or services for delivery.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text23 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step1Title: undefined,
  step2Description: undefined,
  step2Title: undefined,
  step3Title: undefined,
  step3Description: undefined,
  rootClassName: '',
  step4Title: undefined,
  step4Description: undefined,
  step1Description: undefined,
  text: 'Discover the Power of Our Products',
}

Steps2.propTypes = {
  step1Title: PropTypes.element,
  step2Description: PropTypes.element,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step3Description: PropTypes.element,
  rootClassName: PropTypes.string,
  step4Title: PropTypes.element,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  text: PropTypes.string,
}

export default Steps2
