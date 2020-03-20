const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

gulp.task('sass', function() {
    return gulp.src('assets/sass/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false,
      }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('assets/css/'));
});

gulp.task('images', function() {
  return gulp.src('./img/*')
    .pipe(cache(imagemin({
      progressive: true,
      optimizationLevel: 5,
    })))
    .pipe(gulp.dest('./assets/images'))
})

gulp.task('watch', function () {
  gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./img/*', gulp.series('images'));
  // Other watchers
});
