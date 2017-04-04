import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log(message)
  }
  
  render() {
    return (
      <div>PlaceHolder</div>
    )
  }
}

const message = 'If you are interested in how I build the site check it out on github: https://github.com/KerlinMichel/portfolio'

export default App
