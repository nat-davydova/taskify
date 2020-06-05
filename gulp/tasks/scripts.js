const { src, dest, series } = require('gulp')
const { path } = require('../base/path')
const uglify = require('gulp-uglify-es').default
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const browserfy = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const buffer = require('gulp-buffer')
const del = require('del')

const jsDev = 'scripts.js' // file in source folder to compile
const tempBasename = 'scripts-temp' // basename for temporary file
const jsToBundle = `${tempBasename}.js` // temporary file to bundle with vendors
const jsVendorsArray = [] // array of vendor js files from 3rd-party plugins

const scriptsDev = function () {
  return browserfy({
    entries: [path.src.scripts + jsDev]
  })
    .transform(babelify, {
      presets: ['@babel/preset-env'],
      plugins: ['@babel/plugin-transform-runtime']
    })
    .bundle()
    .pipe(source(jsDev))
    .pipe(buffer())
    .pipe(rename({ basename: tempBasename }))
    .pipe(dest(path.dist.scripts))
}

const bundle = function () {
  return src([...jsVendorsArray, `${path.dist.scripts}/${jsToBundle}`])
    .pipe(concat('scripts.js'))
    .pipe(dest(path.dist.scripts))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.dist.scripts))
}

const cleanTemp = function (done) {
  del([`${path.dist.scripts}/${jsToBundle}`], done())
}

exports.scripts = series(scriptsDev, bundle, cleanTemp)
