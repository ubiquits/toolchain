var webpackConfig = require('./webpack.test');

module.exports = (config) => {
  const _config = {

    frameworks: ['jasmine'],

    files: [
      {
        pattern: `${__dirname}/karma-test-shim.js`,
        watched: false
      }
    ],

    preprocessors: {
      [`${__dirname}/karma-test-shim.js`]: ['coverage', 'webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,

    coverageReporter: {
      // specify a common output directory
      dir: 'coverage/browser/js',
      reporters: [
        {type: 'json', subdir: '.'}
      ]
    }
  };

  config.set(_config);
};
