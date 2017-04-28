#Part 1 -- React Raw

#### (1) Include Libraries
- React DOM
- React


#### (2) Create a component & put it on the DOM
Components in react are functions

- `React.createClass()` : a blueprint for a component-- executed with `.render()` method that must always return markup.
  + `render()` is a PURE function
- `React.createElement()` : creates an actual instance of an element OR a class
- `ReactDOM.render(«element», «domEl»)`

```js
var SimpleComponent = React.createClass({
   render: function(){
      return (
         React.createElement('div', null, 
               React.createElement('h1', null, 'This is React!'),
         )
      )
   }
})

ReactDOM.render(React.createElement(SimpleComponent), document.getElementById('app-container'))
```

#### (3) Nesting Components

```js
var NestedComponents = React.createClass({
   render: function(){
      return (
         React.createElement('div', null,[
            React.createElement(SimpleComponent),
            React.createElement('hr', null),
            React.createElement(MessageComponent),
            React.createElement(MessageComponent)   
         ])
      )
   }
}) 
```

#### (4) Passing Props
*(1)* Pass in the props 
*(2)* Reference the props on `this.props.«namespace»`
*(3)* Put component on DOM

```js
//Outer ListComponent
var ListComponent = React.createClass({
   render: function(){
      return (
          React.createElement('ul', null, [
            //(1) 
             React.createElement(ListItem, {title: 'Get groceries'),
             React.createElement(ListItem, {title: 'Bathe the cat'),
             React.createElement(ListItem, {title: 'Prepare iced tea')
          ])       
      )
   }
})


//List Item component
var ListItem = React.createClass({
   render: function(){
      return (
         //(2) 
         React.createElement('li', this.props.title)
      )
   }
})


var NestedComponents = React.createClass({
   render: function(){
      return (
         React.createElement('div', null,[
            React.createElement(SimpleComponent),
            React.createElement('hr', null),
            React.createElement(TextComponent),
            //(3)
            React.createElement(ListComponent),
            
         ])
      )
   }
})           
```

#### (5) State + Event Listeners
```js
var Toggler = React.createClass({
  getInitialState: function(){
    return {
      segmentShowing: false
    }
  }, 

  _handleClick: function () {

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
```