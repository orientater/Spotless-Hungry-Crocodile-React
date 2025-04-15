import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features9.css'

const Features9 = (props) => {
  return (
    <div
      className={`features9-layout186 thq-section-padding ${props.rootClassName} `}
    >
      <div className="thq-flex-column thq-section-max-width">
        <h2 className="features9-text1 thq-heading-2">
          {props.feature1Title ?? (
            <Fragment>
              <span className="features9-text4">Wide Range of Products</span>
            </Fragment>
          )}
        </h2>
        <p className="features9-text2 thq-body-large">
          {props.feature1Description ?? (
            <Fragment>
              <span className="features9-text3">
                Explore our diverse selection of high-quality products to meet
                your needs.
              </span>
            </Fragment>
          )}
        </p>
      </div>
    </div>
  )
}

Features9.defaultProps = {
  feature1Description: undefined,
  rootClassName: '',
  feature1Title: undefined,
}

Features9.propTypes = {
  feature1Description: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1Title: PropTypes.element,
}

export default Features9
