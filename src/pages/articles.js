import React, { Component } from 'react';
import SEO from '../components/seo';
import Featured from '../components/featured';
import ArticlesList from '../components/articles';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Background from '../components/background';

import './articles.css';

class Articles extends Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Articles"
          description="Here we regularly publish articles for your reading pleasure."
        />
        <Background />
        <Nav />
        <Featured />
        <ArticlesList />
        <Footer />
      </Layout>
    );
  }
}

export default Articles;
