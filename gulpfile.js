const babel = require('gulp-babel');
const gulp = require('gulp');
const print = require('gulp-print');


gulp.task('js', () => {
    return gulp.src('src/*.js')
        .pipe(print())
        .pipe( babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist'));
});