import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Nav from '../components/nav';
import SEO from '../components/seo';
import Background from '../components/background';
import Footer from '../components/footer';
import './articles.css';

const ArticlesTemplate = props => {
  return (
    <Layout>
      <SEO
        title={props.data.contentfulArticle.seoTitle}
        description={props.data.contentfulArticle.seoDescription}
        keywords={props.data.contentfulArticle.seoKeywords}
      />
      <Background />
      <Nav />
      <div className="blog__header">
        <div
          className="blog__hero"
          style={{
            backgroundImage: `url(${props.data.contentfulArticle.featuredImage.fluid.src})`
          }}
        ></div>
      </div>
      <div className="blog__wrapper">
        <div className="blog__content">
          <div
            dangerouslySetInnerHTML={{
              __html: `${props.data.contentfulArticle.content.childMarkdownRemark.html}`
            }}
          />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default ArticlesTemplate;

export const query = graphql`
  query ArticlesTemplate($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      id
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
      seoTitle
      seoDescription
      seoKeywords
      seoImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
      featuredImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
  }
`;
