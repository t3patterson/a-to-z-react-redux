import React from 'react'
import {NavLink} from 'react-router-dom'

var AppNav = React.createClass({

  render: function () {
    let navItemClass = 'M-sm-3-of-12'
    let navItemActiveClass = 'M-sm-3-of-12 nav__selected'
    return (
      <nav className='M-grid M-grid__adjacent'>
        <NavLink exact to='/' className={navItemClass} activeClassName={navItemActiveClass}>
          Home
        </NavLink>
        <NavLink exact to='/about' className={navItemClass} activeClassName={navItemActiveClass}>
          About
        </NavLink>
        <NavLink exact to='/directory' className={navItemClass} activeClassName={navItemActiveClass}>
          Directory
        </NavLink>
        <NavLink exact to='/login' className={navItemClass} activeClassName={navItemActiveClass}>
          Login
        </NavLink>
      </nav>
    )
  }
})

export default AppNav
