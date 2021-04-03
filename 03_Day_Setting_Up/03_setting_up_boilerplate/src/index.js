import React from 'react'
import ReactDOM from 'react-dom'
import htmlLogo from './images/html_logo.png'
import cssLogo from './images/css_logo.png'
import reactLogo from './images/react_logo.png'

const root = document.querySelector("#root")

const appStyle = {

}

const app = (
  <div style={appStyle}>
    <img src={htmlLogo} />
    <img src={cssLogo} />
    <img src={reactLogo} />
  </div>
)

ReactDOM.render(app, root)