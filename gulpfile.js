var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");

// 静态服务器 + 监听 scss/html 文件
gulp.task('server', function () {
    browserSync.init({
        port: 8080, // 默认端口 3000
        server: {
            baseDir: "docs", // 静态服务器根目录
        }
    });

    gulp
        .watch("docs/*")
        .on('change', reload);
});

gulp.task('public', function () {
    gulp.src('docs/scripts/ztooltip.js')
        .pipe(gulp.dest('./'))
        .pipe(uglify())
        .pipe(rename({
            basename: 'ztooltip',
            extname: ".min.js"
        }))
        .pipe(gulp.dest('./'))
})

gulp.task('default', ['server']);