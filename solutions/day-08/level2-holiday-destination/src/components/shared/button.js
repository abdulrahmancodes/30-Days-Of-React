import React from "react";

class Button extends React.Component {
  render() {
    return <button onClick={this.props.changeCountry}>Select Country</button>;
  }
}

export default Button;