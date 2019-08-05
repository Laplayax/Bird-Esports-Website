import React from 'react';
import Nav from '../components/nav';
import Footer from '../components/footer/index.js';
import Calendar from '../components/calendar/index.js';
import Banner from '../components/banner/index.js';
import Artbox from '../components/artbox/index.js';
import Social from '../components/social/index.js';
import Background from '../components/background';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO description="Homepage of TBE" />
    <Background />
    <Nav />
    <Calendar />
    <Banner />
    <Artbox />
    <Social />
    <Footer />
  </Layout>
);

export default IndexPage;
