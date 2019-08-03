import React, { Component } from "react"
import { Link } from "gatsby"

import xara from "../../images/xara.png"

import "./banner.css"

class Banner extends Component {
  render() {
    return (
      <>
        <div className="banner_box">
          <div className="banner_joinus">
            <Link className={"banner_joinus--link"} to="/joinus">
              JOIN US
            </Link>
          </div>

          <div className="banner_separator">
            <div className="banner_separator_line"></div>
          </div>

          <div className="banner_xara">
            <img className="banner_img_xara" src={xara} alt="Xayah & Rakan" />
          </div>
        </div>
      </>
    )
  }
}

export default Banner
