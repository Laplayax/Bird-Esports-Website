import React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import Footer from '../components/footer';
import SEO from '../components/seo';
import Background from '../components/background';

import Join from '../images/join-image.png';
import Arrow from '../images/right-arrow.svg';

import './joinus.css';

const JoinUs = () => (
  <Layout>
    <SEO
      title="Join Us"
      description="Information about joining Bird Esports."
    />
    <Background />
    <Nav />
    <div className="contact-wrap">
      <div className="contact__form">
        <div className="join-us-text-wrap">
          <h1 className="join-us-title">So, you want to join us?</h1>
          <div className="join-us-grey-text ">
            Did you realize that flight is the final form of freedom? Yes?
            Great! Then you are ready to join us! Whether you aspire to become a
            starter on TBE, or want to hone your skills as a coach, are
            interested in writing articles about League of Legends, or want to
            contribute by leading trainees as an advisor or executive staff
            member, we welcome you all to apply.{' '}
            <p>
              The initial application is very simple. Just fill out your name
              and contact information, and then tell us a little bit about
              yourself, your plans with TBE, and about whatever else you deem
              necessary information. Don’t be afraid to write too much, we love
              reading about you, and will get into contact as soon as we can!{' '}
            </p>
          </div>
        </div>

        <img src={Join} alt="join us image" className="join-us-image" />

        <div className="inner">
          <form
            method="post"
            name="contact"
            action="/sent"
            data-netlify="true"
            netlify-honeypot="bot"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field__hidden">
              <label>Don't fill this out, human</label>
              <input name="bot" />
            </div>
            <div className="field">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="field">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="field">
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="submit-wrap">
              <button className="join-us-submit">
                Send
                <img src={Arrow} alt="" className="join-us-arrow" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default JoinUs;
