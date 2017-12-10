var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var underscore = require('underscore');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();

var config = {
  paths: {
    scss: './app/scss/**/*.scss',
    js: './app/js/**/*.js',
    html: './app/index.html'
  },
  output: {
    cssName: 'bundle.min.css',
    path: './app'
  },
  isDevelop: true
};

gulp.task('scss', function () {
  return gulp.src(config.paths.scss)
    .pipe(gulpIf(config.isDevelop, sourcemaps.init()))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat(config.output.cssName))
    .pipe(gulpIf(!config.isDevelop, cleanCss()))
    .pipe(gulpIf(config.isDevelop, sourcemaps.write()))
    .pipe(gulp.dest(config.output.path))
    .pipe(browserSync.stream());
});

gulp.task('serve', function () {

  browserSync.init({
    server: {
      baseDir: config.output.path
    }
  });

  gulp.watch(config.paths.scss, ['scss']);
  gulp.watch(config.paths.js).on('change', browserSync.reload);
  gulp.watch(config.paths.html).on('change', browserSync.reload);
});


gulp.task('libs-css', function() {
  return gulp.src([
    'node_modules/font-awesome/css/font-awesome.min.css',
    'app/css/animate.css',
    'app/css/fonts.css',
    'app/css/bootstrap.css'
  ])
    .pipe(concat('libs.min.css'))
    .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function(){
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'app/js/popper.min.js',
    'app/js/bootstrap.js',
    'app/js/burger-menu.js',
    'app/js/materialize.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('app/js'));
});

gulp.task('default', ['scss', 'serve']);


