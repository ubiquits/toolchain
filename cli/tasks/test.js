const SpecReporter      = require('jasmine-spec-reporter');
const chalk             = require('chalk');
const istanbul          = require('gulp-istanbul');
const tap               = require('gulp-tap');
const plumber           = require('gulp-plumber');
const jasmine           = require('gulp-jasmine');
const gulpRemapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
const fs                = require('fs');
const path              = require('path');
const merge             = require('gulp-merge-json');
const replace           = require('gulp-replace');
const KarmaServer       = require('karma').Server;

const {build} = require('./build');
const {clean} = require('./clean');

function task(cli, project) {

  cli.command('test [environment]', 'Run tests')
    .option('-s, --serial', 'Run environments in serial (default is parallel)')
    .action(function (args, callback) {

      return clean(project, this, ['coverage', 'dist'])
        .then(() => {
          let testPromiseFactories = [];

          if (!args.environment || args.environment == 'server') {
            let serverTest = build(project, this, 'server')
              .then(() => instrumentServer(project, this))
              .then(() => testServer(project, this));
            testPromiseFactories.push(() => serverTest);
          }

          if (!args.environment || args.environment == 'browser') {
            testPromiseFactories.push(() => testBrowser(project, this));
          }

          if (args.options.serial) {
            //run promises in serial
            return testPromiseFactories.reduce((prior, next) => {
              return prior.then(() => next());
            }, Promise.resolve()); // initial
          }

          return Promise.all(testPromiseFactories.map(pf => pf()));
        })
        .then(() => remapCoverage(project, this));

    });

}

function instrumentServer(project, cli) {

  return new Promise((resolve, reject) => {
    cli.log('Instrumenting server files');

    const config = project.paths.destination.server + '/**/*.js';

    project.gulp.src(config, {cwd: project.basePath})
    // Covering files
      .pipe(istanbul())
      // Force `require` to return covered files
      .pipe(istanbul.hookRequire())
      .on('finish', resolve);

  });

}
/**
 * Run tests for server
 * @param project
 * @param cli
 * @returns {Promise}
 */
function testServer(project, cli) {

  return new Promise((resolve, reject) => {

    cli.log('Testing server');

    const config = {
      source: [
        project.paths.destination.server + '/**/*.js',
        '!' + project.paths.destination.server + '/**/bootstrap.js'
      ],
      coverage: project.paths.destination.coverage + '/server/js'
    };

    cli.log('Testing server');

    Error.stackTraceLimit = Infinity;

    require('core-js');
    require('reflect-metadata');
    require('zone.js/dist/zone-node');
    require('zone.js/dist/async-test');

    project.gulp.src(config.source, {cwd: project.basePath})
      .pipe(plumber(reject))
      // Run specs
      .pipe(jasmine({
          verbose: true,
          reporter: new SpecReporter({
            displayFailuresSummary: false
          })
        })
      )
      // Creating the reports after tests ran
      .pipe(istanbul.writeReports({
        dir: config.coverage,
        reporters: ['json']
      }))
      .on('end', resolve);
  });
}

function testBrowser(project, cli) {

  return new Promise((resolve, reject) => {

    cli.log('Testing browser');

    new KarmaServer({
      configFile: path.resolve(__dirname, '../..', 'browser/karma.conf.js'),
      basePath: project.basePath,
      singleRun: true,
    }, () => {
      cli.log('Test complete');
      resolve();
    }).start();

  });

}

function remapCoverage(project, cli) {

  return new Promise((resolve, reject) => {

    cli.log('Building coverage output');

    const config = {
      source: [
        project.resolvePath('./coverage/**/js/coverage-final.json'),
      ],
      coverage: project.paths.destination.coverage
    };

    project.gulp.src(config.source, {cwd: project.basePath})
      .pipe(plumber(reject))
      .pipe(tap((file) => {
        cli.log(chalk.blue('[merge]'), chalk.cyan('merging coverage info:', file.path));
      }))
      .pipe(merge('summary.json'))
      .pipe(project.gulp.dest(project.paths.destination.coverage))
      .pipe(gulpRemapIstanbul({
        reports: {
          'json': project.resolvePath('./coverage/summary/coverage.json'),
          'html': project.resolvePath('./coverage/summary/html-report'),
          'text': project.resolvePath('./coverage/summary/text-summary', true),
          'lcovonly': project.resolvePath('./coverage/summary/lcov.info')
        }
      }))
      .on('finish', () => {
        cli.log(fs.readFileSync(project.resolvePath('./coverage/summary/text-summary'))
          .toString());
        resolve();
      });

  });
}

module.exports = {task};