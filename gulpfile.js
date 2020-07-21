// Gulp Konstanten requiren
const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const gulpif = require("gulp-if");
const htmlreplace = require("gulp-html-replace");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const rollup = require("gulp-better-rollup");
const babel = require("rollup-plugin-babel");
const resolveNodeModules = require("rollup-plugin-node-resolve");

// Projekt status variable
let isProductionBuild = false;

// scss files in css umwandeln, css minifizieren, autoprefix für browser-support
function runSass() {
  return gulp
    .src("src/sass/**/*.sass")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulpif(isProductionBuild, cssnano()))
    .pipe(
      gulpif(
        isProductionBuild,
        rename({
          suffix: ".min",
        })
      )
    )
    .pipe(
      gulpif(isProductionBuild, gulp.dest("dist/css/"), gulp.dest("src/css/"))
    )
    .pipe(browserSync.stream());
}

// Browser reload
function reloadBrowser(done) {
  browserSync.reload();
  done();
}

// JS bundeln, JS minifizieren
function bundleJs() {
  return gulp
    .src("src/js/main.js")
    .pipe(
      rollup(
        {
          plugins: [babel(), resolveNodeModules()],
        },
        { format: "cjs" }
      )
    )
    .pipe(gulpif(isProductionBuild, uglify()))
    .pipe(
      gulpif(
        isProductionBuild,
        rename({
          suffix: ".min",
        }),
        rename({
          suffix: "-bundle",
        })
      )
    )
    .pipe(
      gulpif(isProductionBuild, gulp.dest("dist/js/"), gulp.dest("src/js/"))
    );
}

// Watcher
function runWatch() {
  startBrowserSync();
  gulp.watch("src/sass/**/*.sass", runSass);
  gulp.watch("src/**/*.html", reloadBrowser);
  gulp.watch(
    ["src/js/**/*.js", "!src/js/**/*-bundle.js"],
    gulp.series(bundleJs, reloadBrowser)
  );
}

// Browsersync
function startBrowserSync() {
  browserSync.init({
    server: {
      baseDir: "src",
      browser: "firefox_dev"
    },
  });
}

// Bilder kopieren
function copyImages() {
  return gulp
    .src("src/images/*.(gif|jpg|png|svg)")
    .pipe(gulp.dest("dist/images/"));
}

// HTML kopieren
function copyHtml() {
  return gulp
    .src("src/**/*.html")
    .pipe(
      htmlreplace({
        js: "js/main.min.js",
        css: "css/main.min.css",
      })
    )
    .pipe(gulp.dest("dist/"));
}

// Dist Cleaner
function runClean(done) {
  del.sync("dist");
  done();
}

// Builder Funktion
function startProductionBuild(done) {
  isProductionBuild = true;
  done();
}

// Tasks
gulp.task("sass", runSass);
gulp.task("sass:build", gulp.series(startProductionBuild, runSass));
gulp.task("bundle", bundleJs);
gulp.task("bundle:build", gulp.series(startProductionBuild, bundleJs));
gulp.task("watch", gulp.series(runSass, bundleJs, runWatch));

//! Builder Task
gulp.task(
  "build",
  gulp.series(
    startProductionBuild,
    runClean,
    gulp.parallel(copyHtml, runSass, bundleJs)
  )
);
