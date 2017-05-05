import React from 'react'
import PropTypes from 'prop-types'

const PersonCard = React.createClass({
  propTypes: {
    id: PropTypes.number,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  },

  render: function () {
    let {firstName, lastName, middleName, id, email} = this.props.data
    middleName = middleName[0] ? `${middleName[0]}.` : ''
    return (
      <figure className='M-sm-12-of-12 M-md-4-of-12'>
        <div>
          <img src={`https://robohash.org/${id}`} />
        </div>
        <p>
          {`${firstName} ${middleName} ${lastName}`}
          <br />
          <small className='M-text_muted'>{`${email}` || '-'}</small>
          <hr />
          <button className='M-btn_sm' onClick={()=>{ this.props.addRecipient(this.props.data) }}>Add to Contact List</button>
          <br />
          <button className='M-btn_sm'>Add to Faves List</button>
        </p>
      </figure>
    )
  }
})

export default PersonCard
