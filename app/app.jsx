import React from 'react';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import TextBlob from './components/TextBlob.jsx';
import ProjectBubble from './components/ProjectBubble.jsx';
import Modal from './components/Modal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectBubbles: [],
      modalShow: false,
      modalData: {}
    }
  }

  componentDidMount() {
    this.setState({projectBubbles:[
      {id: 0, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 1, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 2, img: "app/assets/cambioLogo.png", desc: "Cambio is a email server. Do not delet it plz Hillary. This makes it so anyone with email access can access the entire internet.", title: "Cambio"},
      {id: 3, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 4, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 5, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 6, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 7, img: "app/assets/cambioLogo.png", desc: "Cambio", title: "Cambio"},
      {id: 8, img: "app/assets/cambioLogo.png", desc: "Cambio is a email server. Do not delet it plz Hillary. This makes it so anyone with email access can access the entire internet.", title: "Cambio"}
    ]});
  }

  popUp(e, project) {
    //console.log(e);
    //console.log(project);
    this.setState({modalShow: true, modalData: project});
  }
  render() {
    let projects;
    for(var i in this.state.projectBubbles) {

    }
    console.log(this.state.projectBubbles);
    let popUp;
    if(this.state.modalShow) {
      popUp = <Modal title={this.state.modalData.title}/>
    } else {

    }
    return (
      <div style={rootStyle}>
        <Header/>
        <Section>
          <TextBlob/>
        </Section>
        <Section>
          {
            this.state.projectBubbles.map((project) => (
              <ProjectBubble onClick={(e) => this.popUp(e, project)} key={project.id} image={project.img} title={project.title} desc={project.desc}/>
            ))
          }
        </Section>
        {popUp}
      </div>
    );
  }
}
const rootStyle = {
}
export default App;
