const { src, dest } = require('gulp')
const { path } = require('../base/path')
const svgSprite = require('gulp-svg-sprite')
const svgmin = require('gulp-svgmin')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const imagemin = require('gulp-imagemin')

var config = {
  shape: {
    dimension: { // Set maximum dimensions
      maxWidth: 500,
      maxHeight: 500,
      attributes: true
    },
    spacing: { // Add padding
      padding: 0
    }
  },
  mode: {
    symbol: {
      dest: '.'
    }
  }
}

exports.svgSpriteSolid = function () {
  return src(path.src.svgSolid)
    .pipe(svgmin())
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill')
        $('[stroke]').removeAttr('stroke')
        $('[style]').removeAttr('style')
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite(config))
    .pipe(dest(path.dist.svgSolid))
}

exports.svgSpriteColored = function () {
  return src(path.src.svgColored)
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          { inlineStyles: { onlyMatchedOnce: false } },
          { minifyStyles: true }
        ]
      })
    ]))
    .pipe(svgmin())
    .pipe(svgSprite(config))
    .pipe(dest(path.dist.svgColored))
}
