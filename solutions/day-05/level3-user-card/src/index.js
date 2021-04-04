import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserImg from './asabeneh.jpg';
import reactDom from 'react-dom';

const root = document.querySelector('#root');

const User = (props) => {
  
  const {userName, jobTitle, country} = props.user 

  return (
    <div>
    <img src={UserImg} alt=""/>
    <h6>{userName}</h6>
    <p>{jobTitle} <span>{country}</span></p>
  </div>
  )
} 

const Skills = ( {skills} ) => {
  const skillsList = skills.map( skill => <li key={skill}>{skill}</li>);
  return skillsList
}

const Footer = () => (
  <p>Joined on August 30, 2020</p>
)


const App = () => {
  const user = {
    userName: 'Asabeneh Yetayeh',
    jobTitle: 'Senior Developer',
    country: 'Finland'
  };
  const skills = ['HTML', 'CSS', 'JS', 'SASS', 'REACT', 'REDUX', 'NODE', 'MongoDB', 'PYTHON', 'FLASK', 'DJANGO', 'NUMPY', 'PANDAS', 'MYSQL']


  return (
    <div>
      <User user={user} />
      <h6>Skills</h6>
      <ul>
        <Skills skills={skills} />
      </ul>
      <Footer />
    </div>
  )
}

ReactDOM.render(<App />, root)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
