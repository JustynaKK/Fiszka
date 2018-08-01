var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({errLogToConsole: true,
            outputStyle: 'nested'})  //to jest domyslne nested, mozemy miec jeszcze compressed i innen, tej liniki nie trzeba ja chce sie miec domyslne
                .on('error', sass.logError)
        )
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
});

gulp.task('default', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
});