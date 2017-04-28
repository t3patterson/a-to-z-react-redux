# Part 3 -- React Router

#### (1) Install React Router 4.1.1
`yarn add react-router-dom@4.1.1 -E`

#### (2) Import Components & Configure the Router
in `app.js`

```js
import Landing from './components/Landing'
import About from './components/About'
import Directory from './components/Directory'
import Login from './components/Login'

import AppNav from './components/AppNav'

const App = React.createClass({
  render: function () {
    return (
      <HashRouter hashType="slash">
        <div>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/directory' component={Directory} />
          <Route exact path='/login' component={Login} />
        </div>
      </HashRouter>
    )
  }
})  
```

#### (3) Create the `AppNav` Navbar Component

create `AppNav.js`
```js
import React from 'react'
import {NavLink} from 'react-router-dom'

const AppNav = React.createClass({

  render: function () {
    let navItemClass = 'M-sm-3-of-12'
    let navItemActiveClass = 'M-sm-3-of-12 nav__selected'
    return (
      <nav className='M-grid M-grid__adjacent'>
        <NavLink  exact to='/' className={navItemClass} activeClassName={navItemActiveClass}>
          Home
        </NavLink>
        ...
      </nav>
    )
  }
})

export default AppNav

})
```

export default AppNav

then add it to top-level `<App />` component in `app.js`

```js
const App = React.createClass({
  render: function () {
    return (
      <HashRouter hashType="slash">
        <div>
          <AppNav/>
          <Route exact path='/' component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/directory' component={Directory} />
          <Route path='/login' component={Login} />
        </div>
      </HashRouter>
    )
  }
})
```

