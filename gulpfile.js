'use strict';

// 필요한 모듈선언
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const notify = require("gulp-notify");
const babel = require('gulp-babel');
const shell = require('gulp-shell');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const exec = require('gulp-exec');

// 전역 오브젝트 모음
const fnObj = {
  paths: {
    src: 'src/',
    dist_es6: 'dist/ES6/',
    dist_es5: 'dist/ES5/',
    scss: 'scss/',
    css: 'css/'
  },
  errorAlert(error) {
    notify.onError({title: "Gulp Error", message: "Check your terminal", sound: "Purr"})(error); //Error Notification
    console.log(error.toString());//Prints Error to Console
    this.emit("end"); //End function
  }
};

// 걸프 기본 타스크
gulp.task('default', ['npm start'], function () {
  return true;
});

gulp.task('npm start', shell.task([
  'npm start',
]));

gulp.task('ax6ui.com deploy', shell.task([
  './ax6ui.com-deploy.sh',
]));