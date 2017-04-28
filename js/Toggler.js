import React from 'react'


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

export default React