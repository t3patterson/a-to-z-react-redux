# Part 3 -- Shared State

#### (1) Move State to top level

- we want to be able to share state btw 2 components. Will be easiest to move it to top level

```js
const App = React.createClass({
  getInitialState: function(){
    return {
       familyMembers: famData,
       messageRecipients: [
        {firstName: 'Ellen', lastName: 'Patterson'},
        {firstName: 'Ben', lastName: 'Hubbard'}
       ]
    }
  },

  render: function () {
      ...
         <Route
            exact
            path='/'
            component={(props) => <Landing messageRecipients={this.state.messageRecipients}/>}
          />
      ...
         <Route
           path='/directory'
           component={(props) => <Directory familyMembers={this.state.familyMembers} {...props} />}
         />
      ...
  }
})
```

#### (2) Modify State w/ callback passed as props to child component
this will add a family member to the Message recipient list

in `App.js`
+ create `_addRecipient` method that will change state
+ pass `_addRecipient` as props all the way down to PersonCard

 ```js
const App = React.createClass({
   _addRecipient: function(recipientObj){
      this.setState({
        this.state.messageRecipients.concat([recipientObj])
      })
   },

   render: function () {
       ...
          <Route
             exact
             path='/'
             component={(props) => <Landing messageRecipients={this.state.messageRecipients}/>}
           />
       ...
          <Route
            path='/directory'
            component={(props) => <Directory 
              familyMembers={this.state.familyMembers} 
              addRecipient={this._addRecipient}
              {...props} 
            />}
          />
       ...
   }
 })
```

in `Directory.js`, pass `this.props.addRecipient` to `<PersonCard/>`
```js
  ...
  <PersonCard 
    data={famData} 
    key={shortid.generate()} 
    addRecipient={this.props.addRecipient} 
  />
  ...
```

in `PersonCard.js`, execute callback with `onClick` for *Add to Contact List* button.
```js
const PersonCard = React.createClass({
  ...
  render: function () {
    let {firstName, lastName, middleName, id, email} = this.props.data
    middleName = middleName[0] ? `${middleName[0]}.` : ''
    return (
      <figure className='M-sm-12-of-12 M-md-4-of-12'>
        <div>
          <img src={`https://robohash.org/${id}`} />
        </div>
        <p>
          ...
          <button className='M-btn_sm' onClick={()=>{ this.props.addRecipient(this.props.data) }}>Add to Contact List</button>
          ...
        </p>
      </figure>
    )
  }
})
```

####(3) Remove from the same list
in `App.js`
```js
const App = React.createClass({
  ...
  _removeRecipient: function(removedRecip){
    this.setState({
       messageRecipients: this.state.messageRecipients.filter((recipient) => removedRecip.id !== recipient.id)
    })
  },
  ...
  render: function () {
    return (
      ...
      <HashRouter hashType='slash'>
        ...
          <Route
            exact
            path='/'
            component={(props) => <Landing 
              removeRecipient={this._removeRecipient}
              messageRecipients={this.state.messageRecipients}
            />}
          />
      )
    }

})
```

in `Landing.js` (inside the `<span>`)
```js
const Landing = React.createClass({
  ...

  render: function () {
    return (
      <div className='landing'>
        ...
            <ul>
               {
                 this.props.messageRecipients
                   .map((recip) => {
                      return (
                        <li
                          key={shortid.generate()}
                        >
                          {`${recip.firstName} ${recip.lastName}`} 
                          <span onClick={ ()=>{ this.props.removeRecipient(recip) } }>x</span>
                        </li>
                      )
                   })
               }
            </ul>
    )
  }
})
```

