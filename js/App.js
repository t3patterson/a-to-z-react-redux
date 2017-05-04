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
  render: function () {
    return (
      <HashRouter hashType='slash'>
        <div>
          <Route path='/' component={(props) => <Header {...props} />}/>
          <AppNav />
          <Route
            exact
            path='/'
            component={Landing}
          />

          <Route
            path='/about'
            component={About}
          />

          <Route
            path='/directory'
            component={(props) => <Directory familyMembers={famData} {...props} />}
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
