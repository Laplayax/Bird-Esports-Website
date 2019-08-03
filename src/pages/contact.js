import React, { Component } from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import BG from '../images/bg.png';
import Footer from '../components/footer';
import SEO from '../components/seo';
import { Link } from 'gatsby';

import './contact.css';

class Contact extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Contact" description="Contact TBE" />
        <img className="body_bg_img" src={BG} />
        <Nav />
        <div className="contact-us-wrap">
          <div className="contact-us-header">Contact Us</div>
          <div className="contact-text">
            If you have a question of any kind, shoot us an email at{' '}
            <a className="contact-email-link" href="mailto:hello@bird.gg">
              hello@bird.gg
            </a>{' '}
            or check out the{' '}
            <Link className="contact-email-link" to="/faq">
              Help & FAQs section
            </Link>{' '}
            - the answer might be there already!
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }
}

export default Contact;
