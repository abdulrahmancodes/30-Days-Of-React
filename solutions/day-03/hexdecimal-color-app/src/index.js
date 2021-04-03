import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.querySelector("#root");

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const color1 = hexaColor();
const color2 = hexaColor();
const color3 = hexaColor();
const color4 = hexaColor();
const color5 = hexaColor();


const bgColor1 = {
  background: color1,
  width: '100%',
  height: '100px',
  marginBottom: '10px'
}

const bgColor2 = {
  background: color2,
  width: '100%',
  height: '100px',
  marginBottom: '10px'
}

const bgColor3 = {
  background: color3,
  width: '100%',
  height: '100px',
  marginBottom: '10px'
}

const bgColor4 = {
  background: color4,
  width: '100%',
  height: '100px',
  marginBottom: '10px'
}

const bgColor5 = {
  background: color5,
  width: '100%',
  height: '100px',
  marginBottom: '10px'
}

const ColorComponent1 = () => <div style={bgColor1}>{color1}</div>
const ColorComponent2 = () => <div style={bgColor2}>{color2}</div>
const ColorComponent3 = () => <div style={bgColor3}>{color3}</div>
const ColorComponent4 = () => <div style={bgColor4}>{color4}</div>
const ColorComponent5 = () => <div style={bgColor5}>{color5}</div>




const AppComponent = () => (
  <div className='app'>
    <ColorComponent1 />
    <ColorComponent2 />
    <ColorComponent3 />
    <ColorComponent4 />
    <ColorComponent5 />
  </div>
)

ReactDOM.render(<AppComponent />, root)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
