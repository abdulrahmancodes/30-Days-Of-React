import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.querySelector("#root");

const FormComponent = () => (
  <div className='wrapper'>
    <h3>SUBSCRIBE</h3>
    <p>Sign Up with your email address to receive news and updates</p>
    <form className="form">
      <div className='inputs'>
      <input type='text' placeholder='First Name' />
      <input type='text' placeholder='Last Name' />
      <input type='text' placeholder='Email' />
      </div>
      <button className='btn'>Subscribe</button>
    </form>
  </div>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<FormComponent />, root)
