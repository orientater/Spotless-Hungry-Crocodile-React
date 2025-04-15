import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './toast6.css'

const Toast6 = (props) => {
  return (
    <div className="toast6-container">
      <div className="toast6-header">
        <h2 className="toast6-title thq-heading-2">
          {props.bannerTitle ?? (
            <Fragment>
              <span className="toast6-text">I can...</span>
            </Fragment>
          )}
        </h2>
      </div>
    </div>
  )
}

Toast6.defaultProps = {
  bannerTitle: undefined,
}

Toast6.propTypes = {
  bannerTitle: PropTypes.element,
}

export default Toast6
