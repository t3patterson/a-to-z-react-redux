import React from 'react'

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
        <h2>
          Login
        </h2>
        <form className='M-grid M-form-group' onSubmit={this._handleSubmit}>
          <div className='M-md-6-of-12 M-form-group__field'>
            <label>Email</label>
            <input type='text' name='email' />
            <p className="M-text_center M-bg_fail">
              {this.state.emailInputMsg}
            </p>
          </div>
          <div className='M-md-6-of-12 M-form-group__field'>
            <label>Password</label>
            <input type='text' name='password' />
            <p className="M-text_center M-bg_fail">
              {this.state.passwordInputMsg}
            </p>
          </div>
          <div className='M-md-6-of-12 M-form-group__field'>
            <input type='submit' value='Log In' />
          </div>
        </form>
      </div>
    )
  }
})

export default Login
