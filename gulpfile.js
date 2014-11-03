var gulp = require('gulp');
var karma = require('karma').server;
var jshint = require('gulp-jshint');

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
		.pipe(jshint())
		.pipe(jshint.reporter('default', { verbose: true }));
});


gulp.task('default', ['tdd']);