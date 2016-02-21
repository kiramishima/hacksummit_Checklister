var gulp = require('gulp')
var typescript = require('gulp-tsc')

var paths = {
  src: ['./src/**/*.ts']
};

gulp.task('compile', function () {
  gulp.src(paths.src)
  .pipe(typescript({
    emitError: false
  }))
  .pipe(gulp.dest('./public/js/'))
})

gulp.task('default', ['compile'])

gulp.task('watch', function () {
  gulp.watch(paths.src, ['compile'])
})
