const { series, parallel, watch } = require('gulp')
const { path } = require('../base/path')
const browserSync = require('browser-sync')
const { pug } = require('./pug')
const { scss } = require('./scss')
const { scripts } = require('./scripts')
const { imgRebase } = require('./img')
const { svgSpriteColored, svgSpriteSolid } = require('./sprites')
const { moveAssets } = require('./moveAssets')

const server = browserSync.create()

function serverInit (done) {
  server.init({
    host: 'localhost',
    server: {
      baseDir: path.dist.baseDir
    },
    injectChanges: true
  })
  done()
}

function reload (done) {
  server.reload()
  done()
}

const watchHtml = () => watch(path.src.pugToWatch, series(pug, reload))
const watchScss = () => watch(path.src.scss, series(scss, reload))
const watchScripts = () => watch(path.src.scripts + '**/*.js', series(scripts, reload))
const watchImg = () => watch(path.src.img, series(imgRebase, reload))
const watchSprites = () => watch(path.src.svgCommon, series(parallel(svgSpriteColored, svgSpriteSolid), reload))
const watchAssets = () => watch(path.src.moveAssets, series(moveAssets, reload))

exports.watch = series(serverInit, parallel(watchHtml, watchScss, watchScripts, watchImg, watchSprites, watchAssets))
