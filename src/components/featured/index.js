import React from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';
import './featured.css';

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allContentfulArticle(
          limit: 1
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, featured: { eq: true } }
        ) {
          edges {
            node {
              id
              slug
              title
              shortDescription
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
      <header className="featured_header_wrap">
        {data.allContentfulArticle.edges.map(edge => (
          <div key={edge.node.id} className="header__section">
            <div
              className="header__hero"
              onClick={() => navigate(`/articles/${edge.node.slug}`)}
              style={{
                backgroundImage: `url(${edge.node.featuredImage.fluid.src})`
              }}
            />
            <div className="header__content">
              <div className="header__info">
                <p className="header__subtitle">{edge.node.shortDescription}</p>
                <button
                  onClick={() => navigate(`/articles/${edge.node.slug}`)}
                  className="articles-header-btn"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </header>
    )}
  />
);
