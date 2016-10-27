'use strict';
const gulp = require('gulp');
const { task } = require('gulp-shell');
require('require-dir')('./tasks/');

gulp.task('heroku:staging', ['bower'], task(['ng build --prod']));
gulp.task('heroku:production', ['bower'], task(['ng build --prod']));
