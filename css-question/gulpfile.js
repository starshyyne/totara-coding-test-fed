
// For compiling Sass for CSS question
// For Gulp version 4

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var importer = require('node-sass-globbing');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

// Set Sass options - show expanded style for easy reading
// In production builds I would write a separate build that outputs as compact to removed unnecessary returns and spaces to boost performance
// Breakpoint requires importing mixins into the stylesheet
var sass_config = {
  outputStyle: 'expanded',
  importer: importer,
  includePaths: [
      'node_modules/breakpoint-sass/stylesheets/',
  ]
};

// Open a local browser window that automatically refreshes
gulp.task('browser-sync', function(done) {
    browserSync.init({
        server: true,
        index: "fed_code_test_css--question.html"
    });
    gulp.watch("./sass/**/*.scss", gulp.task(['sass']));
    gulp.watch(['./css/styles.css']).on('change', browserSync.reload);
    done();
});

// Basic build function
gulp.task('sass', function (done) {
  gulp.src('./sass/*.scss')
    .pipe(plumber())
    .pipe(sass(sass_config).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
    done();
});

var build = gulp.series('browser-sync', ['sass']);

gulp.task('default', build);