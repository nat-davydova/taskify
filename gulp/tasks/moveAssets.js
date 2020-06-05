const { src, dest } = require('gulp')
const { path } = require('../base/path')

exports.moveAssets = function (done) {
  path.src.moveAssets.forEach((item, index) => {
    return src(item)
      .pipe(dest(path.dist.moveAssets[index]))
  })

  done()
}
