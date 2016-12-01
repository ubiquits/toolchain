var webpackConfig = require('./webpack.test');

module.exports = (config) => {
  const _config = {

    frameworks: ['jasmine'],

    files: [
      {
        pattern: `${__dirname}/karmaTestShim.js`,
        watched: false
      }
    ],

    preprocessors: {
      [`${__dirname}/karmaTestShim.js`]: ['coverage', 'webpack', 'sourcemap']
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
    customLaunchers: {
      chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: [
      // 'PhantomJS'
      'Chrome'
    ],
    singleRun: true,

    coverageReporter: {
      // specify a common output directory
      dir: 'coverage/browser/js',
      reporters: [
        {type: 'json', subdir: '.'}
      ]
    }
  };

  if (process.env.TRAVIS) {
    _config.browsers.splice(_config.browsers.indexOf('Chrome'), 1, 'chrome_travis_ci');
  }

  config.set(_config);
};
