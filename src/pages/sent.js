import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Background from '../components/background';

import './sent.css';

const Sent = () => (
  <Layout>
    <SEO title="Sent" description="Contact TBE" />
    <Background />
    <Nav />
    <div className="contact__header"></div>
    <div className="thanks-thank-you-text">
      Sent! We will be in contact soon.
    </div>
    <Footer />
  </Layout>
);

export default Sent;
