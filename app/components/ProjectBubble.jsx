import React from 'react';
import Anime from 'react-anime';

class ProjectBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreDetails: false
    }
  }
  moreDetails(flag) {
    this.setState({moreDetails: flag})
  }
  popUp() {

  }
  render() {
    let imageSize;
    let descText;
    let padding; //When 3 inputs => 1: top 2: left and right 3: bottom
    let back;
    if(this.state.moreDetails) {
      imageSize = 25;
      descText = this.props.desc;
      padding = "0px 20px 0px";
    }
    else {
      imageSize = 100;
      descText = '';
      padding = "0px 20px 50px";
    }

    return(
      <Anime
      direction="reverse"
      scale={0}
      duration={2000}
      >
      <div style={{minHeight: 150, minWidth: 100, padding: padding, borderRadius: "10%"}}
       onMouseOver={() => this.moreDetails(true)} onMouseOut={() => this.moreDetails(false)}
       onClick={this.props.onClick}>
         <img src={this.props.image} style={Object.assign({display: "block", margin: "0 auto", width: imageSize, height: imageSize}, bubble)}/>
         <div style={body}>
           <div style={title}>
            {this.props.title}
           </div>
           <div style={desc}>
            {descText}
           </div>
         </div>
       </div>
      </Anime>
    );
  }
}

const bubble = {
  borderRadius: "50%",
  //width: 100,
  //height: 100,
  backgroundColor: "#FFEBEE"
}

const body = {
  borderRadius: "5%",
  backgroundColor: "#FFEBEE",
  maxWidth: 250
}

const title = {
  textAlign:"center",
  fontFamily: "Times New Roman",
  fontWeight: "bold",
  color: "#616161",
  fontSize: "16px"
}

const desc = {
  textAlign:"center",
  wordWrap: "break-word",
  color: "#616161",
  fontSize: "15px"
}

export default ProjectBubble;
