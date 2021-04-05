import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {tenHighestPopulation} from './ten_most_highest_populations' 

const root = document.querySelector('#root');


class Country extends React.Component {
  render() {
    let filled = Math.round((this.props.data.population/7693165599) * 100); 

    return (
      <div className="country">
        <span className='countryName'>{this.props.data.country}</span>
        <div className="bar">
          <div className="filled" style={ {width: `${filled}%`} }></div>
          </div>
        <span>{this.props.data.population}</span>
      </div>
    )    
  }
}

// const Country = ( {data : {country, population}} ) => {

//   let filled = Math.round((population/7693165599) * 100);
//   let blank = 100 - filled; 

//   return (
//     <div className="country">
//       <span className='countryName'>{country}</span>
//       <div className="bar">
//         <div className="filled" style={ {width: `${filled}%`} }></div>
//         </div>
//       <span>{population}</span>
//     </div>
//   )
// }


class Countries extends React.Component {
  render() {
    let list = this.props.populationData.map(data => (
      <Country key={data.country} data={data} />
    ))
    return list
  }
}


// const Countries = ( { populationData } ) => {
//   let list = populationData.map(data => (
//     <Country key={data.country} data={data} />
//   ))
//   return list
// }


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>30 Days Of React</h2>
        <p className='large' >World Population</p>
        <p className='small'>Ten Most Populated Countries</p>
        <ul>
          <Countries populationData={tenHighestPopulation} />
        </ul>
      </div>
    )
  }
}

// const App = () => (
//   <div className="container">
//     <h2>30 Days Of React</h2>
//     <p className='large' >World Population</p>
//     <p className='small'>Ten Most Populated Countries</p>
//     <ul>
//       <Countries populationData={tenHighestPopulation} />
//     </ul>
//   </div>
// )

ReactDOM.render(<App />, root)