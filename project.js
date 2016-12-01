'use strict';

const path  = require('path');
const _     = require('lodash');
const gulp  = require('gulp');
const fs    = require('fs');
const chalk = require('chalk');

class UbiquitsProject {

  constructor(basePath) {

    this.gulp     = gulp;
    this.basePath = basePath;

    this.docsConfig = {
      meta: {
        gaCode: null
      }
    };

    this.paths = {
      source: {
        base: './src',
        server: {
          tsConfig: this.basePath + '/tsconfig.server.json',
        },
        browser: {
          tsConfig: this.basePath + '/tsconfig.browser.json',
        },
        all: {
          tsConfig: this.basePath + '/tsconfig.json',
        },
        docs: {
          base: './docs',
          root: this.basePath,
          templates: 'templates',
          partials: 'templates/partials',
        }
      },
      destination: {
        lib: './lib',
        dist: './dist',
        coverage: './coverage',
        server: 'dist/server',
        common: 'dist/common',
        browser: 'dist/browser',
        docs: './dist-docs'
      }
    };

    this.deploymentConfig = {
      docs: {
        repo: null,
        remote: 'origin',
        branch: 'gh-pages',
        dir: this.paths.destination.docs
      }
    };
    
    this.socialConfig = {
      github: {
        forkMe: true,
        star: true
      },
      twitter: false,
      gitter: false
    };

    this.commandRegistry = [];

  }

  /**
   * Configure the deployment options
   * @param config
   * @returns {UbiquitsProject}
   */
  configureDeployment(config) {
    this.deploymentConfig = _.merge(this.deploymentConfig, config);
    return this;
  }

  /**
   * Configure the paths
   * @param config
   * @returns {UbiquitsProject}
   */
  configurePaths(config) {
    this.paths = _.merge(this.paths, config);
    return this;
  }

  /**
   * Configure Documentation options
   * @param config
   * @returns {UbiquitsProject}
   */
  configureDocs(config){
    this.docsConfig = _.merge(this.paths, config);
    return this;
  }

  /**
   * Configure Social options
   * @param config
   * @returns {UbiquitsProject}
   */
  configureSocial(config){
    this.socialConfig = _.merge(this.socialConfig, config);
    return this;
  }

  /**
   * Register a single command
   * @param commandRegisterFn
   * @returns {UbiquitsProject}
   */
  registerCommand(commandRegisterFn) {
    this.commandRegistry.push(commandRegisterFn);
    return this;
  }

  /**
   * Read all the tasks from ./cli/tasks, pushing them into the command registry
   */
  readTasks() {
    var taskDirectory = path.resolve(__dirname + '/cli/tasks');

    fs.readdirSync(taskDirectory).forEach((file) => {
      this.commandRegistry.push(require(path.resolve(taskDirectory, file)).task);
    });

  }

  /**
   * Resolve a path relative to the base
   * @param pathString
   * @param relative
   * @returns {string}
   */
  resolvePath(pathString, relative) {
    const normalized = path.normalize(this.basePath + '/' + pathString);
    if (!relative) {
      return normalized;
    }
    return path.relative(this.basePath, normalized);
  }

  /**
   * Read tasks from the task dir then iterate over all commands,
   * invoking them with vantage and this project instance
   * @param vorpal
   * @returns {UbiquitsProject}
   */
  loadRegisteredCommands(vantage) {

    this.readTasks();

    this.commandRegistry.forEach((commandRegisterFn) => {
      commandRegisterFn(vantage, this);
    });

    return this;
  }

  /**
   * Extends gutil.log with [project] prefix
   */
  log() {

    const task = chalk.white('[project]');

    Array.prototype.unshift.call(arguments, task);
    gutil.log.apply(this, arguments);
  }

}

module.exports = {UbiquitsProject};
