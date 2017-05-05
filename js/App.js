import {HashRouter, Route} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import Landing from './components/Landing'
import About from './components/About'
import Directory from './components/Directory'
import Login from './components/Login'

import AppNav from './components/AppNav'
import Header from './components/Header'

import famData from './data.json'

const App = React.createClass({
  getInitialState: function(){
    return {
      familyMembers: famData,
      messageRecipients: [
        {firstName: 'Ellen', lastName: 'Patterson', id: 222},
        {firstName: 'Travis', lastName: 'Hubbard', id: 233}   
      ]
    }
  },

  _addRecipient: function(recipientObj){
    this.setState({
      messageRecipients: [].concat(this.state.messageRecipients, [recipientObj])
    })
  },

  _removeRecipient: function(removedRecip){
    this.setState({
       messageRecipients: this.state.messageRecipients.filter((recipient) => removedRecip.id !== recipient.id)
    })
  },

  render: function () {
    return (
      <HashRouter hashType='slash'>
        <div>
          <Route path='/' component={(props) => <Header {...props} />}/>
          <AppNav />
          <Route
            exact
            path='/'
            component={(props) => <Landing 
              removeRecipient={this._removeRecipient}
              messageRecipients={this.state.messageRecipients}
            />}
          />

          <Route
            path='/about'
            component={About}
          />

          <Route
            path='/directory'
            component={(props) => <Directory 
              familyMembers={this.state.familyMembers} {...props} 
              addRecipient={this._addRecipient}
            />
            }
          />

          <Route
            path='/login'
            component={Login}
          />

        </div>
      </HashRouter>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app-container'))
