import React from 'react';

class Main extends React.Component {
  render() {
    let languages = this.props.data.languages;
    let languagesList = languages.map((lang, i) => {
      if (i === 0) {
        return lang;
      } else {
        return `, ${lang}`;
      }
    });

    let oneOrManyLanguages = languages.length === 1 ? "Language" : "Languages";

    return (
      <div className="card">
        <div className="country">
          <img src={this.props.data.flag} alt="" />
          <p className="countryName">{this.props.data.name}</p>
        </div>
        <div className="details">
          <p>
            <strong>Capital:</strong> {this.props.data.capital}
          </p>
          <p>
            <strong>{oneOrManyLanguages}:</strong> {languagesList}
          </p>
          <p>
            <strong>Population:</strong> {this.props.data.population}
          </p>
          <p>
            <strong>Currency:</strong> {this.props.data.currency}
          </p>
        </div>
      </div>
    );
  }
}

export default Main;