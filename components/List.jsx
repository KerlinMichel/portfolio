import React from 'react';
import Anime from 'react-anime';

class List extends React.Component {
  render() {
    return(
      <div style={Object.assign({}, rootStyle, this.props.style)}>
        <Anime easing="easeOutElastic"
           duration={1500}
           direction="reverse"
           delay={(el, index) => index * 240}
           translateY='13rem'
           //borderRadius='10%'
           //scale={[.75, .9]}
           >
            <div>{this.props.title}</div>
        </Anime>
        <ul style={{listStyleType: "square"}}>
          {
            this.props.items.map((item, i) => (
              <Anime
                 key={i}
                 easing="easeOutElastic"
                 duration={1500}
                 direction="reverse"
                 delay={(el, index) => index * 240}
                 translateY='13rem'
                 delay={i*50}
                 >
                <li>{item}</li>
                </Anime>
            ))
          }
        </ul>
      </div>
    );
  }
}

const rootStyle = {
  wordWrap: "break-word",
  //backgroundColor: "#FFEBEE",
  //margin: "15",
  borderRadius:"2%",
  maxWidth: "60%"
}

export default List;
