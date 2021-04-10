import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

const root = document.querySelector('#root');

const Employee = ({name, salary, age}) => {
  return (
    <>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Salary:</strong> ${salary}</p>
      <p><strong>Age:</strong> {age}yrs</p>
    </>
  )
}

const Employees = (props) => {
  let list = props.data.map( employee => <li className='employee' key={employee.id}><Employee name={employee.employee_name} salary={employee.employee_salary} age={employee.employee_age} /></li>)
  return list
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    let url = 'http://dummy.restapiexample.com/api/v1/employees';
    let response = await axios.get(url);
    let data = await response.data.data;
    this.setState({
      data: data,
    });
    console.log(this.state)
  } 


  render() {
    return (
      <div className="container">
        <h1>Employees List</h1>
        <ul className="employees">
          <Employees data={this.state.data} />
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, root);