import React from 'react'

var ListItem = React.createClass({
  render: function () {
    return (
      React.createElement('li', {style: {color: this.props.textColor}}, this.props.title)
    )
  }
})

var ListComponent = React.createClass({
  render: function () {
    return (
      React.createElement('ul', null, [
        React.createElement(ListItem, {title: 'Get groceries', textColor: 'peru'}),
        React.createElement(ListItem, {title: 'Bathe the cat', textColor: 'tan'}),
        React.createElement(ListItem, {title: 'Prepare iced tea', textColor: 'skyblue'})
      ])
    )
  }
})

export default ListComponent