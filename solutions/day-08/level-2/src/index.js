import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import userImg from './asabeneh.jpg';

class Header extends React.Component {

  render() {
    return (
      <header style={ {background: `${this.props.bg}`} }>
        <h1>Welcome to 30 days of React</h1>
        <h4>Getting started with react</h4>
        <p>JavaScript Library</p>
        <p>Asabeneh Yatayeh</p>
        <p>Oct 7, 2020</p>
      </header>
    )
  }
}

class Main extends React.Component {

  
  render() {
    return (
      <main>
        <ul>
          Prerequisites to get started with React:
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <div className="user">
          <img src={userImg} alt=""/>
          <p>Asabeneh Yatayeh</p>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>Copyright 2021</footer>
    )
  }
}

class App extends React.Component {
  state = {
    mode: 'light',
    styles: {
      background: 'white',
      color: 'black'
    },
    headback: 'aqua'
  }

   changeMode = () => {
    if (this.state.mode === 'light') {
      this.setState( {
        styles: {
          background: 'rgb(10, 11, 14)',
          color: 'white'
        }, 
        headback: 'rgb(10, 11, 14)'
      })
      this.setState({ mode: 'dark'})
    } else {
      this.setState( {
        styles: {
          background: 'white',
          color: 'black'
        },
        headback: 'aqua'
      })
      this.setState({ mode: 'light'})
    }
  }


  render() {
    return (
      <div className="container" style={this.state.styles}>
        <Header bg={this.state.headback}/>
        <Main /> 
        <div className="buttons">
          <button>Greet People</button>
          <button>Show Time</button>
          <button onClick={this.changeMode}>Change Background</button>
        </div>
        <Footer />
      </div>
    )
  }
}

const root = document.querySelector("#root");

ReactDOM.render(<App />, root)