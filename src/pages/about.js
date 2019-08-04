import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Background from '../components/background';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Apex from '../images/apex_team.png';
import GoingForward from '../images/going_forward.png';

import Communication from '../images/communication.svg';
import Fun from '../images/fun.svg';
import Trust from '../images/trust.svg';
import DriveChange from '../images/drive_change.svg';
import Collaboration from '../images/collaboration.svg';
import Community from '../images/community.svg';

import './about.css';

const About = () => (
  <Layout>
    <SEO title="About" description="Description of the TBE TEAM" />
    <Background />
    <Nav />
    <div className="about-wrapper">
      <div className="story-wrapper">
        <div className="our-story-text">
          <h1 className="about-title">About Us</h1>
          <div className="about-grey-text">
            <p>
              Bird Esports (short “TBE”) is an esports organization focused on
              the upbringing and introduction of players and teams into the
              amateur and professional League of Legends scene.
            </p>
            <p>
              The organization represents starting players on its debut teams,
              as well as trainees, who are under the organization’s care and
              plan to debut with a team in the future.
            </p>
            <p>
              In order to provide a healthy, efficient, and rewarding
              environment to the players, TBE cares greatly about upholding its
              identity of being an inclusive, caring, but also competitively
              focused community, which is reflected in both the players and
              staff.
            </p>
          </div>
        </div>
        <img src={Apex} alt="team" className="our-story-image" />
      </div>

      <div className="value-wrapper">
        <h1 className="value-title">
          The values that hold us true and to account
        </h1>
        <div className="container-fluid about-table">
          <Row className="col-sm-offset-0 col-lg-offset-1 col-lg-10 team-members-row about-table-row">
            <Col xs={12} sm={6} md={4} xl={4} className="about-table-head">
              <img
                src={Communication}
                alt="Transparency"
                className="about-values-icon about-values-icon-transparency"
              />
              <div className="value-subtitle">Transparency</div>
              <div className="about-table-item-text">
                As the staff of the organization, we shall have no shame in our
                shortcomings, and will try to keep you as informed as possible
                about what is going on. We are all human after all.
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} xl={4} className="about-table-head">
              <img src={Fun} alt="Fun" className="about-values-icon" />
              <div className="value-subtitle">Fun</div>
              <div className="about-table-item-text">
                Being able to enjoy yourself is an important part of being able
                to improve at a certain discipline.
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} xl={4} className="about-table-head">
              <img src={Trust} alt="Trust" className="about-values-icon" />
              <div className="value-subtitle">Trust</div>
              <div className="about-table-item-text">
                In order to truly feel comfortable in a space and with the
                people you are working with, we need to establish a foundation
                of trust. Trust must be earned, so let’s make sure we can be
                honest in our cooperation.
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} xl={4} className="about-table-head">
              <img
                src={DriveChange}
                alt="Inspiration"
                className="about-values-icon"
              />
              <div className="value-subtitle">Inspiration</div>
              <div className="about-table-item-text">
                The known can only get us as far as other people have been
                before. We are willing to step into the unknown to get even
                further.
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} xl={4} className="about-table-head">
              <img
                src={Collaboration}
                alt="Personal"
                className="about-values-icon"
              />
              <div className="value-subtitle">Personal</div>
              <div className="about-table-item-text">
                We believe in the individuality of each player and will make
                sure to address it where necessary. We will not force anyone to
                do what does not fit their style.
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} xl={4} className="about-table-head">
              <img
                src={Community}
                alt="Community"
                className="about-values-icon about-values-icon-community"
              />
              <div className="value-subtitle">Community</div>
              <div className="about-table-item-text">
                A respectful togetherness is an important part of our identity,
                and we will do our best to uphold it through all conflicts and
                hardships.
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="going-forward-wrapper">
        <img
          src={GoingForward}
          alt="goingForward"
          className="going-forward-image"
        />

        <div className="going-forward-text">
          <h1 className="about-title">Your Route</h1>
          <div className="about-grey-text">
            <p>
              <p>
                In addition to offering you a space to grow into a better
                player, we also make sure to challenge you with weekly
                activities and inhouse games, while breaking the conventions of
                how players learn the game. Our advisors and coaches will walk
                with you along your road to greatness, and help you take off
                with your new wings!
              </p>
              <p>
                If this sounds like you would fit in, why don't you cotact us
                about joining? Click the link below and leave us some
                information about you and we will be in contact soon.
              </p>
            </p>
          </div>
          <div className="about-banner-joinus">
            <Link className="about-banner-link" to="/joinus">
              JOIN US
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default About;
