import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features23.css'

const Features23 = (props) => {
  return (
    <div className="features23-layout349 thq-section-padding">
      <div className="features23-max-width thq-section-max-width">
        <div className="features23-container1">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="features23-text36">Discover</span>
              </Fragment>
            )}
          </h2>
          <span className="features23-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="features23-text28">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </span>
              </Fragment>
            )}
          </span>
          <button className="thq-button-filled features23-button">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="features23-text24">Main action</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
        <div className="thq-grid-3">
          <div className="features23-container3 thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features23-image1 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features23-text27">
                    Streamlined User Experience
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text13 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features23-text25">
                    Our platform offers a seamless and intuitive user experience
                    for all users.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container4 thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features23-image2 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features23-text30">Advanced Analytics</span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text15 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features23-text26">
                    Access in-depth analytics and insights to make informed
                    decisions.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container5 thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features23-image3 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features23-text32">
                    Customizable Templates
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text17 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features23-text35">
                    Choose from a variety of customizable templates to suit your
                    needs.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container6 thq-card">
            <img
              alt={props.feature4ImageAlt}
              src={props.feature4ImageSrc}
              className="features23-image4 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature4Title ?? (
                <Fragment>
                  <span className="features23-text38">
                    Secure Data Encryption
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text19 thq-body-small">
              {props.feature4Description ?? (
                <Fragment>
                  <span className="features23-text34">
                    Rest assured that your data is protected with
                    state-of-the-art encryption.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container7 thq-card">
            <img
              alt={props.feature5ImageAlt}
              src={props.feature5ImageSrc}
              className="features23-image5 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature5Title ?? (
                <Fragment>
                  <span className="features23-text37">
                    24/7 Customer Support
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text21 thq-body-small">
              {props.feature5Description ?? (
                <Fragment>
                  <span className="features23-text31">
                    Get round-the-clock support from our dedicated customer
                    service team.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features23-container8 thq-card">
            <img
              alt={props.feature6ImageAlt}
              src={props.feature6ImageSrc}
              className="features23-image6 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature6Title ?? (
                <Fragment>
                  <span className="features23-text33">
                    Mobile Responsive Design
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features23-text23 thq-body-small">
              {props.feature6Description ?? (
                <Fragment>
                  <span className="features23-text29">
                    Experience our platform seamlessly on any device with mobile
                    responsive design.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features23.defaultProps = {
  feature2ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  action1: undefined,
  feature1ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature1Description: undefined,
  feature2Description: undefined,
  feature1Title: undefined,
  content1: undefined,
  feature5ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature2ImageAlt: 'Advanced Analytics Image',
  feature4ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature6Description: undefined,
  feature4ImageAlt: 'Secure Data Encryption Image',
  feature2Title: undefined,
  feature5Description: undefined,
  feature3ImageAlt: 'Customizable Templates Image',
  feature3Title: undefined,
  feature6Title: undefined,
  feature6ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  feature1ImageAlt: 'Streamlined User Experience Image',
  feature4Description: undefined,
  feature5ImageAlt: '24/7 Customer Support Image',
  feature6ImageAlt: 'Mobile Responsive Design Image',
  feature3Description: undefined,
  heading1: undefined,
  feature5Title: undefined,
  feature4Title: undefined,
  feature3ImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
}

Features23.propTypes = {
  feature2ImageSrc: PropTypes.string,
  action1: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  content1: PropTypes.element,
  feature5ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature6Description: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature2Title: PropTypes.element,
  feature5Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature6Title: PropTypes.element,
  feature6ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature4Description: PropTypes.element,
  feature5ImageAlt: PropTypes.string,
  feature6ImageAlt: PropTypes.string,
  feature3Description: PropTypes.element,
  heading1: PropTypes.element,
  feature5Title: PropTypes.element,
  feature4Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
}

export default Features23
