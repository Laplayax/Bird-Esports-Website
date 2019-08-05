import React, { Component } from 'react';
import BG from '../../images//bg.png';
import Mobile from '../../images//anivia-background-mobile.png';
import iPad from '../../images//anivia-background-ipad.png';

import './background.css';

class Background extends Component {
  render() {
    return (
      <div>
        <img className="body_bg_img" src={BG} />
        <img className="background-mobile" src={Mobile} />
        <img className="background-ipad" src={iPad} />
      </div>
    );
  }
}

export default Background;
