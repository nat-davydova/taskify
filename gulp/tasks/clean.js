const del = require('del')
const { path } = require('../base/path')

exports.cleanBuild = function (done) {
  del.sync([`${path.clean}`], done())
}
