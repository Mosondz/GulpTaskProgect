var gulp = require('gulp');

gulp.task('default', function(callback) {
		console.log('Hello');
	callback();
});
var sass = require('gulp-sass');
gulp.task('sass', function() {
return gulp.src('./sass/**/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('./css'));
});