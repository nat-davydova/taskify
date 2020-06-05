exports.path = {
  src: {
    pugToWatch: './src/pug/**/*.pug',
    pugToCompile: './src/pug/*.pug',
    scss: './src/scss/**/*.scss',
    scripts: './src/scripts/',
    img: './src/assets/img/**/*.{jpg,png,jpeg,svg,gif,webp}',
    svgCommon: './src/assets/icons/**/*',
    svgSolid: './src/assets/icons/icons-solid/*.svg',
    svgColored: './src/assets/icons/icons-colored/*.svg',
    moveAssets: [
      './src/assets/fonts/**/*',
      './src/assets/favicon/**/*'
    ]
  },

  dist: {
    baseDir: './build/',
    styles: './build/styles/',
    scripts: './build/scripts',
    img: './build/assets/img/',
    svgSolid: './build/assets/sprites/sprites-solid',
    svgColored: './build/assets/sprites/sprites-colored',
    moveAssets: [
      './build/assets/fonts',
      './build/assets/favicon'
    ]
  },

  clean: './build'
}
