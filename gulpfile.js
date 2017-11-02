var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var watch = require("gulp-watch");


gulp.task('build', ["build-aftc-prod","build-aftc-dev","build-reset","build-combined"]);

gulp.task('watch', function () {
    gulp.watch("./src/**/*.scss", ["build-aftc-prod","build-aftc-dev","build-reset","build-combined"]);
});


gulp.task('build-aftc-prod', function () {
    return gulp.src('./src/aftc.scss')
        .pipe(rename("aftc.min.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-aftc-dev', function () {
    return gulp.src('./src/aftc.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-reset', function () {
    return gulp.src('./src/reset.scss')
        .pipe(rename("reset.min.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-combined', function () {
    return gulp.src('./src/aftc.combined.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(function (path) {
            //path.dirname += "/ciao";
            path.basename += ".min";
            //path.extname = ".md"
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});