/* gulp */
const gulp = require('gulp');
/* plugins */
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const order = require('gulp-order');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
/* Paths */
const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'docs/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'docs/scripts/'
  },
  html: {
    src: "index.html",
    dest: "docs"
  },
  img: {
    src: "src/img/**/*.*",
    dest: "docs/img/"
  }
};

/* Tasks */

/* css */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(order([
      'normalize.scss',
      'variables.mixins.scss',
      'general-style.scss',
      'header.scss',
      'main.scss',
      'footer.scss',
      'animation.scss',
      'media.scss'
    ]))
    .pipe(concat('main.min.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());

}
/* js */
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(babel())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

/*html */
function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}
/* image optimization */
function img() {
  return gulp.src(paths.img.src)
    .pipe(newer(paths.img.dest))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 90, progressive: true }),
      imagemin.optipng({ optimizationLevel: 5, lossless: true }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest(paths.img.dest));
}

/* watch */
function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.img.src, img)
}
/* browsersync */
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./docs/"
    }
  });
};
/* clean dist */
function clearDocs() {
  return gulp.src(['docs'], { read: false, allowEmpty: true })
    .pipe(clean());
}

exports.build = gulp.series(clearDocs, html, styles, scripts, img);
exports.dev = gulp.series(html, styles, scripts, img, gulp.parallel(server, watch));



