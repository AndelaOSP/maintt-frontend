'use strict';
const gulp = require('gulp');
const { task } = require('gulp-shell');
const nodemon = require('gulp-nodemon');

gulp.task('default', ['nodemon', 'bower'], task([
  'open http://localhost:4200',
  'npm start'
]));
