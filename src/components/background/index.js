import React, { Component } from 'react';
import BG from '../../images//bg.png';
import Mobile from '../../images//anivia-background-mobile.png';

import './background.css';

class Background extends Component {
  render() {
    return (
      <div>
        <img className="body_bg_img" src={BG} />
        <img className="background-mobile" src={Mobile} />
      </div>
    );
  }
}

export default Background;
