import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list1.css'

const ContentList1 = (props) => {
  return (
    <div className="content-list1-container thq-section-padding">
      <div className="content-list1-max-width thq-section-max-width">
        <div className="content-list1-content thq-flex-column">
          <ul className="content-list1-ul thq-flex-column">
            <li className="list-item thq-flex-column">
              <h2 className="content-list1-heading1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="content-list1-text11">
                      Wide Range of Products
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="thq-body-small">
                {props.content1 ?? (
                  <Fragment>
                    <span className="content-list1-text18">
                      Explore our diverse selection of high-quality products
                      ranging from electronics to fashion and everything in
                      between.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="content-list1-text13">
                      Secure Checkout Process
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content2 ?? (
                  <Fragment>
                    <span className="content-list1-text12">
                      Rest assured with our secure checkout process that ensures
                      your payment information is protected at all times.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading3 ?? (
                  <Fragment>
                    <span className="content-list1-text16">
                      Fast Delivery to Your Doorstep
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="content-list1-text17">
                      Enjoy the convenience of having your purchases delivered
                      right to your doorstep in a timely manner.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading4 ?? (
                  <Fragment>
                    <span className="content-list1-text19">
                      Quality Services
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content4 ?? (
                  <Fragment>
                    <span className="content-list1-text20">
                      Experience top-notch services that cater to your needs,
                      whether it&apos;s customer support or product
                      customization.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading5 ?? (
                  <Fragment>
                    <span className="content-list1-text14">
                      User-Friendly Platform
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content5 ?? (
                  <Fragment>
                    <span className="content-list1-text10">
                      Navigate our platform with ease and find exactly what
                      you&apos;re looking for with our user-friendly interface.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
            <li className="list-item">
              <h3 className="thq-heading-3">
                {props.heading6 ?? (
                  <Fragment>
                    <span className="content-list1-text21">
                      Customer Satisfaction Guaranteed
                    </span>
                  </Fragment>
                )}
              </h3>
              <p className="thq-body-small">
                {props.content6 ?? (
                  <Fragment>
                    <span className="content-list1-text15">
                      We prioritize customer satisfaction and strive to exceed
                      your expectations with every purchase.
                    </span>
                  </Fragment>
                )}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList1.defaultProps = {
  content5: undefined,
  heading1: undefined,
  content2: undefined,
  heading2: undefined,
  heading5: undefined,
  content6: undefined,
  heading3: undefined,
  content3: undefined,
  content1: undefined,
  heading4: undefined,
  content4: undefined,
  heading6: undefined,
}

ContentList1.propTypes = {
  content5: PropTypes.element,
  heading1: PropTypes.element,
  content2: PropTypes.element,
  heading2: PropTypes.element,
  heading5: PropTypes.element,
  content6: PropTypes.element,
  heading3: PropTypes.element,
  content3: PropTypes.element,
  content1: PropTypes.element,
  heading4: PropTypes.element,
  content4: PropTypes.element,
  heading6: PropTypes.element,
}

export default ContentList1
