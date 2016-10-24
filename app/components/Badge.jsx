import React from 'react';
import Anime from 'react-anime';

class Badge extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moreDetails: false
    }
  }

  toggle() {

  }

  render() {
    let imageSize;
    let descText;
    let padding; //When 3 inputs => 1: top 2: left and right 3: bottom
    let back;
    let width, height;
    let close;
    if(this.props.large) {
      width = "500px";
      //height = "250px";
      imageSize = 70;
      descText = this.props.desc;
      close =
      <div onClick={this.props.onClose} style={{color: "rgb(244, 67, 54)", marginLeft: "auto", marginRight: "10px", marginTop: "5px"}}>
        &#10006;
      </div>
    }
    else {
      width = "250px";
      height = "70px";
      imageSize = 70; //100
      descText = '';
      padding = "0px 20px 50px";
      close = null;
    }
    return(
      <Anime
      direction="reverse"
      scale={0}
      duration={2000}
      >
        <div onClick={this.props.onClick} style={Object.assign({width: width, height: height}, container)}>
          <div style={{display: "flex"}}>
            <div style={{width: imageSize, height: imageSize, display: "flex"}}>
              <img src={this.props.image} style={Object.assign({display: "block", margin: "auto", maxWidth: imageSize, maxHeight: imageSize}, image)}/>
            </div>
            <div style={{color: "rgb(244, 67, 54)", margin: "20px", alignSelf: "", justifyContent:"center", fontWeight: "bolder"}}>
              {this.props.title}
            </div>
            {close}
          </div>
          <div style={{flex: 1, fontSize: "15px", color: "black", margin: "10px"}}>
            {descText}
          </div>
        </div>
      </Anime>
    );//(this.props.large ? "": "center")
  }
}

const container = {
  borderRadius: "7.5px",
  background: "white",
  //width: "250px",
  //height: "70px",
  margin: "25px",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer"
}

const image = {
  //float: "left",
  //borderRadius: "25%"
}

export default Badge;
