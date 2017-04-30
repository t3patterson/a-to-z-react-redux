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
      .filter((famData) => {
        if (searchText.length === 0) return true
        let nameNormalized = `${famData.firstName} ${famData.middleName} ${famData.lastName}`.toUpperCase()
        let searchTextNormalized = searchText.toUpperCase().trim()
        return nameNormalized.indexOf(searchTextNormalized) >= 0
      })
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
    let cardsJSXArray = this._showPersonCards(this.props.familyMembers, this.state.searchText)
    return (
      <div>
        <h2 className='M-bg_success'>Directory</h2>
        <input 
          onChange={this._updateSearchBox}
          value={this.state.searchText}
          type='text'
         />

        <h6>There {cardsJSXArray.length === 1 ? `is` : `are`} <mark>{cardsJSXArray.length}</mark> matching {cardsJSXArray.length === 1 ? `result` : `results`}: </h6>

        <div className='M-grid'>
          {cardsJSXArray}
        </div>
      </div>
    )
  }
})

export default Directory
