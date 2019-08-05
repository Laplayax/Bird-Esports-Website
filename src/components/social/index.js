import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TwitchEmbedVideo from 'react-twitch-embed-video';
import YouTube from 'react-youtube';

import TwitterIcon from '../../images/Twitter_blue.svg';
import TwitchIcon from '../../images/Twitch_color.svg';
import YoutubeIcon from '../../images/Youtube_color.svg';

import './social.css';

class Social extends Component {
  state = {
    widthYoutube: 960,
    heightYoutube: 540,

    widthTwitch: 620,
    heightTwitch: 349
  };

  updateDimensions() {
    // if (window.innerWidth < 1000) {
    //   let update_width = window.innerWidth - 40;
    //   let youtubeHeight = update_width / 2;
    //   let twitchHeight = update_width / 2;

    //   console.log(`this is the new width: ${update_width}`);
    //   console.log(`this is the new height: ${youtubeHeight}`);
    //   this.setState({
    //     widthYoutube: update_width,
    //     heightYoutube: youtubeHeight,

    //     widthTwitch: update_width,
    //     heightTwitch: twitchHeight
    //   });
    // } else {
    //   console.log('DEFAULT WIDTH');
    this.setState({
      widthYoutube: 960,
      heightYoutube: 540,

      widthTwitch: 620,
      heightTwitch: 349
    });
    // }
  }
  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    // window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateDimensions.bind(this));
  // }

  render() {
    const opts = {
      height: this.state.heightYoutube,
      width: this.state.widthYoutube,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <>
        <div className="social-wrap">
          <div className="social-twitter-wrap">
            <a href="www.twitter.com">
              <img
                src={TwitterIcon}
                alt="Twitter"
                className="social-twitter-icon"
              />
            </a>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="tbelol"
              theme="dark"
              linkColor="#FFF684"
              noFooter
              noHeader
              noScrollbar
              transparent
              options={{
                width: '500',
                height: '564'
              }}
            />
          </div>
          <div className="social-twitch-wrap">
            <a href="www.twitch.com">
              <img
                src={TwitchIcon}
                alt="Twitch"
                className="social-twitch-icon"
              />
            </a>
            <div className="social-twitch-stream">
              <TwitchEmbedVideo
                channel="tbelol"
                theme="dark"
                layout="video"
                height="349"
                width="620"
              />
            </div>
          </div>
        </div>

        <div className="social-wrap-bottom">
          <a href="www.youtube.com">
            <img
              src={YoutubeIcon}
              alt="Youtube"
              className="social-youtube-icon"
            />
          </a>
          <div className="social-youtube-video">
            {/* <YouTube videoId="" opts={opts} onReady={this._onReady} /> */}
          </div>
        </div>
      </>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Social;
