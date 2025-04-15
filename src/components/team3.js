import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './team3.css'

const Team3 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="team3-max-width thq-section-max-width">
        <div className="team3-section-title">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="team3-text34">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec purus feugiat, vestibulum ligula sit amet, posuere urna.
                </span>
              </Fragment>
            )}
          </span>
          <div className="team3-content1">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="team3-text43">Meet Our Team</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large team3-text12">
              {props.content2 ?? (
                <Fragment>
                  <span className="team3-text28">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="team3-content2">
          <div className="team3-content3">
            <div className="team3-row1">
              <div className="team3-card1">
                <img
                  alt={props.member1Alt}
                  src={props.member1Src}
                  className="thq-img-ratio-1-1 team3-member-image1"
                />
                <div className="team3-content4">
                  <div className="team3-title1">
                    <span className="team3-text13 thq-body-small">
                      {props.member1 ?? (
                        <Fragment>
                          <span className="team3-text31">John Doe</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.member1Job ?? (
                        <Fragment>
                          <span className="team3-text33">CEO</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team3-text15 thq-body-small">
                    {props.member1Content ?? (
                      <Fragment>
                        <span className="team3-text35">
                          John is a visionary leader with a passion for
                          innovation and growth.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team3-social-icons1">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team3-card2">
                <img
                  alt={props.member2Alt}
                  src={props.member2Src}
                  className="thq-img-ratio-1-1 team3-member-image2"
                />
                <div className="team3-content5">
                  <div className="team3-title2">
                    <span className="team3-text16 thq-body-small">
                      {props.member2 ?? (
                        <Fragment>
                          <span className="team3-text45">Jane Smith</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.member2Job ?? (
                        <Fragment>
                          <span className="team3-text39">CTO</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team3-text18 thq-body-small">
                    {props.member2Content ?? (
                      <Fragment>
                        <span className="team3-text37">
                          Jane is a tech enthusiast with expertise in
                          cutting-edge technologies.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team3-social-icons2">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="team3-row2">
              <div className="team3-card3">
                <img
                  alt={props.member3Alt}
                  src={props.member3Src}
                  className="thq-img-ratio-1-1 team3-member-image3"
                />
                <div className="team3-content6">
                  <div className="team3-title3">
                    <span className="team3-text19 thq-body-small">
                      {props.member3 ?? (
                        <Fragment>
                          <span className="team3-text36">Alice Johnson</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.member3Job ?? (
                        <Fragment>
                          <span className="team3-text42">
                            Marketing Director
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team3-text21 thq-body-small">
                    {props.member3Content ?? (
                      <Fragment>
                        <span className="team3-text41">
                          Alice is a creative marketer with a knack for
                          storytelling and brand building.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team3-social-icons3">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
              <div className="team3-card4">
                <img
                  alt={props.member4Alt}
                  src={props.member4Src}
                  className="thq-img-ratio-1-1 team3-member-image4"
                />
                <div className="team3-content7">
                  <div className="team3-title4">
                    <span className="team3-text22 thq-body-small">
                      {props.member4 ?? (
                        <Fragment>
                          <span className="team3-text40">Mike Brown</span>
                        </Fragment>
                      )}
                    </span>
                    <span className="thq-body-small">
                      {props.member4Job ?? (
                        <Fragment>
                          <span className="team3-text38">
                            Head of Operations
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <span className="team3-text24 thq-body-small">
                    {props.member4Content ?? (
                      <Fragment>
                        <span className="team3-text32">
                          Mike is a detail-oriented professional with a focus on
                          efficiency and quality.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="team3-social-icons4">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="thq-icon-small"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="thq-icon-small"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="team3-content8">
            <div className="team3-content9">
              <h2 className="thq-heading-2">
                {props.heading2 ?? (
                  <Fragment>
                    <span className="team3-text30">We’re hiring!</span>
                  </Fragment>
                )}
              </h2>
              <span className="team3-text26 thq-body-small">
                {props.content3 ?? (
                  <Fragment>
                    <span className="team3-text29">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <button className="team3-button thq-button-filled">
              <span className="team3-text27 thq-body-small">
                {props.actionContent ?? (
                  <Fragment>
                    <span className="team3-text44">Open positions</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Team3.defaultProps = {
  content2: undefined,
  content3: undefined,
  member3Src:
    'https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=600',
  heading2: undefined,
  member1: undefined,
  member1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=800',
  member4Content: undefined,
  member4Src:
    'https://images.unsplash.com/photo-1534180477871-5d6cc81f3920?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=600',
  member2Alt: 'Image of Jane Smith',
  member1Job: undefined,
  member1Alt: 'Image of John Doe',
  content1: undefined,
  member1Content: undefined,
  member3: undefined,
  member4Alt: 'Image of Mike Brown',
  member2Content: undefined,
  member3Alt: 'Image of Alice Johnson',
  member2Src:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=800',
  member4Job: undefined,
  member2Job: undefined,
  member4: undefined,
  member3Content: undefined,
  member3Job: undefined,
  heading1: undefined,
  actionContent: undefined,
  member2: undefined,
}

Team3.propTypes = {
  content2: PropTypes.element,
  content3: PropTypes.element,
  member3Src: PropTypes.string,
  heading2: PropTypes.element,
  member1: PropTypes.element,
  member1Src: PropTypes.string,
  member4Content: PropTypes.element,
  member4Src: PropTypes.string,
  member2Alt: PropTypes.string,
  member1Job: PropTypes.element,
  member1Alt: PropTypes.string,
  content1: PropTypes.element,
  member1Content: PropTypes.element,
  member3: PropTypes.element,
  member4Alt: PropTypes.string,
  member2Content: PropTypes.element,
  member3Alt: PropTypes.string,
  member2Src: PropTypes.string,
  member4Job: PropTypes.element,
  member2Job: PropTypes.element,
  member4: PropTypes.element,
  member3Content: PropTypes.element,
  member3Job: PropTypes.element,
  heading1: PropTypes.element,
  actionContent: PropTypes.element,
  member2: PropTypes.element,
}

export default Team3
