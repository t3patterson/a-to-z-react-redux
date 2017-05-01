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
    stateObj.emailInputMsg = ''
    stateObj.passwordInputMsg = ''

    if (evt.target.email.trim() === '') {
      stateObj.emailInputMsg = 'Please enter an email address.'
    }

    if (evt.target.password.trim() === '') {
      stateObj.passwordInputMsg: 'Please enter a password value.'
    }
    
    this.setState(stateObj)
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
#### (3) Handling Changing Input values
+ (1) Set initial state `getInitialState` and `<input value={this.state.searchTxtInput}`

+ (2) Handle the input with `onChange()` and `_updateSearchBox`

+ (3) write the `.filter()` method in the `_showPersonCards` helper for when the state changes.

in `Directory.js`
```js
 const Directory = React.createClass({
   propTypes: {
     familyMembers: PropTypes.array
   },
  
  // --- (1a) ---
   getInitialState: function () {
     return {
       searchText: ''
     }
   },
  

   _showPersonCards: function (familyMembers = [], searchText = '') {
     return familyMembers
       // --- (3) ---
       .filter((famData) => {
         if (searchText.length === 0) return true
         let nameNormalized = `${famData.firstName} ${famData.middleName} ${famData.lastName}`.toUpperCase()
         let searchTextNormalized = searchText.toUpperCase().trim()
         return nameNormalized.indexOf(searchTextNormalized) >= 0
       })
       .map((famData) => {
         return <PersonCard {...famData} key={shortid.generate()} />
       })
   },
  
  // (2)
   _updateSearchBox: function (evt) {
     this.setState({
       searchText: evt.target.value
     })
   },

   render: function () {
     let cardsJSXArray = this._showPersonCards(this.props.familyMembers, this.state.searchText)
     return (
       <div>
         <h2 className='M-bg_success'>Directory</h2>
         <input 
           onChange={this._updateSearchBox}
           {/*  // --- (1b) ---*/}
           value={this.state.searchText}
           type='text'
          />

         <h6>There {cardsJSXArray.length === 1 ? `is` : `are`} <mark>{cardsJSXArray.length}</mark> matching {cardsJSXArray.length === 1 ? `result` : `results`}: </h6>

         <div className='M-grid'>
           {cardsJSXArray}
         </div>
       </div>
     )
   }
 })
```
