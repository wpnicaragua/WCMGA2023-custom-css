// gulpfile.js

// Config ref: https://goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection
	
var gulp = require("gulp"),
    sass = require('gulp-sass')(require('sass')),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var browserSync = require("browser-sync").create();

var paths = {
    styles: {
        // By using styles/**/*.scss we're telling gulp to check all folders for any sass file
        src: "styles/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "./"
    }
 
};


function style() {
    return (
        gulp
            .src(paths.styles.src)
            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            // Use postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    );
}
 
exports.style = style;

function watch(){
	style();

    gulp.watch(paths.styles.src, style);
}
    
exports.watch = watch