import React from 'react';
import Anime from 'react-anime';

class TextBlob extends React.Component {
  render() {
    return(
      <Anime easing="easeOutElastic"
         duration={1500}
         direction="reverse"
         delay={(el, index) => index * 240}
         translateY='13rem'
         borderRadius='10%'
         //scale={[.75, .9]}
         >
        <div style={blob}>
          {this.props.text}
        </div>
      </Anime>
    );
  }
}
//Hey I'm Kerlin and I am a programmer that currently works as a web developer at
//FIU's Honors College. I also dabble in game development as a hobby.

const blob = {
  //display: 'flex',
  wordWrap: "break-word",
  //backgroundColor: "#FFEBEE",
  margin: "auto",
  borderRadius:"2%",
  maxWidth: "60%"//"rgba(1,1,1,0.2)" #BDBDBD
}
export default TextBlob;
