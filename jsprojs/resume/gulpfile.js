//include all the required plugins
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var logCapture = require('gulp-log-capture');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var stripDebug = require('gulp-strip-debug');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jshintXMLReporter = require('gulp-jshint-xml-file-reporter');


// default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles', 'jshint', 'watch'], function() {

  //Message to log start of gulp
  console.log('Running the Default gulp function');
});

// Watch Task
gulp.task('watch', function() {

  //Setup Server details
  browserSync({
       server: {
        baseDir: 'public/build/'
       }
//    ,port : 4000  
  });

  // watch for HTML changes
  gulp.watch('public/*.html', ["htmlpage"]);
  // watch for JS changes
  gulp.watch('public/js/*.js', ["jshint", "scripts"]);
  // watch for CSS changes
  gulp.watch('public/css/*.css', ["styles"]);
    // watch for HTML changes
  gulp.watch('public/build/*.html', ["htmlpage-watch"]);
  // watch for JS changes
  gulp.watch('public/build/js/*.js', ["scripts-watch"]);
  // watch for CSS changes
  gulp.watch('public/build/css/*.css', ["styles-watch"]);
});

// browser reload function
//gulp.task('htmlpage-watch', ["htmlpage"], browserSync.reload);
//gulp.task('scripts-watch', ["jshint", "scripts"], browserSync.reload);
//gulp.task('styles-watch', ["styles"], browserSync.reload);

gulp.task('htmlpage-watch', browserSync.reload);
gulp.task('scripts-watch', browserSync.reload);
gulp.task('styles-watch', browserSync.reload);

// JS hint task
gulp.task('jshint', function() {

//Shows the output of jshint on lof files and displays it on console
  gulp.src('public/js/*.js')
    .pipe(jshint())
    .pipe(logCapture.start(console, 'log'))
    .pipe(logCapture.start(console, 'log'))
    .pipe(jshint.reporter('jslint_xml'))
    .pipe(logCapture.stop('xml'))
    .pipe(gulp.dest('public/log/lint-reports'));

//Shows the output of jshint on ./jshint.xml 
//    .pipe(jshint.reporter(jshintXMLReporter))
//    .on('end', jshintXMLReporter.writeFile());
//Other format
//    .pipe(jshint.reporter('gulp-jshint-file-reporter', {
//      filename: __dirname + '/jshint-output.log'
//    }));
//      .pipe(jshint('.jshintrc'))
 //     .pipe(jshint.reporter('jshint-stylish'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = 'public/images/**/*',
      imgDst = 'public/build/images';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = 'public/*.html',
      htmlDst = 'public/build';
 
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['public/js/*.js'])
//    .pipe(concat('script.js'))
//enablle for prodcution build
//    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('public/build/js/'));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['public/css/*.css'])
    .pipe(concat('style.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/build/css/'));
});

//npm install gulp-jshint gulp-concat gulp-log-capture gulp-uglify --save-dev 
//npm install gulp-imagemin gulp-changed  --save-dev
//npm install gulp-minify-html --save-dev
//npm install gulp-strip-debug --save-dev
//npm install gulp-jshint-xml-file-reporter --save-dev
//npm install gulp-jshint-file-reporter --save-dev
