import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.querySelector('#root');

const isEven = number => number % 2 === 0 ? true : false;
const isOdd = number => number % 2 === 1 ? true : false;
const isPrime = number => {
  for(var i = 2; i < number; i++)
    if (number % i === 0) return false;
  return number > 1;
}


const Days = ( {numbers} ) => {
  const list = numbers.map( number => {
    if ( isPrime(number) ) {
      return <li key={number} className='number prime'>{number}</li>
    } else if ( isEven(number) ) {
      return <li key={number} className='number even'>{number}</li>
    } else if ( isOdd(number) ) {
      return <li key={number} className='number odd'>{number}</li>
    }
  })
  return list
}

const App = () => {
  let i = 0;
  let numbers = [];
  while (i < 32) {
    numbers.push(i);
    i++
  }

  return (
    <div className="container">
      <h2>30 Days Of React</h2>
      <p>Number Generator</p>
      <ul>
        <Days numbers={numbers} />
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, root)