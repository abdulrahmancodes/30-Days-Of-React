import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Button from './components/shared/button'
import {countriesData} from './data/countries'


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
  
  export default App