'use strict';
const gulp = require('gulp');
const bower = require('gulp-bower');

gulp.task('bower', () => {
  return bower();
});
