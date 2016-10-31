'use strict';
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('nodemon', () => {
  nodemon({
    script: 'index.js',
    ext: 'js',
    ignore: ['public/', 'node_modules/']
  });
});
