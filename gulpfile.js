var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins'),
	plugins = gulpLoadPlugins();
var Server = require('karma').Server;

function startServer(kconfig, done){
	var server = new Server(kconfig, function(exitCode){
		console.log(`Karma has exited with ${exitCode}`)
		process.exit(exitCode)
	})
	server.start()
	if(done !== undefined){
		done()
	}
}

/**
* Run test once and exit
*/
gulp.task('test', function(done){
	var kconfig = {
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}
	startServer(kconfig, done);
});

/**
* Travis test using firefox
*/
gulp.task('travis-test', function(done){
	var kconfig = {
		configFile: __dirname + '/karma.conf.js',
		browsers: ['Firefox'],
		singleRun: true
	}
	startServer(kconfig, done)
});

/**
* karma saucelab integration
*/
gulp.task('ci', function(done){
	var kconfig = {
		configFile: __dirname + '/karma.conf.ci.js'
	}
	startServer(kconfig, done)
});

/**
* Watch for file changes and re-run tests on each change
*/
gulp.task('tdd', function(done){
	var kconfig = {
		configFile: __dirname + '/karma.conf.js'
	}
	startServer(kconfig, done)
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

gulp.task('default', gulp.series('tdd', function(){}))