import React from 'react'

const Login = React.createClass({
  render: function () {
    return (
      <div>
        <h2>
          Login
        </h2>
        <form className='M-form-group'>
          <div className='M-form-group__field'>
            <label>Email</label>
            <input type='text' name='email' />
          </div>
          <div className='M-form-group__field'>
            <label>Password</label>
            <input type='text' name='password' />
          </div>
          <div className='M-form-group__field'>
            <input type='submit' value='Log In' />
          </div>
        </form>
      </div>

    )
  }
})

export default Login
