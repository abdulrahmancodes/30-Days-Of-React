import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';




class App extends Component {

  state = {
  }


  handleMouseEnter = (e) => {
    console.log(e.clientX);
    let bottom = e.clientY > 318 ? (637 - e.clientY) : e.clientY;
    let right = e.clientX > 720 ? (1440 - e.clientX) : e.clientX;
    this.setState({
      bottom: bottom,
      right: right,
    })
  }

  render() {
    return (
      <div className="App">
        <div style={ { bottom: `${this.state.bottom}px`, right: `${this.state.right}px`} } id='box' onMouseEnter={this.handleMouseEnter}>
          <h1>30 Days Of React</h1>
        </div>
      </div>
    );
  }
}

export default App;
