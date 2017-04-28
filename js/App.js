import React from 'react'
import ReactDOM from 'react-dom'
import ListComponent from './ListComponent'
import Toggler from './Toggler'

var NestedComponents = React.createClass({
  render: function () {
    return (
      // React.createElement('div', null, [
      //   React.createElement('h1', null, 'Welcome to React!'),
      //   React.createElement(ListComponent),
      //   React.createElement('hr', null),
      //   React.createElement(Toggler)
      // ])
      <div>
        <h1>Welcome to React!</h1>
        <ListComponent />
        <hr />
        <hr />
        <Toggler />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(NestedComponents), document.getElementById('app-container'))
