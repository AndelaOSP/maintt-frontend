'use strict';
const gulp = require('gulp');
const { task } = require('gulp-shell');
const nodemon = require('gulp-nodemon');

// if running in dev mode load env variables
if (!process.env.NODE_ENV) {
  require('dotenv').load();
}

gulp.task('nodemon', () => {
  nodemon({
      script: 'index.js',
      ext: 'js',
      ignore: ['public/', 'node_modules/']
    })
    .on('restart', () => {
      console.log('>> node restart');
    });
});

gulp.task('heroku:staging', task(['ng build --prod']));
gulp.task('heroku:production', task(['ng build --prod']));
gulp.task('default', ['nodemon'], task([
  'open http://localhost:4200',
  'npm start'
]));
