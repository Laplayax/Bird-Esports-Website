import React, { Component } from 'react';
import { graphql, navigate, StaticQuery, Link } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../components/seo';

import twitter from '../images/Twitter_grey.svg';
import youtube from '../images/Youtube_grey.svg';
import twitch from '../images/Twitch_grey.svg';
import BG from '../images/bg.png';
import './team.css';

class Team extends Component {
  render() {
    return (
      <div>
        <Layout>
          <SEO title="Team" />
          <img className="body_bg_img" src={BG} />
          <Nav />
          <StaticQuery
            query={graphql`
              query TeamQuery {
                allContentfulMember(
                  limit: 5
                  sort: { fields: [createdAt], order: DESC }
                ) {
                  edges {
                    node {
                      memberName
                      memberInGameName
                      role
                      memberFoto {
                        fluid(maxWidth: 1200, quality: 85) {
                          src
                          ...GatsbyContentfulFluid
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={data => (
              <>
                <div className="team-announcement-container">
                  <p>
                    We are still working on the debut of our first official
                    team. Stay tuned!
                  </p>
                  <p>
                    If you could see yourself being listed in this tab, why
                    don't you contact us about joining? Click the link below and
                    we will be in contact soon.
                  </p>
                  <Link className="about-banner-link" to="/joinus">
                    JOIN US
                  </Link>
                </div>
                <div className="container-fluid team-member-container">
                  <Row className="col-sm-offset-0 col-lg-offset-1 col-lg-10 team-members-row">
                    {data.allContentfulMember.edges.map(edge => (
                      <Col sm={6} md={4} xl={3}>
                        <div className="team-member-card">
                          <div
                            className="team-member-headshot"
                            style={{
                              backgroundImage: `url(${edge.node.memberFoto.fluid.src})`
                            }}
                          ></div>
                          <div className="team-member-inGameName">
                            {edge.node.memberInGameName}
                          </div>
                          <div className="team-member-name">
                            {edge.node.memberName}
                          </div>
                          <div className="team-member-social-wrap">
                            <a href="">
                              <img
                                className="team-member-social"
                                src={twitch}
                                alt="Twitch"
                              />
                            </a>
                            <a href="">
                              <img
                                className="team-member-social"
                                src={twitter}
                                alt="Twitter"
                              />
                            </a>
                            <a href="">
                              <img
                                className="team-member-social-youtube"
                                src={youtube}
                                alt="Youtube"
                              />
                            </a>
                          </div>
                          <div className="team-member-position">
                            {edge.node.role}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </>
            )}
          />
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default Team;
