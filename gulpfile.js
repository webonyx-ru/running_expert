var gulp = require('gulp'),
    useref = require('gulp-useref'),
    wiredep = require('wiredep').stream,
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    ftp = require('gulp-ftp');

// sftp
gulp.task('ftp', function(){
    gulp.src("dist/**/*")
        .pipe(ftp({
            host: "",
            user: "",
            pass: "",
            remotePath: ""
        }))
})

// clean
gulp.task('clean', function(){
    gulp.src('dist', {read: false})
        .pipe(clean());
})

// Build
gulp.task('build',["clean"], function(){

    gulp.src("app/*.html")
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(useref())
        .pipe(gulp.dest('dist'));

    gulp.src("app/fonts/**/*")
        .pipe(gulp.dest('dist/fonts'));

    gulp.src("app/images/**/*")
        .pipe(gulp.dest('dist/images'));

    gulp.src("app/img/**/*")
        .pipe(gulp.dest('dist/img'));

});

// Bower
gulp.task('bower', function () {
    gulp.src('app/*.html')
        .pipe(wiredep({
            directory: "app/bower_components"
        }))
        .pipe(gulp.dest('app'));
})


// watch
gulp.task('bower', function () {
    gulp.watch('bower.json', ["bower"]);
})