import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
const root = document.querySelector('#root');




class App extends React.Component {
  state = {
    index: 0,
    weather: 'autumn'
  }

  changeWeather = () => {
    let weathers = ['autumn', 'winter', 'spring', 'summer']
    let i = this.state.index;
    i++;

    i = (i === 4) ? 0 : i; 
    // if (i === 4) {
    //   i = 0;
    // }
    this.setState({
      index: i,
      weather: weathers[i],
    })
  } 

  render() {

    let jsxElement;

    if (this.state.weather === 'autumn') {
      jsxElement = (
      <div className='autumn'>
      <button onClick={this.changeWeather}>Change Weather</button>
    </div>
      )
    } else if (this.state.weather === 'winter') {
      jsxElement = (
      <div className='winter'>
        <button onClick={this.changeWeather}>Change Weather</button>
      </div>
      )
    } else if (this.state.weather === 'spring') {
      jsxElement = (
      <div className='spring'>
        <button onClick={this.changeWeather}>Change Weather</button>
      </div>
      )
    } else if (this.state.weather === 'summer') {
      jsxElement = (
      <div className='summer'>
        <button onClick={this.changeWeather}>Change Weather</button>
      </div>
      )
    }

    return jsxElement
  }
}

ReactDOM.render(<App />, root)