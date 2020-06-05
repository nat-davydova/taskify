const { src, dest } = require('gulp')
const { path } = require('../base/path')
const scss = require('gulp-sass')
const plumber = require('gulp-plumber')
const autoprefixer = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
// const cssmin = require('gulp-cssmin');
const cssmin = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.scss = function () {
  return src(path.src.scss)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss({
      sourceMap: true,
      errLogToConsole: true
    }))
    .pipe(autoprefixer({
      flexbox: true,
      grid: true
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(path.dist.styles))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.dist.styles))
}
