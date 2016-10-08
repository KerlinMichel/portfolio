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
          I hold the title of a programmer with experience in Web Dev and Game Dev
          You can check out some of my skills and projects below
        </div>
      </Anime>
    );
  }
}
const blob = {
  backgroundColor: "rgba(255,255,255,0.75)",
  margin: "auto"//"rgba(1,1,1,0.2)" #BDBDBD
}
export default TextBlob;
