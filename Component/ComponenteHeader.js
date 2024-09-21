import React, { Component } from "react";

class ComponenteHeader extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="cabecalho">
          <h1>MINIBLOG</h1>
          <img
            src="https://64.media.tumblr.com/9ac5a447780cf383a5797b90bbf9ff9f/e8eab754f1696c68-99/s480x360/ad317a21258991cfb4a4a4341a19fa04e6ec965e.gif"
            // src="https://pa1.aminoapps.com/6735/eec96583c81bb057c652cc0605d946556a7d841d_hq.gif"
            alt="Homer Simpsons"
          />
        </div>
      </div>
    );
  }
}

export default ComponenteHeader;
