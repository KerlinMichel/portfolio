import React from 'react';
import Anime from 'react-anime';

class Header extends React.Component {
  render() {
    return(
      <Anime
        duration={1500}
        direction="reverse"
        delay={(el, index) => index * 240}
        translateY='13rem'
      >
        <div style={container}>
          <h1 style={title}>{this.props.text}</h1>
        </div>
      </Anime>
    );
  }
}

const container = {

}

const title = {
  textAlign: "center",
  color: 'white',
  fontSize: "50px"
}

export default Header;
