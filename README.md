## Modern Javascript Tooling with React

- Run `npm init`
- Install webpack and create a default bundle
`npm instal --save-dev webpack webpack-cli`
- To run webpack in prod mode `npm run build`
- To run webpack in dev mode `npm run dev`
- To run tests `npm test`
- Explicitly Define an Entry Point with a webpack Configuration File
- Control the Output of webpack with the mode Setting

```javascript
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  }
}
```

- Configure webpack to Load JavaScript Files through Babel with babel-loader

```javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}
```

- Create Separate webpack Configs for Development and Production with webpack-merge

```javascript
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development'
})
```

- Serve a webpack Bundle while Developing with webpack-dev-server
- Generate Source Maps through webpack for a Better Debugging Experience with source-map
- Hot Reload a React App in Development with react-hot-loader
- Avoid Duplicate Commands by Calling one NPM Script from Another

```json
"scripts": {
  "build": "webpack --config webpack.config.prod.js",
  "dev": "webpack-dev-server --open --config webpack.config.dev.js",
  "dev:hot": "npm run dev -- --hot",
  "test": "echo \"Error: no test specified\" && exit 1"
```

- Analyze a Production JavaScript Bundle with webpack-bundle-analyzer
- Externalize Dependencies to be Loaded via CDN with webpack

```javascript
const merge = require('webpack-merge')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: 'bundle_sizes.html'
  })],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})
```

- Target specific browsers with babel-preset-env and the babel pollyfill
- Asynchronously Load webpack Bundles through Code-splitting and React Suspense
- Set Up Tests that Render a React Component with Jest and Babel