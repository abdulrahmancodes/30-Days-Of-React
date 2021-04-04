import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.querySelector('#root');

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}


const Box = ( {colors} ) => {
  let list = colors.map(color => <li key={color} className='box' style={{background: `${color}`}}>{color}</li>)
  return list
}

const App = () => {
  let i = 0;
  let colors = [];
  while (i < 32) {
    colors.push( hexaColor() );
    i++;
  }

  return (
    <div className="container">
      <h2>30 Days Of React</h2>
      <p>Hexadecimal Colors</p>
      <ul>
        <Box colors={colors} />
      </ul>
    </div>
  )
}


ReactDOM.render(<App />, root)