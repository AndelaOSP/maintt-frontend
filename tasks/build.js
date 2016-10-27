'use strict';
const gulp = require('gulp');
const { task } = require('gulp-shell');
const nodemon = require('gulp-nodemon');

gulp.task('heroku:staging', ['bower'],
  task(['ng build --prod']));

gulp.task('heroku:production', ['bower'],
  task(['ng build --prod']));

gulp.task('default', ['nodemon', 'bower'],
  task([
    'open http://localhost:4200',
    'npm start'
  ]));
