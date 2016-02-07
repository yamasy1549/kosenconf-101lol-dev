'use strict';

import gulp         from "gulp";
import loadPlugins  from "gulp-load-plugins";

import jade         from "gulp-jade";
import sass         from "gulp-sass";
import sassGlob     from "gulp-sass-glob";
import autoprefixer from "gulp-autoprefixer";
import imagemin     from "gulp-imagemin";
import pngquant     from "imagemin-pngquant";
import uglify       from "gulp-uglify";
import browserSync  from "browser-sync";
import path         from "path";

import plumber      from "gulp-plumber";

const $           = loadPlugins();
const reload      = browserSync.reload;

const SRC_DIR     = path.join(__dirname, "./src");
const DEST_DIR    = path.join(__dirname, "./dest");

const JADE_DIR    = path.join(SRC_DIR, "jade");
const SCSS_DIR    = path.join(SRC_DIR, "scss");
const IMAGES_DIR  = path.join(SRC_DIR, "images");
const SCRIPTS_DIR = path.join(SRC_DIR, "scripts");

const JADE_OPTIONS = {
    pretty: true
};

const SASS_OPTIONS = {
    outputStyle: "compressed"
};

const IMAGEMIN_OPTIONS = {
    progressive: true,
    use: [
        pngquant({
            quality: '65-80',
            speed: 1
        })
    ]
}

const BROWSER_SYNC_OPTIONS = {
    server: [SRC_DIR, DEST_DIR],
    open: false
};

gulp.task("jade", () => {
    return gulp.src(path.join(JADE_DIR, "**/*.jade"))
        .pipe(plumber())
        .pipe(jade(JADE_OPTIONS))
        .pipe(gulp.dest(DEST_DIR));
});

gulp.task("scss", () => {
    return gulp.src(path.join(SCSS_DIR, "**/*.{scss,css}"))
        .pipe(plumber())
        .pipe(sassGlob())
        .pipe(sass(SASS_OPTIONS))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.join(DEST_DIR, "styles")));
});

gulp.task("imagemin", () => {
    gulp.src(path.join(IMAGES_DIR, "**/*.{jpg,jpeg,png,gif,svg}"))
        .pipe(imagemin(IMAGEMIN_OPTIONS))
        .pipe(gulp.dest(path.join(DEST_DIR, "images")));
});

gulp.task("jsmin", () => {
    gulp.src(path.join(SCRIPTS_DIR, "**/*.js"))
        .pipe(uglify({preserveComments: 'some'}))
        .pipe(gulp.dest(path.join(DEST_DIR, "scripts")));
});

gulp.task("watch", () => {
    browserSync(BROWSER_SYNC_OPTIONS);

    gulp.watch([path.join(JADE_DIR, "**/*.jade")], ["jade", reload]);
    gulp.watch([path.join(SCSS_DIR, "**/*.{scss,css}")], ["scss", reload]);
    gulp.watch([path.join(SCRIPTS_DIR, "**/*.{jpg,jpeg,png,gif,svg}")], ["imagemin", reload]);
    gulp.watch([path.join(SCRIPTS_DIR, "**/*.js")], ["jsmin", reload]);
});
