# Part 4 -- State + Props

#### (1) Config json data to be imported
add json-loader
`yarn add json-loader --dev`

add json-loader to rules in `webpack.config.dev.js`
```
{
...
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      ...
  ]
}
```

import the json data in `app.js`
```js
  import famData from './data.json'
```

#### (2) Passing Props to ReactRouter
The react router `component` prop can can take a function that returns a component.

In `AppNav.js`
```js
<HashRouter hashType="slash">
  <div>
    ...
    <Route 
      path='/directory' 
      component={() => <Directory familyMembers={famData} />} 
    />
    ...
```

#### (3) Iterating over props to render JSX
paramount to react is `.map()`

```js
import React from 'react'
import PersonCard from './PersonCard'

const Directory = React.createClass({
  render: function () {
    console.log(this.props)
    return (
      <div>
        <h2 className='M-bg_success'>Directory</h2>
        <div className="M-grid">
          {
            this.props.familyMembers.map((fam)=>{
              return <p>{fam.firstName} {fam.middleName} {fam.lastName}</p>
            })}
        </div>
      </div>
    )
  }
})

export default Directory
```

#### (4) Iterating over props to render Component

```js
const Directory = React.createClass({
  _showPersonCards: function(familyMembers = []){
    return familyMembers.map((famData) => {
      return <PersonCard {...famData} />
    })
  },

  render: function () {
    return (
      <div>
        <h2 className='M-bg_success'>Directory</h2>
        <div className='M-grid'>
          {this._showPersonCards(this.props.familyMembers)}
        </div>
      </div>
    )
  }
})
```

```js
const PersonCard = React.createClass({
  render: function () {
    let {firstName, lastName, middleName} = this.props
    middleName = middleName[0] ? `${middleName[0]}.` : ""
    return (
      <figure className='M-sm-12-of-12 M-md-4-of-12'>
        <div>
          <img src={`https://robohash.org/${this.props.id}`} />
        </div>
        <p>
          {`${firstName} ${middleName} ${lastName}`}
        </p>
      </figure>
    )
  }
})
```

#### (4) PropTypes
- completely optional
- useful for announcing the kinds of data that a component requires


`yarn add prop-types`

+ in `PersonCard.js`
```js
import PropTypes from 'prop-types'

const PersonCard = React.createClass({
  propTypes: {
    id: PropTypes.number,
    firstName: PropTypes.string,
    middleName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  },
```

#### (4) Key prop
- react needs to keep track of what jsx element corresponds to what element on the dom -- it does this by passing a unique value to the *key* prop.

- useful for when elements are getting sorted/added/deleted

- we will use a library **shortid**
  - `yarn add short id`

+ in `Directory.js`
```js
import shortid from 'shortid'
  ...

  _showPersonCards: function (familyMembers = []) {
    return familyMembers.map((famData) => {
      return <PersonCard {...famData} key={shortid.generate()} />
    })
  }
```