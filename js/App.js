var SimpleComponent = React.createClass({
  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'This is React!')
      )
    )
  }
})

var TextComponent = React.createClass({
  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('p', null, 'Lorem ipsum dolor sit amet, consectetur adipisicing.')
      )
    )
  }
})

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


var NestedComponents = React.createClass({
  render: function () {
    return (
      React.createElement('div', null, [
        React.createElement(SimpleComponent),
        React.createElement('hr', null),
        React.createElement(TextComponent),
        React.createElement(ListComponent),
        React.createElement('hr', null),
        React.createElement(Toggler)
      ])
    )
  }
})

var Toggler = React.createClass({
  getInitialState: function(){
    return {
      segmentShowing: false
    }
  }, 

  _handleClick: function () {
    console.log('???');
    if (this.state.segmentShowing){
      this.setState({
        segmentShowing: false
      })
    } else {
      this.setState({
        segmentShowing: true
      })
    }
    
  }, 
 
  render: function () {
    var segmentStyles = {
      display: 'none'
    }
    
    if (this.state.segmentShowing){
      segmentStyles = {
        display: 'block'
      }
    }
    console.log(this.state.segmentShowing);

    return(
      React.createElement('div', null, [
        React.createElement('button', {className: 'M-btn', onClick: this._handleClick}, 'Push Me'),
        React.createElement(
          'p', 
          {
            style: segmentStyles, 
            className: 'M-segment M-bg_inverted', 
            onClick: this._handleClick
          }, 
          'Can you believe that the only reason the club is going under is because its in a terrifying neighborhood?')
      ])
    )
  }
})

// ReactDOM.render(React.createElement(SimpleComponent), document.getElementById('app-container'))
ReactDOM.render(React.createElement(NestedComponents), document.getElementById('app-container'))
