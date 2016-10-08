import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false
    }
  }
  render() {
    return(
      <div>
        <div style={Object.assign({WebkitFilter: "blur(5px)"}, container, {backgroundColor: "rgba(0,0,0,0)", background:"inherit"})}/>
        <div style={Object.assign({}, container)}>
          <div style={title}>{this.props.title}</div>
          <img style={img}/>
          <div style={body}></div>
          <div style={close}/>
        </div>
      </div>
    );
  }
}

const container = {
  position: "fixed",
  zIndex: 1,
  width: "70%",
  height: "85%",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  top: "7.5%",
  left: "15%",
  borderRadius: "10%",
  //WebkitFilter: "blur(5px)"
}

const blur = {

}

const title = {
  textAlign: "center"
}

const img = {

}

const body = {

}

const close = {
  position: "fixed",
  width: "10%",
  height: "10%",
  borderRadius: "5% 70% 5% 15%",
  top: "7.5%",
  right: "15%",
  backgroundColor: "rgb(255, 0, 0)"
}

export default Modal;
