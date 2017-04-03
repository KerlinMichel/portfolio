import React from 'react';

class Section extends React.Component {
  render() {
    return(
      <div style={Object.assign({margin : this.props.margin}, container) }>
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
