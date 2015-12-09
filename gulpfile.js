'use strict';

var del = require('del'),
    gulp = require('gulp'),
    gulpsync = require('gulp-sync')(gulp),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer');

var options = {
  src: 'src',
  dist: 'dist'
};

gulp.task('scripts', function () {
  return gulp.src([options.src + '/**/*.js'])
    .pipe(eslint(require('./eslint.json')))
    .pipe(eslint.format())
    .pipe(uglify())
    .pipe(rename('ng-animate-model-change.js'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('styles', function(){
  return gulp.src([options.src + '/**/*.css'])
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(rename('ng-animate-model-change.css'))
    .pipe(gulp.dest(options.dist));
});

gulp.task('clean', function (cb){
  return del([options.dist], cb);
});

gulp.task('watch', function () {
  return gulp.watch([options.src + '/**/*'], ['build']);
});

gulp.task('default', gulpsync.sync([['build'], ['watch']]));
gulp.task('build', gulpsync.sync([['clean'], ['scripts', 'styles']]));