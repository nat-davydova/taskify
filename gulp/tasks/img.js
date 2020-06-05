const { src, dest } = require('gulp')
const { path } = require('../base/path')
const tinypng = require('gulp-tinypng-compress')
const imagemin = require('gulp-imagemin')

exports.imgRebase = function () {
  return src(path.src.img)
    .pipe(imagemin())
    .pipe(dest(path.dist.img))
}

exports.imgMin = function () {
  return src(path.src.img)
    .pipe(tinypng({
      key: 'API_KEY',
      log: true
    }))
    .pipe(dest(path.dist.img))
}
