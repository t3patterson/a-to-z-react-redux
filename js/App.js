import React from 'react'
import ReactDOM from 'react-dom'
import ListComponent from './ListComponent'
import Toggler from './ListComponent'

var NestedComponents = React.createClass({
  render: function () {
    return (
      React.createElement('div', null, [
        React.createElement('h1', null, 'Welcome to React!'),
        React.createElement(ListComponent),
        React.createElement('hr', null),
        React.createElement(Toggler)
      ])
    )
  }
})

// ReactDOM.render(React.createElement(SimpleComponent), document.getElementById('app-container'))
ReactDOM.render(React.createElement(NestedComponents), document.getElementById('app-container'))
