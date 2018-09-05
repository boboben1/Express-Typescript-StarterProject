'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');
var plumber = require('gulp-plumber');

gulp.task('default', function() {
    var tsResult = tsProject.src()
		.pipe(plumber())
		.pipe(sourcemaps.init())
        	.pipe(tsProject());
	var babelResult = tsResult.js
		.pipe(plumber())
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(sourcemaps.write('./'));
	return merge(tsResult.dts, babelResult)
	.pipe(plumber())
        .pipe(gulp.dest('./dist'));
});