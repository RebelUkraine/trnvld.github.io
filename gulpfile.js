'use strict';
var gulp = require('gulp');
var sass = require(‘gulp-sass’);
compile gulp.task('sass', function () { gulp.src('scss/*.scss') .pipe(sass().on('error', sass.logError)) .pipe(gulp.dest('css')); });
compile and watch gulp.task('sass:watch', function() { gulp.watch('app/scss/app.scss', ['sass']);});