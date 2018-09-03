'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');

gulp.task('default', function() {
    var tsResult = tsProject.src()
		.pipe(sourcemaps.init())
        .pipe(tsProject())
	var babelResult = tsResult.js
		.pipe(babel({presets: ['@babel/preset-env']}));
		//.pipe(sourcemaps.write('./'));
	return merge(tsResult.dts, babelResult)
        .pipe(gulp.dest('./dist'));
});