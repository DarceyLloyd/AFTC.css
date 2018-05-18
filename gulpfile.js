var gulp = require('gulp');
var sass = require('gulp-sass');
//var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var watch = require("gulp-watch");


gulp.task('build', [
    "build-reset",
    "build-aftc-min-css",
    "build-aftc-css",
    "build-aftc-no-reset-min-css",
    "build-aftc-no-reset-css"
]);

gulp.task('watch', function () {
    gulp.watch("./src/**/*.scss", ["build-aftc-prod","build-aftc-dev","build-reset","build-combined"]);
});



gulp.task('build-reset', function () {
    return gulp.src('./src/reset.scss')
        .pipe(rename("reset.min.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('build-aftc-min-css', function () {
    return gulp.src('./src/aftc.scss')
        .pipe(rename("aftc.min.css"))
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});


gulp.task('build-aftc-css', function () {
    return gulp.src('./src/aftc.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('build-aftc-no-reset-min-css', function () {
    return gulp.src('./src/aftc.no-reset.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename(function (path) {
            //path.dirname += "/ciao";
            path.basename += ".min";
            //path.extname = ".md"
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-aftc-no-reset-css', function () {
    return gulp.src('./src/aftc.no-reset.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});