import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import Hero2 from '../components/hero2'
import Features9 from '../components/features9'
import Toast6 from '../components/toast6'
import Features21 from '../components/features21'
import ContentList4 from '../components/content-list4'
import Steps21 from '../components/steps21'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
        <meta property="og:title" content="Spotless Hungry Crocodile" />
      </Helmet>
      <Navbar3></Navbar3>
      <Hero2
        content1={
          <Fragment>
            <span className="home-text10">
              Aspiring Cybersecurity Student, seeking opportunity.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text11">Jack Ghafaripalangari</span>
          </Fragment>
        }
        image1Src="https://images.unsplash.com/photo-1626003573503-2e088d82c647?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxiYXNrZXRiYWxsJTIwc3RhZGl1bXxlbnwwfHx8fDE3NDQ3MTczMTF8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero2>
      <Features9
        feature1Title={
          <Fragment>
            <span className="home-text12">KQ internship application </span>
          </Fragment>
        }
        rootClassName="features9root-class-name"
        feature1Description={
          <Fragment>
            <span className="home-text13">
              I bring passion, purpose, and potential — let’s make it count.
            </span>
          </Fragment>
        }
      ></Features9>
      <Toast6
        bannerTitle={
          <Fragment>
            <span className="home-text14">I can...</span>
          </Fragment>
        }
      ></Toast6>
      <Features21
        feature1Title={
          <Fragment>
            <span className="home-text15">Develop Cybersecurity Skills </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text16">
              Understand Threats &amp; systems
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text17">
              Use professional cybersecurity tools 
            </span>
          </Fragment>
        }
        feature4Title={
          <Fragment>
            <span className="home-text18">Step into the industry</span>
          </Fragment>
        }
        rootClassName="features21root-class-name"
        feature1ImageSrc="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGN5YmVyc2VjdXJpdHl8ZW58MHx8fHwxNzQ0NzE4OTUyfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature2ImageSrc="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc0NDcxODk1Mnww&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature3ImageSrc="https://images.unsplash.com/photo-1516044734145-07ca8eef8731?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM2fHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc0NDcxODk2OXww&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature4ImageSrc="https://images.unsplash.com/photo-1732304719975-1205d9a1c113?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDYzfHxjeWJlcnNlY3VyaXR5fGVufDB8fHx8MTc0NDcxODk3Nnww&amp;ixlib=rb-4.0.3&amp;w=1500"
        feature1Description={
          <Fragment>
            <span className="home-text19">
              Self-educated with various courses and real-world techniques.
              Always keen to learn and adapt to the expectations needed
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text20">
              Had hands-on experience with portswigger academy with website
              vulnerabilities &amp; XSS vulnerability injection 
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text21">
              Experience with Nmap, Burp Suite, Maltego, Ettercap, etc. All
              tools are performed in an isolated environment with the compliance
              of the Computer Misuse Act 1990
            </span>
          </Fragment>
        }
        feature4Description={
          <Fragment>
            <span className="home-text22">
              All that is left for me to do is to get experience, and that
              starts today with this internship application
            </span>
          </Fragment>
        }
      ></Features21>
      <ContentList4
        content7={
          <Fragment>
            <span className="home-text23">
              <span>
                With a strong foundation of cybersecurity, I am incredibly eager
                to apply to your internship programme as it is a wonderful
                opportunity to gain insight on the cybersecurity industry. As
                someone who is really eager to it, I often find trouble finding
                such opportunities as this programme due to the limited
                cybersecurity sectors near me. Therefore, I want to be
                considered to this exciting internship programme as I am a
                highly motivated individual who wants to contribute and grow.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                This also aligns perfectly with my career pathway as this
                programme will help me grow an understanding of the teamwork and
                communication required of a digital-related internship, which I
                am confident I will be able to give. I also believe I will be
                the perfect candidate to this industry as an intern as I have
                tons of brilliant experiences shown above of the level of
                expertise I am able to perform
              </span>
              <br></br>
              <br></br>
              <span>
                Lastly, if there aren&apos;t any cybersecurity-related
                internships, I am more than happy to be put in a place in an IT
                field as I can adapt to new environments easily and be able to
                build a foundation of IT skills, which is required for
                cybersecurity as well. 
              </span>
            </span>
          </Fragment>
        }
        heading7={
          <Fragment>
            <span className="home-text31">Why I want to be considered</span>
          </Fragment>
        }
        rootClassName="content-list4root-class-name"
      ></ContentList4>
      <Steps21
        step1Title={
          <Fragment>
            <span className="home-text32">Kickstart my career</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text33">Return Offer Potential</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text34">Industry Connections</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text35">Fresh Perspective</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text36">
              Taking the first step into cybersecurity through this internship.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text37">
              Proving my value in hopes of a return offer from the company.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text38">
              Build connections with professionals and peers.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text39">
              Walk away with a deeper understanding of the industry with my
              place within it.
            </span>
          </Fragment>
        }
      ></Steps21>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text40">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text41">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text42">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text43">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text44">FAQs</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text45">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text46">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text47">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
