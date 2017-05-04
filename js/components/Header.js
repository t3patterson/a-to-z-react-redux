import React from 'react'
import {Link} from 'react-router-dom'

var Header = React.createClass({
  render: function () {
    let rightSideJSX = ''

    if (this.props.location.pathname !== '/login') {
      rightSideJSX = <Link className='M-btn M-btn_sm' to='/'>
        Create Your Account!
      </Link>
    }

    return (
      <header className='M-grid M-grid__adjacent'>
        <div className='M-sm-3-of-12'>
          <img src='./images/bf-logo.png' />
        </div>
        <div className='M-sm-9-of-12 M-text_right'>
          {rightSideJSX}
        </div>
      </header>
    )
  }
})

export default Header
