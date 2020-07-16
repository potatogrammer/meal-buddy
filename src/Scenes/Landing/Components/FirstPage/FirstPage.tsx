import React, { Component, Props } from "react";
import LandingVectorSVG from "../../../../Images/LandingVector";
import "./FirstPage.css";
class FirstPage extends Component<{}, { faded: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      faded: false,
    };
  }

  onClick = async () => {
    await this.setState({ faded: true });
    setTimeout(() => this.setState({ faded: false }), 400);
    setTimeout(
      () =>
        window.scrollTo({
          top: window.innerHeight,
          left: 0,
          behavior: "smooth",
        }),
      200
    );
  };

  render() {
    return (
      <div
        className={`LandingVectorBG-container ${
          this.state.faded ? "LandingVectorBG-container-faded" : ""
        }`}
      >
        <div className="LandingVectorBG--left">
          <div className="LandingVectorBG--left-upper">
            <div className="nav-bar">
              <div className="logo">MEAL BUDDY</div>
              <div className="nav-bar-button">Home</div>
              <div className="nav-bar-button">About Us</div>
              <div className="nav-bar-button">Contact</div>
            </div>
            <LandingVectorSVG />
            {}
          </div>
          <div className="LandingVectorBG--left-lower"></div>
        </div>
        <div className="LandingVectorBG--right">
          <div className="LandingVectorBG--right-upper">
            <div className="LandingVectorBG--right-upper-corner">
              <div className="button">Sign In</div>
              <div className="content-card">
                <div className="content-card--title">
                  Don't Eat
                  <text className="content-card--title-alone">Alone</text>
                </div>
                <div className="content-card--content">
                  90% of Drexel freshmen end up eating alone in the dining
                  halls. MealBuddy aims to provide all students with a fast,
                  online matching platform, so that eating alone is no longer
                  the norm.
                </div>
                <div className="content-card--button-group">
                  <div className="content-card--button-group-button">
                    <a onClick={this.onClick}>Learn More</a>
                  </div>
                  <div className="content-card--button-group-button">
                    <a href="#">Try Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="LandingVectorBG--lower-right"></div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
