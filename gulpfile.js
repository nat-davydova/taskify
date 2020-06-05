const { task, series } = require('gulp')

const { watch } = require('./gulp/tasks/watch')
const { cleanBuild } = require('./gulp/tasks/clean')
const { build } = require('./gulp/tasks/build')

const { imgMin } = require('./gulp/tasks/img')

task('build', series(cleanBuild, build))

task('default', series(cleanBuild, build, watch))

task('img-min', imgMin)
