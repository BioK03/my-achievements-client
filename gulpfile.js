'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var jscs = require('gulp-jscs');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('jscs', function() {
    return gulp.src('./scripts/**/*.js')
     .pipe(jscs())
     .pipe(jscs.reporter());
});


gulp.task('compress', function() {
  gulp.src('./scripts/**/*.js')
    .pipe(concat('all.js'))
    .pipe(minify({
        ext:{
            min:'.js'
        }
    }))
    .pipe(gulp.dest('./dist/scripts'));

  gulp.src('./sass/**/*.scss')
   .pipe(concat('all.css'))
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./dist/styles'));
});
 
gulp.task('default', function () {
  gulp.watch('./sass/**/*.scss', ['compress']);
  gulp.watch('./scripts/**/*.js', ['jscs', 'compress']);
});