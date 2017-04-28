# Part 1 -- Dev Build

#### (1) Setup Webpack + Babel
Problem w/ basic react is that it is hard. We want to be able to write more modern JS w/
+ ES6 (for import/export modules)
+ JSX Syntax

But to do that we need to convert it to Vanilla Javascript.

The converter we need to use is [Babel]( http://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015&targets=&browsers=&builtIns=false&debug=false&experimental=false&loose=false&spec=false&code=import%20React%20from%20'react'%0A%0Alet%20sayHi%20%3D%20()%20%3D%3E%20%7B%0A%20%20console.log('heyy')%0A%7D&playground=true) 


Why do we need webpack?
+ combine all our source files into 1 file
+ catch/report errors on original lines from our source code
+ minify the file
+ and a lot more...

#### (2) Let's Create modules
**`ListComponent.js`**
- import React 
- export the component
  - `export default` means that we export only one thing from the module
```js
import React from 'react'

var ListItem = React.createClass({
  ...
})

var ListComponent = React.createClass({
  ...
})

export default ListComponent
```

**`app.js`**
- application entry point (doesn't export anything) 
```js
import React from 'react'
import ReactDOM from 'react-dom'
import ListComponent from './ListComponent'
import Toggler from './ListComponent'
```

#### (3) Configure webpack
Install webpack to project *devDependencies* in `package.json`.
`yarn add --dev webpack@v2.1.0-beta.2`

At root directory, create: `webpack.config.dev.js`
- the point of webpack is to take a whole bunch of files, translate them, and bundle them.
- webpack assumes that there will be an *entry file*
- webpack will output to an *output file*
- webpack will process certain file types and run them through *loaders*
  + we want to load them through babel (a tool that translates ES6 + JSX to ES5)
- webpack has configuration options for development or production environments
  + you can output source maps, for instance

```js
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/app.js',
  devtool: 'eval',
  output: {
    path: path.join( __dirname, '/public' ),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  // 
  module: {
    rules: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        include: /js/
      }
    ]
  }
}
```

#### (4) Configure babel
Install babel-core and babel-loader:
`yarn install --dev babel-core babel-loader`

Configure `babelrc`
- configuration file for babel -- must follow json standards
- setup w/ presets + plugins
  + presets are groups of plugins
  + e.g: eg es2015 has let plugin, module plugin, arrow syntax plugin etc.
- telling babel to not take care of the modules (allow babel)
  + webpack will implement tree shaking

```json
{
  "presets" : [
    "react",
    ["es2015", {"modules": false}]
  ]
}
```

- install presets
  `yarn install --dev babel-preset-react babel-preset-es2015`

#### (5) Run webpack + add it to npm scripts
`"build:dev" : webpack --config webpack.config.dev.js`