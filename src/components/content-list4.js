import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div
      className={`content-list4-container thq-section-padding ${props.rootClassName} `}
    >
      <div className="content-list4-max-width thq-flex-column thq-section-max-width">
        <div className="content-list4-content1 thq-flex-column">
          <ul className="content-list4-ul1 thq-flex-column">
            <li className="content-list4-li1 list-item thq-flex-column">
              <h2 className="content-list4-heading7 thq-heading-2">
                {props.heading7 ?? (
                  <Fragment>
                    <span className="content-list4-text1">
                      Why I want to be considered
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list4-content7 thq-body-small">
                {props.content7 ?? (
                  <Fragment>
                    <span className="content-list4-text2">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list4-ul2 thq-flex-column">
                <li className="list-item"></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content2 thq-flex-column">
          <ul className="content-list4-ul3 thq-flex-column">
            <li className="content-list4-li3 list-item thq-flex-column"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList4.defaultProps = {
  heading7: undefined,
  rootClassName: '',
  content7: undefined,
}

ContentList4.propTypes = {
  heading7: PropTypes.element,
  rootClassName: PropTypes.string,
  content7: PropTypes.element,
}

export default ContentList4
