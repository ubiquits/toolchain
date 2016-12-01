Error.stackTraceLimit = Infinity;

require('core-js');

require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy'); // since zone.js 0.6.15
require('zone.js/dist/jasmine-patch'); // put here since zone.js 0.6.14

/**
 * @todo resolve why this absolute replacement is necessary.
 * It seems that karma is executing in a different context (__dirname, not process.cwd()) and any
 * changes to the baseDir config seems to have no effect.
 * To resolve the issue, the solution is to use the string-replace-loader to make a replacement
 * at load-time to make the path absolute based on process.cwd() from webpack.test.ts
 *
 * This is a hack, and should be dealt with when a better solution is devised.
 */
var appContext = require.context('%working-dir%/src/browser', true, /\.spec\.ts/);
var commonContext = require.context('%working-dir%/src/common', true, /\.spec\.ts/);
appContext.keys().forEach(appContext);
commonContext.keys().forEach(commonContext);
