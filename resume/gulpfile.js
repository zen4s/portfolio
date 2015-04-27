var gulp = require("gulp");
var uglify = require("gulp-uglify");
var jshint = require("gulp-jshint");
var logCapture = require("gulp-log-capture");



gulp.task("default", function() {
	console.log("Running the Default gulp function");

#Shows the output form jshint and displays it on console
    gulp.src('public/js/*.js')
        .pipe(jshint())
        .pipe(logCapture.start(console, 'log'))
        .pipe(jshint.reporter('jslint_xml'))
        .pipe(logCapture.stop('xml'))
        .pipe(gulp.dest('lint-reports'));

#Converts js file and make it compressed by removing all white space 
	gulp.src("public/js/core.js").pipe(uglify()).pipe(gulp.dest("public/build/js/"));	
});