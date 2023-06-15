/****** gulp settings *******/

const css_file_name = 'studentlibrary-1607';

/******* output files *******/      

const output_files = "../";

/****************************/

const {src, dest, series, watch} = require('gulp')
const sass = require('gulp-sass')
const sync = require('browser-sync').create()
const rename = require("gulp-rename")
const autoprefixer = require('gulp-autoprefixer')

function scss() {
  return src('src/scss/index.scss')
    .pipe(sass())
    //.pipe(autoprefixer({
    //  browsers: ['last 4 versions']
    //}))
    .pipe(rename({
      basename: css_file_name,
    }))
    .pipe(dest(output_files))
}


function serve() {
  sync.init({
    server: './dist'
  })
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
}

exports.build = series( scss)
exports.serve = series( scss, serve)