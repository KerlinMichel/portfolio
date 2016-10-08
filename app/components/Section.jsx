import React from 'react';

class Section extends React.Component {
  render() {
    return(
      <div style={container}>
        {this.props.children}
      </div>
    );
  }
}

const container = {
  display: "flex",
  //alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
}

export default Section;
