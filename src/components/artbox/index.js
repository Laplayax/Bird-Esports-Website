import React from 'react';
import { graphql, navigate, StaticQuery } from 'gatsby';
import './artbox.css';

export default () => (
  <StaticQuery
    query={graphql`
      query HomeQuery {
        allContentfulArticle(
          limit: 8
          sort: { fields: [createdAt], order: DESC }
          filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
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
      <div className="artbox_box">
        <div className="artbox_container">
          {data.allContentfulArticle.edges.map(edge => (
            <div className="artbox-cut">
              <div
                key={edge.node.id}
                className="artbox_item"
                style={{
                  backgroundImage: `url(${edge.node.featuredImage.fluid.src})`
                }}
                onClick={() => navigate(`/articles/${edge.node.slug}`)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    )}
  />
);

{
  /* <div
key={edge.node.id}
className="artbox_item"
style={{
  backgroundImage: `url(${edge.node.featuredImage.fluid.src})`
}}
onClick={() => navigate(`/articles/${edge.node.slug}`)}
></div> */
}
