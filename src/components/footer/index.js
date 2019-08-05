import React, { Component } from 'react';
import { Link } from 'gatsby';

import logo from '../../images/logo.svg';
import twitter from '../../images/Twitter.svg';
import youtube from '../../images/Youtube.svg';
import twitch from '../../images/Twitch.svg';

import './footer.css';

class Footer extends Component {
  render() {
    return (
      <>
        <div id="footer_box">
          <table className="footer_table">
            <tbody>
              <tr className="footer_header">
                <th className="footer_logo_box footer_table_head">
                  <img className="footer_logo" src={logo} alt="TBE Logo" />
                </th>
                <th className="footer_team_box footer_table_head">Team</th>
                <th className="footer_table_head">Further Information</th>
                <th className="footer_table_head">Follow Us</th>
              </tr>
              <tr className="footer_regular">
                <th className="footer_logo_box">©2019</th>
                <th className="footer_team_box">
                  <Link className="footer-item-link" to="/about">
                    About Us
                  </Link>
                  <br />
                  <br />
                  <Link className="footer-item-link" to="/contact">
                    Contact
                  </Link>
                </th>
                <th>
                  <Link className="footer-item-link" to="/privacy">
                    Privacy Policy
                  </Link>
                  <br />
                  <br />
                  <Link className="footer-item-link" to="/faq">
                    Help & FAQ
                  </Link>
                </th>
                <th>
                  <a
                    href="https://twitter.com/tbelol"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer_social"
                      src={twitter}
                      alt="Twitter"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCrvUBaBwWrsdLmY06qtj1Wg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="footer_social"
                      src={youtube}
                      alt="Youtube"
                    />
                  </a>
                  <a
                    href="https://www.twitch.tv/birdesports"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="footer_social" src={twitch} alt="Twitch" />
                  </a>
                </th>
              </tr>
            </tbody>
          </table>

          <div className="footer-mobile">
            <img className="footer_logo-mobile" src={logo} alt="TBE Logo" />
            <div className="footer-copyright-mobile">Bird Esports ©2019</div>
            <div className="footer-mobile-link-wrap">
              <Link className="footer-item-link-mobile" to="/about">
                About
              </Link>
              <Link className="footer-item-link-mobile" to="/contact">
                Contact
              </Link>
              <Link className="footer-item-link-mobile" to="/privacy">
                Privacy
              </Link>
              <Link className="footer-item-link-mobile" to="/faq">
                FAQ
              </Link>
            </div>
            <div className="footer-mobile-logo-wrap">
              <a
                href="https://twitter.com/tbelol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer_social-mobile"
                  src={twitter}
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCrvUBaBwWrsdLmY06qtj1Wg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer_social-mobile"
                  src={youtube}
                  alt="Youtube"
                />
              </a>
              <a
                href="https://www.twitch.tv/birdesports"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer_social-mobile"
                  src={twitch}
                  alt="Twitch"
                />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
