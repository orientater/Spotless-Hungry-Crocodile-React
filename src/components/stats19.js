import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats19.css'

const Stats19 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="stats19-max-width thq-section-max-width">
        <div className="stats19-container2">
          <h2 className="stats19-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats19-text19">Prop Content</span>
              </Fragment>
            )}
          </h2>
          <span className="stats19-content thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats19-text22">Prop Content</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="stats19-container3 thq-grid-3">
          <div className="stats19-container4">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
            </svg>
            <h2 className="thq-heading-2 stats19-text10">
              {props.stat1 ?? (
                <Fragment>
                  <span className="stats19-text18">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <span className="stats19-text11 thq-body-small">
              {props.stat1Description ?? (
                <Fragment>
                  <span className="stats19-text17">Prop Content</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats19-container5">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
            </svg>
            <h2 className="thq-heading-2 stats19-text12">
              {props.stat2 ?? (
                <Fragment>
                  <span className="stats19-text23">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <span className="stats19-text13 thq-body-small">
              {props.stat2Description ?? (
                <Fragment>
                  <span className="stats19-text16">Prop Content</span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="stats19-container6">
            <svg viewBox="0 0 1024 1024" className="thq-icon-small">
              <path d="M928 128h-832c-52.8 0-96 43.2-96 96v576c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-576c0-52.8-43.2-96-96-96zM96 192h832c17.346 0 32 14.654 32 32v96h-896v-96c0-17.346 14.654-32 32-32zM928 832h-832c-17.346 0-32-14.654-32-32v-288h896v288c0 17.346-14.654 32-32 32zM128 640h64v128h-64zM256 640h64v128h-64zM384 640h64v128h-64z"></path>
            </svg>
            <h2 className="thq-heading-2 stats19-text14">
              {props.stat3 ?? (
                <Fragment>
                  <span className="stats19-text20">Prop Content</span>
                </Fragment>
              )}
            </h2>
            <span className="stats19-text15 thq-body-small">
              {props.stat3Description ?? (
                <Fragment>
                  <span className="stats19-text21">Prop Content</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats19.defaultProps = {
  stat2Description: undefined,
  stat1Description: undefined,
  stat1: undefined,
  heading1: undefined,
  stat3: undefined,
  stat3Description: undefined,
  content1: undefined,
  stat2: undefined,
}

Stats19.propTypes = {
  stat2Description: PropTypes.element,
  stat1Description: PropTypes.element,
  stat1: PropTypes.element,
  heading1: PropTypes.element,
  stat3: PropTypes.element,
  stat3Description: PropTypes.element,
  content1: PropTypes.element,
  stat2: PropTypes.element,
}

export default Stats19
