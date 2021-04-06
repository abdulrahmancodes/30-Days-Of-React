import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {countriesData} from './countries';
import { render } from '@testing-library/react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>30 Days Of React</h1>
        <h4>Getting Started React</h4>
        <p>Javascript Library</p>
        <h4>Abdul Rahman</h4>
        <p>Apr 6 2021</p>
        <h6>Select a country for your next holiday</h6>
      </header>
    )
  }
}

class Main extends React.Component {

  
  render() {
  let languages = this.props.data.languages;
  let languagesList = languages.map( (lang, i) => {
    if (i === 0) {
      return lang
    } else {
      return `, ${lang}`
    }
  } )

  let oneOrManyLanguages = languages.length === 1 ? 'Language' : 'Languages';

    return (
      <div className="card">
        <div className="country">
          <img src={this.props.data.flag} alt=""/>
          <p className='countryName'>{this.props.data.name}</p>
        </div>
        <div className="details">
        <p><strong>Capital:</strong> {this.props.data.capital}</p>
        <p><strong>{oneOrManyLanguages}:</strong> {languagesList}</p>
        <p><strong>Population:</strong> {this.props.data.population}</p>
        <p><strong>Currency:</strong> {this.props.data.currency}</p>
        </div>
      </div>
    )
  }
}

class Button extends React.Component {

  render() {
    return (
      <button onClick={this.props.changeCountry}>Select Country</button>
    )
  }
}

class App extends React.Component {
  state = {
    i: 0,
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani',
  }

   changeCountry = () => {
    
    let index = this.state.i;
    index++;
    this.setState({
      i: index,
      name: countriesData[index].name,
      capital: countriesData[index].capital,
      languages: countriesData[index].languages,
      population: countriesData[index].population,
      flag: countriesData[index].flag,
      currency: countriesData[index].currency,
    })
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Main data={this.state}/>
        <Button changeCountry={this.changeCountry}/>
      </div>
    )
  }
}

const root = document.querySelector('#root');

ReactDOM.render(<App />, root)