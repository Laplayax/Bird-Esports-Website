import React, { Component } from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';
import { Row, Col } from 'react-bootstrap';

import './articlesList.css';

class ArticlesList extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ArticlesQuery {
            allContentfulArticle(
              sort: { fields: [createdAt], order: DESC }
              filter: { node_locale: { eq: "en-US" } }
            ) {
              edges {
                node {
                  id
                  slug
                  title
                  featuredImage {
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
          <div className="articles-cutoff-container">
            <div className="container-fluid articles-container">
              <Row className="col-sm-offset-0 col-lg-offset-1 col-lg-10 articles-row">
                {data.allContentfulArticle.edges.map(edge => (
                  <Col
                    sm={6}
                    md={4}
                    xl={4}
                    onClick={() => navigate(`/articles/${edge.node.slug}`)}
                    className="articles-col"
                  >
                    <div className="articles-card">
                      <div
                        className="articles-image"
                        style={{
                          backgroundImage: `url(${edge.node.featuredImage.fluid.src})`
                        }}
                      ></div>
                      <div className="articles-title">{edge.node.title}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        )}
      />
    );
  }
}

export default ArticlesList;
