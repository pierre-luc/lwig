var gulp 		= require( 'gulp' ),
    dest 		= require( 'gulp-dest' ),
    swig 		= require( 'gulp-swig' ),
    runSequence = require( 'run-sequence' ),
    shell       = require( 'gulp-shell' );


gulp.task( 'latex', shell.task([ 'make build' ]));


gulp.task( 'render-tex', function(){
	gulp.src( 'src/tex/**/*.tex' )
		.pipe( swig() )
		.pipe( dest( 'src/.render/', { ext: '.tex' } ) )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'render-sty', function(){
	gulp.src( 'src/assets/packages/**/*.sty' )
		.pipe( swig() )
		.pipe( dest( 'src/.render/', { ext: '.sty' } ) )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'render-cls', function(){
	gulp.src( 'src/assets/classes/**/*.cls' )
		.pipe( swig() )
		.pipe( dest( 'src/.render/', { ext: '.cls' } ) )
		.pipe( gulp.dest( './' ) );
});

gulp.task( 'render', [ 'render-sty', 'render-cls', 'render-tex' ]);
gulp.task( 'render-clean', shell.task([ 'make render-clean' ]));

gulp.task( 'watch', function(){
	gulp.watch( 'src/assets/packages/*.sty', [ 'latex' ] )
	gulp.watch( 'src/assets/classes/*.cls', [ 'latex' ] )
	gulp.watch( 'src/tex/**/*.tex', [ 'latex' ] )
});

gulp.task( 'swig', function(){
	gulp.src('src/tex/*.tex')
	    .pipe( swig() )
	    .pipe( dest('src/.render', {ext:'.tex'} ))
	    .pipe( gulp.dest( './' ) );
});

gulp.task( 'default', [ 'latex', 'watch' ]);

