import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Background from '../components/background';

import './404.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Background />
    <Nav />
    <div className="not-found-wrap">
      <h1 className="not-found">404 NOT FOUND</h1>
      <p>You just hit a route that does not exist...</p>
    </div>
    <Footer />
  </Layout>
);

export default NotFoundPage;
