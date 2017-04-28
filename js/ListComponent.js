import React from 'react'

var ListItem = React.createClass({
  render: function () {
    return (
      <li style={{color: this.props.textColor}}>
        {this.props.title}
      </li>
    )
  }
})

var ListComponent = React.createClass({
  render: function () {
     // React.createElement('ul', null, [
     //   React.createElement(ListItem, {title: 'Get groceries', textColor: 'peru'}),
     //   React.createElement(ListItem, {title: 'Bathe the cat', textColor: 'tan'}),
     //   React.createElement(ListItem, {title: 'Prepare iced tea', textColor: 'skyblue'})
     // ])
    return (
      <ul>
        <ListItem title={'get groceries'} textColor={'peru'} />
        <ListItem title={'Bathe the cat...'} textColor={'tan'} />
        <ListItem title={'Prepare the iced tea'} textColor={'skyblue'} />
      </ul>

    )
  }
})

export default ListComponent
