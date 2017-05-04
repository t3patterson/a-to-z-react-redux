import React from 'react'

const Landing = React.createClass({

  render: function () {
    return (
      <div className='landing'>
        <h2>Messenger</h2>
        <div className='M-grid M-form-group'>
             <div className='M-md-6-of-12 M-form-group__field'>
               <label>Contact List Recipients</label>
               <ul>
                 <li>Ellen Patterson</li>
                 <li>Ben Hubbard</li>
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
