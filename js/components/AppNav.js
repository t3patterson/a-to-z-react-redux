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
