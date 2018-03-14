let gulp = require('gulp');
var less = require('gulp-less');
let scss = require('gulp-scss')
var uglify = require("gulp-uglify");
var minify = require('gulp-minify-css');
var livereload = require('gulp-livereload');
var connect = require("gulp-connect");
var Reproxy = require("gulp-connect-reproxy");


gulp.task('default', function() {
    // 将你的默认的任务代码放在这
});

//拷贝文件
gulp.task('dest',function(){
    gulp.src('src/**/*.*')
        .pipe(gulp.dest('dist/'))
})

//编译scss
gulp.task('style',function(){
    gulp.src('src/**/*.scss')
        //将scss转化为css
        .pipe(scss())
        .pipe(gulp.dest('dist/'))
})

//编译less
gulp.task('less',function(){
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/'))
})

//压缩js
gulp.task('compass', function () {
    gulp.src(['src/**/*.js','!src/**/*.min.js'])  //获取文件，同时过滤掉.min.js文件
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));  //输出文件
});

//压缩css
gulp.task('cssmini', function () {
    gulp.src(['src/**/*.css', '!src/**/*.min.css'])  //要压缩的css
        .pipe(minify())
        .pipe(gulp.dest('dist/'));
});

//热加载
gulp.task('connect', function () {
    connect.server({
        root: "src",
        port: 9000,
        livereload: true,
    });
    gulp.watch('src/**/*.*',['reload'])
});

gulp.task('reload',function(){
    gulp.src('src/**/*.*')
        .pipe(connect.reload());
})



