// Gulp Konstanten requiren
const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass");
const gulpif = require("gulp-if");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const rollup = require("gulp-better-rollup");
const babel = require("rollup-plugin-babel");
const resolveNodeModules = require("rollup-plugin-node-resolve");

// Projekt status variable
let isProductionBuild = false;

// scss files in css umwandeln, autoprefix für browser-support
function runSass() {
  return gulp
    .src("src/sass/**/*.sass")
    .pipe(sass())
    .pipe(autoprefixer())
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

// JS minifizieren
function minifyJs() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      rollup(
        {
          plugins: [babel(), resolveNodeModules()],
        },
        { format: "cjs" }
      )
    )
    //.pipe(gulpif(isProductionBuild, uglify()))
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
    ["src/js/**/*.js", "!src/js/**/*.js"],
    gulp.series(minifyJs, reloadBrowser)
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
    .src("src/images/**/*.(gif|jpg|png|svg)")
    .pipe(gulp.dest("dist/images/"));
}
// Videos kopieren
function copyVideos() {
  return gulp
    .src("src/videos/**/*.(mp4|avi)")
    .pipe(gulp.dest("dist/videos/"));
}

// HTML kopieren
function copyHtml() {
  return gulp
    .src("src/**/*.html")
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
gulp.task("bundle", minifyJs);
gulp.task("bundle:build", gulp.series(startProductionBuild, minifyJs));
gulp.task("watch", gulp.series(runSass, minifyJs, runWatch));


// Builder Task
gulp.task(
  "build",
  gulp.series(
    startProductionBuild,
    runClean,
    gulp.parallel(copyHtml, copyImages, copyVideos, runSass, minifyJs)
  )
);
