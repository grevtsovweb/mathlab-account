const gulp = require('gulp');
const preproc = require('gulp-sass');
const pug = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const gcmq = require('gulp-group-css-media-queries');
const concat  = require('gulp-concat');
// const debug   = require('gulp-debug');
const gulpIf  = require('gulp-if');
const del     = require('del');
const newer   = require('gulp-newer');
const remember   = require('gulp-remember');
const path    = require('path');
const imagemin = require('gulp-tinypng');


const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';


gulp.task('styles', function(){
    return gulp.src('src/styles/style.sass', {base: 'src', since: gulp.lastRun('styles')})
        .pipe(remember('styles'))
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(preproc())
        .pipe(gulpIf(!isDevelopment, gcmq()))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpIf(!isDevelopment, cleanCSS({
            level: 2
        })))
        .pipe(gulpIf(isDevelopment, sourcemaps.write('.')))
        .pipe(gulp.dest('build'));
});


gulp.task('clean', function(){
    return del('build');
});


gulp.task('html', function(){
    return gulp.src('src/components/*.pug')
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest('build'))
});


gulp.task('assets', function(){
    return gulp.src(['src/assets/**/*', '!src/assets/img/sprite/tmp/**'], {since: gulp.lastRun('assets')}) 
        .pipe(newer('build'))
        .pipe(gulp.dest('build'));
});

gulp.task('img:assets', function(){
    return gulp.src(['src/assets/img/**/*.{png, jpg, svg}', '!src/assets/img/sprite'], {since: gulp.lastRun('assets')}) 
        .pipe(newer('build'))
        .pipe(gulpIf(!isDevelopment, imagemin('VXsZwYnw0bjKVuWCbsOMIyKPpsVeUrzd')))
        .pipe(gulp.dest('build/img'));
});


gulp.task('build', gulp.series('clean', 'img:assets', 'html', 'styles', 'assets'));




gulp.task('watch', function(){
    gulp.watch('src/styles/**/*.*', gulp.series('styles')).on('unlink', function(filepath){
        remember.forget('styles', path.resolve(filepath));
    });
    gulp.watch('src/assets/**/*.*', gulp.series('assets'));
    gulp.watch('src/components/**/*.*', gulp.series('assets', 'html', 'styles'));
	gulp.watch('src/assets/**/*.{png, jpg}', gulp.series('img:assets'));
});




gulp.task('serve', function(){
    browserSync.init({
        server: 'build'
    });
    browserSync.watch('build/**/*.*').on('change',  browserSync.reload);
});


gulp.task('dev', 
    gulp.series('build', gulp.parallel('watch', 'serve'))
);
