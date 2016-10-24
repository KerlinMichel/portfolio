import React from 'react';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import TextBlob from './components/TextBlob.jsx';
import ProjectBubble from './components/ProjectBubble.jsx';
import Modal from './components/Modal.jsx';
import List from './components/List.jsx';
import Badge from './components/Badge.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectBubbles: [],
      modalShow: false,
      modalData: {},
      describingProject: false,
      projectData: {}
    }
  }

  componentDidMount() {
    this.setState({projectBubbles:[
      {id: 0, img: "app/assets/cambioLogo.png", desc: `Cambio is an electron app paired with a node.js backend.
      The cambio app acts a browser but when url request are made an email is
      sent to our email server and our server resolves the url request and
      converts to markdown for compression and emails the response to the sender
      of the request. The Cambio browser will automatically detect the respond
      email and display it. This allows access to the entire internet if email
       is available to fight internet censorship.`, title: "Cambio"},
      {id: 1, img:"http://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/373/193/datas/gallery.jpg",
       desc: `A app that connects users to local tutors in their area. The React Native app uses the phones GPS
       to access the firebase database to find any active tutors nearby and after each session the user will pay
       the tutor which is possible through the use of stripe API.`, title: 'Learnet'}
    ]});
  }

  describeProject(e, project) {
    this.setState({describingProject: true, projectData: project});
  }

  closeDesc() {
    this.setState({describingProject: false});
  }

  render() {
    let projects;
    for(var i in this.state.projectBubbles) {

    }
    let popUp;
    if(this.state.modalShow) {
      popUp = <Modal title={this.state.modalData.title}/>
    } else {

    }
    if(this.state.describingProject) {
      let project = this.state.projectData;
      projects =
      <Badge large image={project.img} title={project.title} desc={project.desc} onClose={() => this.closeDesc()}/>
    } else {
      projects =
      this.state.projectBubbles.map((project) => (
        <Badge onClick={(e) => this.describeProject(e, project)} key={project.id} image={project.img} title={project.title} desc={project.desc}/>
      ))
    }

    return (
      <div style={rootStyle}>
        <Header text={"Kerlin Michel"}/>
        <Section margin="0px 0px 25px">
          <TextBlob text={me}/>
        </Section>
        <Section margin="0px 0px 25px">
          <List style={{marginRight: "7.5%"}} title={"Programming languages/Skills"}
           items={["Java", "C/C++", "Javascript", "python", "C#", "Mobile Development",
            "TCP", "Network Sockets", "Web Development", "Game Development", "Linux OS", "Windows OS"]}/>
          <List style={{marginLeft: "7.5%"}} title={"Technologies"} items={["Android", "libGDX", "OpenGL", "Docker", "Node.js", "react.js", "React Native", "Electron"]}/>
        </Section>
        <Section>
          {projects}
        </Section>
        {popUp}
      </div>
    );
  }
}
const rootStyle = {
}

const me = `Hey I'm Kerlin and I am a programmer that currently works as a web developer at
FIU's Honors College. I also dabble in game development as a hobby. Contact me at: \n michelkerlin@gmail.com`;

console.log(`Interested in how this site was made? I use react.js and react-anime
   which is a react wrapper for anime.js. I plan to use redux if my sites grows
   too complex. Check out the code here: </break> https://github.com/KerlinMichel/portfolio`);

export default App;
