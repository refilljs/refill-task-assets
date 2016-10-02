'use strict';

var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var refillWatcher = require('refill-watcher');
var refillLogger = require('refill-logger');
var refillPromisifyStream = require('refill-promisify-stream');
var RefillNextHandler = require('refill-next-handler');

function getAssetsTask(options, gulp, mode, getOutputDir) {

  function assetsTask(next) {

    var logger = refillLogger('assets');
    var outputDir = getOutputDir();
    var zkflowNextHandler;

    function runAssets() {

      return zkflowNextHandler.handle(
        refillPromisifyStream(
          gulp
          .src(options.globs, options.globsOptions)
          .pipe(changed(outputDir))
          .pipe(gulpif(mode.env !== 'dev', imagemin(options.imagemin)))
          .pipe(gulp.dest(outputDir))
        )
      );

    }

    zkflowNextHandler = new RefillNextHandler({
      next: next,
      watch: mode.watch,
      logger: logger
    });

    refillWatcher.watch(runAssets, mode.watch, options.globs, logger);

  }

  return assetsTask;

}

module.exports = {
  getTask: getAssetsTask,
  defaultOptions: {
    globs: 'src/**/_assets/**',
    globsOptions: {
      base: './'
    }
  }
};
