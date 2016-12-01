const path = require('path');
module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  resolveLoader: {
    modulesDirectories: [
      "web_loaders",
      "web_modules",
      "node_loaders",
      "node_modules",
      //make sure to scan the toolchains packages if npm does not hoist them to be a flat tree
      // require.resolve('@ubiquits/toolchain/package.json').replace('package.json', 'node_modules')
      path.resolve(__dirname, '..', 'node_modules')
    ],
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts'
      },
      {
        test: /\.html$/,
        loader: 'html'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null'
      },
      {
        test: /\.css$/,
        loader: 'raw'
      },
      {
        test: /karmaTestShim\.js$/,
        loader: 'string-replace',
        query: {
          search: '%working-dir%',
          replace: process.cwd(),
          flags: 'g'
        }
      }
    ],
    postLoaders: [
      { //delays coverage til after tests are run, fixing transpiled source coverage error
        test: /\.(js|ts)$/,
        exclude: /(node_modules)\//,
        loader: 'sourcemap-istanbul-instrumenter?force-sourcemap'
      }
    ]
  },

  ts: {
    configFileName: 'tsconfig.browser.json'
  }
};
