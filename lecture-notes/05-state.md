# Part  -- Event Handling + State

#### (1) What is state in react?
- each react component keeps track of its own state-object that contains important 'extra' information 

- we use information in that component's state-object to render different versions of the UI

- events happen in the components of an application that allow us to modify this state-object

- when we modify a component's state-object it triggers the component's `render()` method to execute again

- given a certain set of props and a certain state, we should know what our app looks like.

#### (2) Setting initital state w/ `getInitialState()`
*Example*: form validation

to create state in a component:

- `getInitialState()` function that returns an object for the component's initial state
- reference `this.state.«stateProperty»` in the component's `render()` method to have the u.i. reflect something in the state
- call `this.setState(...)` in the event-handler
  - Pass it an object whose properties refer to the original state values
  - Does a smart update of the state (only a shallow merge)
  

in `Login.js`
```js
const Login = React.createClass({
  getInitialState: function () {
    return {
      emailInputMsg: '',
      passwordInputMsg: ''
    }
  },

  _handleSubmit: function (evt) {
    evt.preventDefault();
    let stateObj = {}
    
    if (evt.target.name.trim() === '') {
       this.setState({
         emailInputMsg: 'Please enter an email address.'
       })
    }

     if (evt.target.name.trim() === '') {
        this.setState({
          passwordInputMsg: 'Please enter a password value.'
        })
     }

  },
  
  render: function () {
    return (
      <div>
        ...
        <form className='M-grid M-form-group' onSubmit={this._handleSubmit}>
          <div className='M-md-6-of-12 M-form-group__field'>
            ...
            <p className="M-text_center M-bg_fail">
              {this.state.emailInputMsg}
            </p>
          </div>
          <div className='M-md-6-of-12 M-form-group__field'>
            ...
            <p className="M-text_center M-bg_fail">
              {this.state.passwordInputMsg}
            </p>
          </div>
          ...
        </form>
      </div>
    )
  }
})
```
#### (3) Setting initital state w/ `getInitialState()`
