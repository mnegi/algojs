var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins'),
	plugins = gulpLoadPlugins();
var karma = require('karma').server;

/**
* Run test once and exit
*/
gulp.task('test', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done);
});

/**
* Travis test using firefox
*/
gulp.task('travis-test', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js',
		browsers: ['Firefox'],
		singleRun: true
	}, done);
});

/**
* karma saucelab integration
*/
gulp.task('ci', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.ci.js'
	}, done);
});

/**
* Watch for file changes and re-run tests on each change
*/
gulp.task('tdd', function(done){
	karma.start({
		configFile: __dirname + '/karma.conf.js'
	}, done);
});

/**
* JS linter
*/
gulp.task('lint', function(){
	gulp.src('./core/*.js')
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('default', {verbose: true}));
});

/**
* Remove test code blocks & move to dist directory
*/
gulp.task('dist', function(){
	gulp.src(['./core/*.js'])
		.pipe(plugins.stripCode({
			start_comment: 'test-block',
			end_comment: 'end-test-block'
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['tdd']);