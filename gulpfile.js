var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var watch = require("gulp-watch");


gulp.task('build', function () {
    return gulp.src('./src/aftc.scss')
        .pipe(rename("aftc.min.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});