'use strict';

import gulp         from "gulp";
import loadPlugins  from "gulp-load-plugins";

import jade         from "gulp-jade";
import sass         from "gulp-sass";
import sassGlob     from "gulp-sass-glob";
import autoprefixer from "gulp-autoprefixer";
import browserSync  from "browser-sync";
import path         from "path";

const $           = loadPlugins();
const reload      = browserSync.reload;

const SRC_DIR     = path.join(__dirname, "./src");
const DEST_DIR    = path.join(__dirname, "./dest");

const JADE_DIR    = path.join(SRC_DIR, "jade");
const SCSS_DIR    = path.join(SRC_DIR, "scss");
const SCRIPT_DIR  = path.join(SRC_DIR, "script");
const IMAGE_DIR   = path.join(SRC_DIR, "image");

const JADE_OPTIONS = {
    pretty: true
};

const SASS_OPTIONS = {
    outputStyle: "compressed"
};

const BROWSER_SYNC_OPTIONS = {
    server: [SRC_DIR, DEST_DIR],
    open: false
};

gulp.task("jade", () => {
    return gulp.src(path.join(JADE_DIR, "**/*.jade"))
        .pipe(jade(JADE_OPTIONS))
        .pipe(gulp.dest(DEST_DIR));
});

gulp.task("scss", () => {
    return gulp.src(path.join(SCSS_DIR, "**/*.{scss,css}"))
        .pipe(sassGlob())
        .pipe(sass(SASS_OPTIONS))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join(DEST_DIR, "styles")));
});

gulp.task("watch", () => {
    browserSync(BROWSER_SYNC_OPTIONS);

    gulp.watch([path.join(JADE_DIR, "**/*.jade")], ["jade", reload]);
    gulp.watch([path.join(SCSS_DIR, "**/*.{scss,css}")], ["scss", reload]);
});
