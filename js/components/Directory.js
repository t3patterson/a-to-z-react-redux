import React from 'react'
import PropTypes from 'prop-types'
import PersonCard from './PersonCard'
import shortid from 'shortid'

const Directory = React.createClass({
  propTypes: {
    familyMembers: PropTypes.array
  },

  getInitialState: function(){
    return {
      searchText: ''
    }
  },

  _showPersonCards: function (familyMembers = [], searchText = '') {
    return familyMembers
      .map((famData) => {
        return <PersonCard {...famData} key={shortid.generate()} />
      })
  },

  _updateSearchBox: function (evt) {
    this.setState({
      searchText: evt.target.value
    })
  },

  render: function () {
    return (
      <div>
        <h2 className='M-bg_success'>Directory</h2>
        <div className='M-grid'>
          {this._showPersonCards(this.props.familyMembers, this.state.searchText)}
        </div>
      </div>
    )
  }
})

export default Directory
