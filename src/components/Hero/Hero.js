import React from "react";

class Hero extends React.Component {

  render() {
    return (
        <div className="hero-bg">
          <div className="desktop-content">
          <img src={require('../../assets/desktop_smaller_banner.jpg')} alt="Hero Banner" className="bannerimage" width="100%" height="auto"/>
          <div className="hero-text">
            <h2>India's Learning Won't Stop</h2>
            <p>Free Access to all LIVE Classes & Content</p>
            <h4>Start Your Success with Onedu.</h4>
            <br/>
            <button>Learn more</button>
          </div>
        </div>
        <div className="mobile-content">
        <img src={require('../../assets/mobile_image_1.jpg')} width="100%" height="auto" className="mobile_image"/>
        <img src={require('../../assets/tablet_assets/tablet_image_1.jpg')} width="100%" height="auto" className="tablet_image"/>
        <div className="hero-device-text">
            <h2>India's Learning Won't Stop</h2>
            <p className="device_text">Free Access to all LIVE Classes & Content</p>
            <h4>Start Your Success with Onedu.</h4>
            <br/>
            <button>Learn more</button>
          </div>
        </div>
        </div>
    );
  }
}

export default Hero;