import React from 'react'
import {PropTypes} from 'prop-types'
import shortid from 'shortid'

const Landing = React.createClass({
  propTypes: {
    messageRecipients: PropTypes.array
  },

  render: function () {
    return (
      <div className='landing'>
        <h2>Messenger</h2>
        <div className='M-grid M-form-group'>
          <div className='M-md-6-of-12 M-form-group__field'>
            <label>Recipients</label>
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
          </div>
          <div className='M-md-6-of-12 M-form-group__field'>
            <label>Message</label>  
            <textarea className='M-textarea'></textarea>
            <button className='M-bg_success M-btn_sm'>Send</button>
          </div>
        </div>
      </div>
    )
  }
})

export default Landing
