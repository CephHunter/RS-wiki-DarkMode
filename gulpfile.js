var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var cssVip = require("gulp-css-vip");
var sessionID = [0];
try {
    sessionID = require("./sessionID.json");
} catch (error) {
    console.log("No sessionID found.");
}

gulp.task('less', function() {
    return gulp.src('./.less/darkmode.less')
        .pipe(plumber())
        .pipe(less())
        // .pipe(cssVip())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['less'], function() {
    browserSync.init({
        proxy: {
            target: "http://runescape.wikia.com",
            cookies: {stripDomain: false}
        },
        plugins: ['bs-rewrite-rules'],
        serveStatic: ["."],
        rewriteRules: [
            {
                match: "</body>",
                replace: '<link rel="stylesheet" type="text/css" href="/Darkmode.css"></body>'
            },
            {
                match: "<head>",
                replace: "<head>" + injectCookies()
            }
        ]
    });

    gulp.watch(".less/*.less", ['less']);
});

gulp.task('default', ['serve']);

function injectCookies() {
    var res = '<script>'
            + 'document.cookie = "access_token=0; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";' // Delete old cookie
            + 'document.cookie = "access_token=' + sessionID[0] + '";'
            + 'document.cookie = "euCookiePolicy=1"'
            + '</script>';
    return res;
}